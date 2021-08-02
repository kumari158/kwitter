
//ADD YOUR FIREBASE LINKS
var firebaseConfig = {
  apiKey: "AIzaSyD2wDfBQw2W_IVbMocb_0pN3cped79VjCE",
  authDomain: "fir-ef0e0.firebaseapp.com",
  databaseURL: "https://fir-ef0e0-default-rtdb.firebaseio.com",
  projectId: "fir-ef0e0",
  storageBucket: "fir-ef0e0.appspot.com",
  messagingSenderId: "814549106815",
  appId: "1:814549106815:web:3b578a6bee260efaad3f4a"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

  user_name = localStorage.getItem("user_name");

document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";

function addRoom()
{
  room_name = document.getElementById("room_name").value;

  firebase.database().ref("/").child(room_name).update({
    purpose : "adding room name"
  });

    localStorage.setItem("room_name", room_name);
    
    window.location = "kwitter_page.html";
}

function getData() {  firebase.database().ref("/").on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key;
       Room_names = childKey;
       console.log("Room Name - " + Room_names);
      row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
      document.getElementById("output").innerHTML += row;
    });
  });

}

getData();

function redirectToRoomName(name)
{
  console.log(name);
  localStorage.setItem("room_name", name);
    window.location = "kwitter_page.html";
}

function logout() {
localStorage.removeItem("user_name");
localStorage.removeItem("room_name");
    window.location = "index.html";
}
