var exec = new Object();

exec.runCode = function runCode(context) {
  // grab the previous element's inner html
  var innerHtml = context.previousElementSibling.children[0].innerHTML;
  // remove all the html tags added for styling
  var code = innerHtml.replace(/(<.*?>)/g, "");
  // execute the string that represents javascript code
  eval(code);
}