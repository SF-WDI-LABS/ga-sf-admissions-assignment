// message in the console
console.log("Hi there, welcome to the JavaScript console!");

// initialize the application
var app = new Object();

// define methods on the appliction
app.setName = function setName() {
  console.log("executing function app.setName"); // sanity check
  /*
    code here
    Step 1: prompt the user for their name
    Step 2: target the element with id "first-name"
    Step 3: replace its inner HTML of the element with the name of the user
  */
}

app.setHobby = function setHobby() {
  console.log("executing function app.setHobby"); // sanity check
  // code here
}

app.setWebsite = function setWebsite() {
  console.log("executing function app.setWebsite"); // sanity check
  var favSite = prompt("what's your fav site?");
  var siteEl = document.getElementById("favorite-website");
  siteEl.innerHTML = "<a href=http://" + favSite + ">clickme!</a>"
}