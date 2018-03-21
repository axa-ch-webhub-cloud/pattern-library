import dasherize from './dasherize';

const withReact = React => (WebComponent) => {
  console.log(WebComponent);
  console.log(WebComponent.name);
  console.log(dasherize(WebComponent.name));

  const WCTagName = dasherize(WebComponent.name);

  return class WebComponentWrapper extends React.PureComponent {
    render() {
      const { props } = this;
      const { children } = props;

      return (
        <WCTagName {...props} ref={(wcNode) => { this.wcNode = wcNode; }}>{children}</WCTagName>
      );
    }
  };
};

export default withReact;
