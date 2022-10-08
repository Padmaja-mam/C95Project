
// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyB4oObkLKiTYeNdSS5Y1JtDsKf1FNO3B8g",
  authDomain: "kwitter-c4f5b.firebaseapp.com",
  databaseURL: "https://kwitter-c4f5b-default-rtdb.firebaseio.com",
  projectId: "kwitter-c4f5b",
  storageBucket: "kwitter-c4f5b.appspot.com",
  messagingSenderId: "794089050526",
  appId: "1:794089050526:web:c6eba5136a1119eb59068f"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
  
  user_name = localStorage.getItem("user_name");
  
  document.getElementById("user_name").innerHTML = "Welcome " + user_name + "..!";
  
  function addRoom()
  {
    room_name = document.getElementById("room_name").value;
    
    firebase.database().ref("/").child(room_name).update({
      user : user_name
    });
  
      localStorage.setItem("room_name", room_name);
      
      window.location = "kwitter_page.html";
  }
  console.log(firebase);

  function getData()
 {  
    firebase.database().ref("/").on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key;
       Room_names = childKey;
       console.log("Room Name - " + Room_names);
      row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
      document.getElementById("output").innerHTML += row;
    });
  });

}

getData();