
//YOUR FIREBASE LINKS//// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCW0iFjF9pa4CRZLzW7D5acDwyqQCu2QCQ",
  authDomain: "kwitter-something-idk.firebaseapp.com",
  databaseURL: "https://kwitter-something-idk-default-rtdb.firebaseio.com",
  projectId: "kwitter-something-idk",
  storageBucket: "kwitter-something-idk.appspot.com",
  messagingSenderId: "600304391230",
  appId: "1:600304391230:web:20c8edeb8fed97e8bbed6f"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// storing UN and RN //

  user_name = localStorage.getItem("user_name");
room_name = localStorage.getItem("room_name");

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

//discuss in C97//
function getData() {  firebase.database().ref("/").on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key;
       Room_names = childKey;
       console.log("Room Name - " + Room_names);
      row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
      document.getElementById("output").innerHTML += row;
    });
  });

}

getData();

//discuss in C97//

function redirectToRoomName(name)
{
  console.log(name);
  localStorage.setItem("room_name", name);
    window.location = "kwitter_page.html";
}

function logout(){
  localStorage.removeItem("user_name");
  localStorage.removeItem("room_name");
  window.location("kwitter.html");
}