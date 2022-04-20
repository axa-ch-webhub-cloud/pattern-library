import ReactDOM from 'react-dom';

const wrap = (content) => {
  const div = document.createElement('div');
  ReactDOM.render(content, div);
  return div;
};

export default wrap;
