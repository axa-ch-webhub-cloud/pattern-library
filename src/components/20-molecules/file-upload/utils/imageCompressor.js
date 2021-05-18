/* eslint-disable import/no-extraneous-dependencies */
import toBlob from 'blueimp-canvas-to-blob';

const URL = window.URL || window.webkitURL;
const { FileReader } = window;
const REGEXP_EXTENSION = /\.\w+$/;
const DEFAULTS = {
  maxWidth: 1024,
  maxHeight: 1024,
  minWidth: 0,
  minHeight: 0,
  width: undefined,
  height: undefined,
  quality: 0.6,
  mimeType: 'image/jpeg',
  convertSize: 5000000,
  success: null,
  error: null,
};

const isImageType = value => /^image\/.+$/.test(value);

const imageTypeToExtension = (value, includeDot = true) => {
  let extension = isImageType(value) ? value.substr(6) : '';
  if (extension === 'jpeg') {
    extension = 'jpg';
  }
  if (extension && includeDot) {
    extension = `.${extension}`;
  }
  return extension;
};

const createImage = (url, file, image) => {
  const _image = image;
  return new Promise((resolve, reject) => {
    _image.onload = () => {
      resolve({
        width: _image.naturalWidth,
        height: _image.naturalHeight,
      });
    };
    _image.onabort = reject;
    _image.onerror = reject;
    _image.alt = file.name;
    _image.src = url;
  });
};

const appendToCanvas = (width, height, _options, file, image) =>
  new Promise(resolve => {
    const options = _options;
    const canvas = document.createElement('canvas');
    const context = canvas.getContext('2d');
    const aspectRatio = width / height;
    let maxWidth = Math.max(options.maxWidth, 0) || Infinity;
    let maxHeight = Math.max(options.maxHeight, 0) || Infinity;
    let minWidth = Math.max(options.minWidth, 0) || 0;
    let minHeight = Math.max(options.minHeight, 0) || 0;
    let canvasWidth = width;
    let canvasHeight = height;
    if (maxWidth < Infinity && maxHeight < Infinity) {
      if (maxHeight * aspectRatio > maxWidth) {
        maxHeight = maxWidth / aspectRatio;
      } else {
        maxWidth = maxHeight * aspectRatio;
      }
    } else if (maxWidth < Infinity) {
      maxHeight = maxWidth / aspectRatio;
    } else if (maxHeight < Infinity) {
      maxWidth = maxHeight * aspectRatio;
    }
    if (minWidth > 0 && minHeight > 0) {
      if (minHeight * aspectRatio > minWidth) {
        minHeight = minWidth / aspectRatio;
      } else {
        minWidth = minHeight * aspectRatio;
      }
    } else if (minWidth > 0) {
      minHeight = minWidth / aspectRatio;
    } else if (minHeight > 0) {
      minWidth = minHeight * aspectRatio;
    }
    if (options.width > 0) {
      canvasWidth = options.width;
      canvasHeight = canvasWidth / aspectRatio;
    } else if (options.height > 0) {
      canvasHeight = options.height;
      canvasWidth = canvasHeight * aspectRatio;
    }
    canvasWidth = Math.min(Math.max(canvasWidth, minWidth), maxWidth);
    canvasHeight = Math.min(Math.max(canvasHeight, minHeight), maxHeight);
    canvas.width = canvasWidth;
    canvas.height = canvasHeight;
    if (!isImageType(options.mimeType)) {
      options.mimeType = file.type;
    }
    // Converts PNG files over the `convertSize` to JPEGs.
    if (file.size > options.convertSize && options.mimeType === 'image/png') {
      options.mimeType = 'image/jpeg';
    }
    // If the output image is JPEG
    if (options.mimeType === 'image/jpeg') {
      // Override the default fill color (#000, black) with #fff (white)
      context.fillStyle = '#fff';
      context.fillRect(0, 0, canvasWidth, canvasHeight);
    }
    context.drawImage(image, 0, 0, canvasWidth, canvasHeight);
    if (canvas.toBlob) {
      canvas.toBlob(resolve, options.mimeType, options.quality);
    } else {
      resolve(toBlob(canvas.toDataURL(options.mimeType, options.quality)));
    }
  });

const onResultCanvas = (res, _image, _options, file) => {
  const image = _image;
  const options = _options;
  let _result = res;
  if (URL) {
    URL.revokeObjectURL(image.src);
  }
  if (_result) {
    // Returns original file if the _result is greater than it and without size related options
    if (_result.size > file.size && !(options.width > 0 || options.height > 0 || options.maxWidth < Infinity || options.maxHeight < Infinity || options.minWidth > 0 || options.minHeight > 0)) {
      _result = file;
    } else {
      const date = new Date();
      _result.lastModified = date.getTime();
      _result.lastModifiedDate = date;
      _result.name = file.name;
      _result.id = file.id;

      // Convert the extension to match its type
      if (_result.name && _result.type !== file.type) {
        _result.name = _result.name.replace(REGEXP_EXTENSION, imageTypeToExtension(_result.type));
      }
    }
  } else {
    // Returns original file if the _result is null in some cases.
    _result = file;
  }
  if (options.success) {
    options.success(_result);
  }
  return Promise.resolve(_result);
};

const isBlob = input => {
  if (typeof Blob === 'undefined') {
    return false;
  }

  return (
    /* global Blob */ // otherwise Blob would be marked as undefined
    input instanceof Blob || Object.prototype.toString.call(input) === '[object Blob]'
  );
};

const createPromise = (file, _options) => {
  const options = _options;
  if (!isBlob(file)) {
    return false;
  }
  if (!isImageType(file.type)) {
    return false;
  }
  // const image = new Image();
  const image = document.createElement('img');
  return new Promise((resolve, reject) => {
    if (URL) {
      resolve(URL.createObjectURL(file));
    } else if (FileReader) {
      const reader = new FileReader();

      reader.onload = e => resolve(e.file.result);
      reader.onabort = reject;
      reader.onerror = reject;
      reader.readAsDataURL(file);
    } else {
      // eslint-disable-next-line prefer-promise-reject-errors
      reject('The current browser does not support image compression.');
    }
  })
    .then(url => createImage(url, file, image))
    .then(({ width, height }) => appendToCanvas(width, height, _options, file, image))
    .then(res => onResultCanvas(res, image, options, file))
    .catch(err => {
      if (!options.error) {
        throw err;
      }

      options.error(new Error(err));
    });
};

const compressedImage = (filesList, _options) => {
  if (!filesList.length) {
    return false;
  }
  const options = { ...DEFAULTS, ..._options };
  const promises = [];
  const files = [...filesList];
  files.forEach(file => {
    const filePromise = createPromise(file, options);
    if (filePromise) {
      promises.push(filePromise);
    }
  });
  return Promise.all(promises);
};

export default compressedImage;
