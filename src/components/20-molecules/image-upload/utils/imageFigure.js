export default (node, file, key) => {
  // TODO
  // if (this.wcNode[key].getAttribute('data-image-set')) {
  //   return;
  // }
  const urlCreator = window.URL || window.webkitURL;
  const imageUrl = urlCreator.createObjectURL(file);

  const figure = document.createElement('figure');
  figure.className = 'm-image-upload__img-figure';
  node.appendChild(figure);

  const hoverArea = document.createElement('div');
  hoverArea.className = 'm-image-upload__icon-hover-area';
  figure.appendChild(hoverArea);

  const img = document.createElement('img');
  img.className = 'm-image-upload__img-element';
  img.src = imageUrl;
  img.alt = ''; // TODO
  hoverArea.appendChild(img);

  const iconLayer = document.createElement('div');
  iconLayer.className = 'm-image-upload__icon-layer';
  hoverArea.appendChild(iconLayer);

  const binIcon = document.createElement('axa-icon');
  // TODO class doesn't get set
  binIcon.classList.add('m-image-upload__icon-baseline-delete-forever');
  binIcon.setAttribute('icon', 'baseline-delete-forever');
  iconLayer.appendChild(binIcon);

  const figCaption = document.createElement('figcaption');
  figCaption.className = 'm-image-upload__img-caption';
  const textNode = document.createTextNode('der titel');
  figCaption.appendChild(textNode);
  figure.appendChild(figCaption);

  // this.wcNode.setAttribute('data-image-set', 'true');
  // TODO
  // on(hoverArea, 'click', () => console.log('image entfernen'), {
  //   passive: false,
  // });
  return figure;
}
