import { DeleteSvg } from './../icons';

export default (dropZone, file) => {
  const urlCreator = window.URL || window.webkitURL;
  const imageUrl = urlCreator.createObjectURL(file);

  const figure = document.createElement('figure');
  figure.className = 'm-image-upload__img-figure';
  dropZone.appendChild(figure);

  const hoverArea = document.createElement('div');
  hoverArea.className = 'm-image-upload__icon-hover-area';
  figure.appendChild(hoverArea);

  const img = document.createElement('img');
  img.className = 'm-image-upload__img-element';
  img.src = imageUrl;
  img.alt = '';
  hoverArea.appendChild(img);

  const iconLayer = document.createElement('div');
  iconLayer.className = 'm-image-upload__icon-layer';
  iconLayer.innerHTML = DeleteSvg;
  hoverArea.appendChild(iconLayer);

  const wrapper = document.createElement('div');
  wrapper.className = 'm-image-upload__img-caption-wrapper';
  wrapper.dataset.filetype = 'txt';
  hoverArea.appendChild(wrapper);

  const figCaption = document.createElement('figcaption');
  figCaption.className = 'm-image-upload__img-caption';
  const node = document.createTextNode('der titel ist sooooo lang');
  figCaption.appendChild(node);
  wrapper.appendChild(figCaption);
};
