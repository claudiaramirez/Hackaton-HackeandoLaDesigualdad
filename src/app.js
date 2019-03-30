document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.sidenav');
    var instances = M.Sidenav.init(elems);
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


const aboutUsPage = document.getElementById('aboutUsPage');
 const writeYourHistoryPage = document.getElementById('writeYourHistoryPage');
 const homePage = document.getElementById('homePage');
 const instructionsPage = document.getElementById('searchPage');
 const testimonies = document.getElementById('testimonies');
 const searchPage = document.getElementById('searchPage');
