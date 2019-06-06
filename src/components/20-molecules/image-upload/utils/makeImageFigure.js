export default (dropZone, file) => {
  console.log('makeImageFigure', window, file); // TODO when pdf -> doesn't work
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
  hoverArea.appendChild(iconLayer);

  const binIcon = document.createElement('axa-icon');
  console.log('binIcon', binIcon);
  // TODO class doesn't get set
  binIcon.classList.add('m-image-upload__icon-baseline-delete-forever');
  console.log('binIcon', binIcon.classList);
  binIcon.setAttribute('icon', 'baseline-delete-forever');
  iconLayer.appendChild(binIcon);

  const figCaption = document.createElement('figcaption');
  figCaption.className = 'm-image-upload__img-caption';
  const node = document.createTextNode('der titel');
  figCaption.appendChild(node);
  figure.appendChild(figCaption);
  // this.wcNode.setAttribute('data-image-set', 'true');
  // TODO
  // on(hoverArea, 'click', () => console.log('image entfernen'), {
  //   passive: false,
  // });
};
