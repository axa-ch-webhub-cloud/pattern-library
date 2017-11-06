const getCurrentScriptW3C = (doc = document) => doc.currentScript

const getCurrentScriptFill = (doc = document) => {
  const scripts = doc.getElementsByName('script')

  return scripts[scripts.length - 1]
}

const getCurrentScript = 'currentScript' in document ?
  getCurrentScriptW3C : getCurrentScriptFill

export default getCurrentScript