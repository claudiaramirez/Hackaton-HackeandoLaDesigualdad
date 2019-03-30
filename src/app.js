
const homePage = document.getElementById('home');
const writeYourHistoryPage = document.getElementById('writeYourHistoryPage');
const testimonies = document.getElementById('testimonios');
const search = document.getElementById('search');
const homeBtn = document.getElementById('homeBtn');
const writeBtn = document.getElementById('writeBtn');
const testimoniesBtn = document.getElementById('testimoniesBtn');
const searchBtn = document.getElementById('searchBtn');




document.addEventListener('DOMContentLoaded', function() {
  var elems = document.querySelectorAll('.sidenav');
  var instances = M.Sidenav.init(elems);
  
  var elems = document.querySelectorAll('.collapsible');
  var instances = M.Collapsible.init(elems);
}); 

let mainApp = {};
var db = firebase.firestore();
//Crea los datos y los manda a Firestore
function send() {
let textInput = document.getElementById('txtPost').value;
let name = document.getElementById("name").value;
db.collection("state").add({
    first: name,
    history: textInput,
  })
  .then(function (docRef) {
    console.log("Document written with ID: ", docRef.id);
    let textInput = document.getElementById('txtPost').value = '';
    let nametInput = document.getElementById('name').value = '';
  })
  .catch(function (error) {
    console.error("Error adding document: ", error);
  });
}






 homeBtn.addEventListener("click", ()=>{
    writeYourHistoryPage.classList.add('hide');
    testimonies.classList.add('hide');
    search.classList.add('hide');
    homePage.classList.remove('hide');
 })

 writeBtn.addEventListener("click", ()=>{
   homePage.classList.add('hide');
   testimonies.classList.add('hide');
   search.classList.add('hide');
  writeYourHistoryPage.classList.remove('hide');
 })

 testimoniesBtn.addEventListener("click", ()=>{
   homePage.classList.add('hide');
   search.classList.add('hide');
   writeYourHistoryPage.classList.add('hide');
   testimonies.classList.remove('hide');
 })
 searchBtn.addEventListener("click", ()=>{
   homePage.classList.add('hide');
   writeYourHistoryPage.classList.add('hide');
   testimonies.classList.add('hide');
   search.classList.remove('hide');
 })
 
 
