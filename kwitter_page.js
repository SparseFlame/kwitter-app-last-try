// Your web app's Firebase configuration
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

user_name = localStorage.getItem("user_name");
	room_name = localStorage.getItem("room_name");

function send(){
  msg = document.getElementById("msg").value;
  firebase.database().ref(room_name).push({
    name:user_name,
    message:msg,
    like:0
  });
  document.getElementById("msg").value = "";
}

//Below code to be discussed in the next class for displaying the msg in html element//*

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
         console.log(firebase_message_id);
         console.log(message_data);
         name = message_data["name"];
         message = message_data["message"];
         like = message_data["like"];
         name_with_tag = "<h4>" + name +"<img class = 'user_tick' src = 'tick.png'></h4>";
         message_with_tag = "<h4 class = 'message_h4'>" + message + "</h4>";
         like_button = "<button class = 'btn btn-warning' id = " + firebase_message_id + " value = " + like + " onclick = 'updateLike(this.id)'>";
         span_with_tag = "<span class = 'glyphicon glyphicon-thumbs-up'> LIKE"+ like +"</span> </button> <hr>";
         raw = name_with_tag + message_with_tag + like_button + span_with_tag;
         document.getElementById("output").innerHTML += raw;
//End code
      } });  }); }
getData();

//Above code to be discussed in the next class for displaying the msg in html element//*
    
function updateLike(message_id)
{
  console.log("clicked on like button - " + message_id);
	button_id = message_id;
	likes = document.getElementById(button_id).value;
	updated_likes = Number(likes) + 1;
	console.log(updated_likes);

	firebase.database().ref(room_name).child(message_id).update({
		like : updated_likes  
	 });

}

function logout() {
localStorage.removeItem("user_name");
localStorage.removeItem("room_name");
window.location.replace("kwitter.html");
}























