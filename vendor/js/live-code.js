const liveCode = new Object();

liveCode.getCode = function getCode(e) {
  const context = e.target;
  console.log("executing code in context:", context);
  // grab the previous element's inner html
  const innerHtml = context.previousElementSibling.innerHTML;
  // remove all the html tags added for styling
  const code = innerHtml.replace(/(<.*?>)/g, "");
  return code;
}

liveCode.runCode = function runCode(e) {
  console.log(this)
  const code = liveCode.getCode(e);
  // execute the string that represents javascript code
  eval(code);
}

liveCode.reHighlight = function reHighlight(e) {
  console.log("editing:", e.target);
}
