const withReact = React => (WebComponent) => {
  console.log(WebComponent);

  const WCTagName = '';

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
