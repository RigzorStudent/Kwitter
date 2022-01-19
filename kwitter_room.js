const firebaseConfig = {
      apiKey: "AIzaSyDju9N9oPLFL67oPkafJsKOxQrtOKYPM48",
      authDomain: "qwitter-e61f7.firebaseapp.com",
      databaseURL: "https://qwitter-e61f7-default-rtdb.firebaseio.com",
      projectId: "qwitter-e61f7",
      storageBucket: "qwitter-e61f7.appspot.com",
      messagingSenderId: "850753244044",
      appId: "1:850753244044:web:abf4c9645f76ea348ba4a9"
    };
    firebase.initializeApp(firebaseConfig)
//ADD YOUR FIREBASE LINKS HERE
user_name=localStorage.getItem('user_name')
document.getElementById("user_name").innerHTML= "Welcome" + user_name + "!";
 function addRoom()
 {
     room_name =document.getElementById("room_name").value;
     firebase.database().ref("/").child(room_name).update
     (
     {
      purpose:"Adding Room Name",
       why:"To add Room Name"
     }
     )
     localStorage.setItem("room_name",room_name)
     window.location="kwitter_page.html"



 }





function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("Room Name -" +Room_names);
      row= "<div class='room_name' id=" + Room_names + " onclick='redirectToRoomName(this.id)'>#" + Room_names + " </div><hr>"
     document.getElementById("output").innerHTML += row;



      //End code
    
      });});}
getData();
function redirectToRoomName(Name)
{
  console.log(Name)
  localStorage.setItem("room_name",Name)
  window.location="kwitter_page.html"




}
function logout()
{
localStorage.removeItem("user_name")
localStorage.removeItem("room_name")
window.location="index.html"

}
  