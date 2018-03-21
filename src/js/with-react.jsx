import dasherize from './dasherize';

const withReact = React => (WebComponent) => {
  console.log(WebComponent);
  console.log(WebComponent.name);
  console.log(dasherize(WebComponent.name));

  const { name } = WebComponent;
  const displayName = `${name}React`;
  const WCTagName = dasherize(WebComponent.name);

  return class WebComponentWrapper extends React.PureComponent {
    static get displayName() {
      return displayName;
    }

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
