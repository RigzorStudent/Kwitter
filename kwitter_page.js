//YOUR FIREBASE LINKS
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



room_name = localStorage.getItem("room_name")
user_name = localStorage.getItem("user_name")
function send() {
    msg = document.getElementById("msg").value
    console.log(msg)
    firebase.database().ref(room_name).push
        (
            {
                Name: user_name,
                msg: msg,
                like: 0
            }
        )
    document.getElementById("msg").value = ""
}



function getData() {
    firebase.database().ref("/" + room_name).on('value', function (snapshot) {
        document.getElementById("output").innerHTML = ""; snapshot.forEach(function (childSnapshot) {
            childKey = childSnapshot.key; childData = childSnapshot.val(); if (childKey != "purpose") {
                firebase_message_id = childKey;
                message_data = childData;
                //Start code
                console.log(firebase_message_id)
                console.log(message_data)
                Name = message_data['Name']
                like = message_data['like']
                message = message_data['msg']

                name_with_tag = Name;

                name_img ="<img class='user_tick' src='tick.png'>"

                message_with_tag = "<h4 class='message_h4'>" + message + "</h4>";



                like_button = "<button class='btn btn-warning' id=" + firebase_message_id + " value=" + like + " onclick='updateLike(this.id)'>";

                span_with_tag = "<span class='glyphicon glyphicon-thumbs-up'>Like: " + like + "</span></button><hr>";

                row = name_with_tag +name_img+ message_with_tag + like_button + span_with_tag;
                document.getElementById("output").innerHTML += row;
                //End code
            }
        });
    });
}
getData()


function updateLike(message_id) {
      console.log("clicked on like button - " + message_id);
      button_id = message_id;
      like_1 = document.getElementById(button_id).value;
      console.log(like_1)
      updated_like= Number(like_1) + 1;
      console.log(updated_like);
  
      firebase.database().ref(room_name).child(message_id).update
            ({
                  like: updated_like
            });
  
  }


  
function logout() {
    localStorage.removeItem("user_name")
    localStorage.removeItem("room_name")
    window.location = "index.html"

}   
