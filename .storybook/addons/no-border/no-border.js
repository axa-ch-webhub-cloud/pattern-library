const noBorderStyles = '.sb-show-main{margin: 0}';

export const withNoBorderReact = storyFn => {
    const div = document.createElement('div');
    const style = document.createElement('style');
    style.innerHTML = noBorderStyles;
    div.appendChild(style);
    div.appendChild(storyFn());
    return div;
};

export default story => `
    <style>${noBorderStyles}</style>
    <div>${story()}</div>
`
