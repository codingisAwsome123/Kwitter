//YOUR FIREBASE LINKS
const firebaseConfig = {
      apiKey: "AIzaSyA4t6xgTgopidz5XxoEK64SLtpvAHueztk",
      authDomain: "kwitter-database-d0473.firebaseapp.com",
      databaseURL: "https://kwitter-database-d0473-default-rtdb.firebaseio.com",
      projectId: "kwitter-database-d0473",
      storageBucket: "kwitter-database-d0473.appspot.com",
      messagingSenderId: "716863417295",
      appId: "1:716863417295:web:fc0008b77b968e4b9e80ba",
      measurementId: "G-1Y3BGZY27Z"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code

//End code
      } });  }); }
getData();
