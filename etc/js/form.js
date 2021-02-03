// Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  var firebaseConfig = {
    apiKey: "AIzaSyB87tsRXhmdvNH4YJ9k03dZRA4UZfmmG8o",
    authDomain: "contactform-25577.firebaseapp.com",
    databaseURL: "https://contactform-25577-default-rtdb.firebaseio.com",
    projectId: "contactform-25577",
    storageBucket: "contactform-25577.appspot.com",
    messagingSenderId: "436658459323",
    appId: "1:436658459323:web:d3a9d9e13d1d4df4dd0f9e",
    measurementId: "G-R5WCS11HGZ"
  };


  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
//   firebase.analytics();

  // reference messages collection
  var messagesRef = firebase.database().ref('messages');

document.getElementById('contactForm').addEventListener('submit', submitForm);

//submit form

function submitForm(e){
    e.preventDefault();

    //get values
    var Name = getInputVal('Name');
    var Surname = getInputVal('Surname');
    var Email = getInputVal('Email');
    var Phone = getInputVal('Phone');
    var Message = getInputVal('Message');

    // save message
    saveMessage(Name, Surname, Email, Phone, Message);

    // show alert
    document.querySelector('.alert').style.display = 'block';

    // hide alert after 1.5 sec

    setTimeout(function(){
        document.querySelector('.alert').style.display = 'none';

    },3000);




    
}

//funtction to get form value
function getInputVal(id){
    return document.getElementById(id).value;
}


// save the messages to firebase

function saveMessage(Name, Surname, Email, Phone, Message){
    var newMessageRef = messagesRef.push();
    newMessageRef.set({
        Name: Name,
        Surname: Surname,
        Email: Email,
        Phone: Phone,
        Message: Message
    });
}

