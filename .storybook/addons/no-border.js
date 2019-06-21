// This resets the default body margin in the story preview panel.
// Sometimes we need this to demonstrate 0-border-stories, i.e le footer
export default story => `<style>.sb-show-main{margin: 0}</style>${story()}`