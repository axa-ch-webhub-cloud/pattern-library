export default (node, file) => {

  const urlCreator = window.URL || window.webkitURL;
  const imageUrl = urlCreator.createObjectURL(file);

  const figure = document.createElement('figure');
  figure.className = 'js-image-upload__img-figure m-image-upload__img-figure m-image-upload__img-wrapper';
  node.appendChild(figure);

  const hoverArea = document.createElement('div');
  hoverArea.className = 'm-image-upload__icon-hover-area js-image-upload__icon-hover-area';
  figure.appendChild(hoverArea);

  const img = document.createElement('img');
  img.className = 'm-image-upload__img-element';
  img.src = imageUrl;
  img.alt = file.name;
  hoverArea.appendChild(img);

  const iconLayer = document.createElement('div');
  iconLayer.className = 'm-image-upload__icon-layer';
  hoverArea.appendChild(iconLayer);

  // TODO not axa-icon
  // const binIcon = document.createElement('axa-icon');
  // binIcon.classList.add('m-image-upload__icon-baseline-delete-forever');
  // binIcon.setAttribute('icon', 'baseline-delete-forever');
  // iconLayer.appendChild(binIcon);

  const figCaption = document.createElement('figcaption');
  figCaption.className = 'm-image-upload__img-caption';
  const textNode = document.createTextNode(file.name);
  figCaption.appendChild(textNode);
  figure.appendChild(figCaption);

  return figure;
}
