$("document").ready(function(){
  $("#button").click(function(){
    var name=$("#name").val();
    var email=$("#email").val();
    var message=$("#message").val();

    if (!name && !email) {
    alert("Enter your contact details!");
    }else if (!email) {
    alert(name +", enter your email!");
  } else if (!name) {
    alert("Enter your name!")
  }else {
    confirm(name + ", your details will be send to Dennis Yiaile.");
    alert(name+ ", your information have been send to Dennis Yiaile. In case of any questions or concerns, I will get back to you ASAP!");
    name.val = " ";
    email.val = " ";
    message.val = " ";
      }

  })
  })
  /*function myWeb(){
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var message = document.getElementById('message').value;
    var def = " ".value;
  if (!name && !email) {
    alert ("Enter your details");
  } else if (!name) {
    alert("Enter your name")
  }else if (!email) {
    alert("Enter your email")

  }else {
    alert("Continue")
  }

  document.getElementById('button').innerHTML = myWeb();
}*/
//clearing output
//var myname =document.getElementById('name').value();
//var myemail =document.getElementById('email').value();
//var mymessage =document.getElementById('message').value();
