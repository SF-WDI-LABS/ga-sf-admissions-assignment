const liveCode = new Object();

liveCode.getCode = function getCode(context) {
  const innerHtml = context.innerHTML; // grab the previous element's inner html
  const code = innerHtml.replace(/(<.*?>)/g, ""); // remove all the html tags added for styling
  return code;
}

liveCode.runCode = function runCode(e) {
  const code = liveCode.getCode(e.target.previousElementSibling); // get raw code
  eval(code); // execute a string that represents javascript code
}

liveCode.reHighlight = function reHighlight(e) {
  const target = e.target;
  const charPos = $(target).caret("pos"); // find original cursor position
  const code = liveCode.getCode(target); // get raw code
  const html = Prism.highlight(code, Prism.languages.javascript);
  this.innerHTML = html; // update highlighting
  $(target).caret("pos", charPos); // set to original cursor position
}
