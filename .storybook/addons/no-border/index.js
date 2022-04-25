// Sometimes we receive (storyFn()) a DOMNode which we have to append
// Sometimes it's already the finalized HTML String.
export default storyFn => {
  const noBorderStyles = '.sb-show-main{ padding: 0 !important; }';

  if (typeof storyFn() === 'string') {
    return `
            <style>${noBorderStyles}</style>
            <div>${storyFn()}<div>
        `;
  }

  if (typeof storyFn() === 'object') {
    const div = document.createElement('div');
    const style = document.createElement('style');
    style.innerHTML = noBorderStyles;
    div.appendChild(style);
    div.appendChild(storyFn());
    return div;
  }
};
