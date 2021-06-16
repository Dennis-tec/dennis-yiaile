$("document").ready(function(){
  $("#button").click(function(){
    var name=$("#name").val();
    var email=$("#email").val();
    var message=$("#message").val();

    if (!name && !email) {
    alert("Enter your contact details!");
    $(message).val("");
    return false;
  }else if (!email) {
    alert(name +", enter your email!");
    return false;
  } else if (!name) {
    alert("Enter your name!")
    return false;
  }else {
    confirm(name + ", your details will be send to Dennis Yiaile.");
    alert(name+ ", your information have been send to Dennis Yiaile. In case of any questions or concerns, I will get back to you ASAP!");
      }
  })
  })
  function sendMail() {
    var link = "mailto:ykamakei6345@gmail.com"
             + "?cc=ykamakei6345@gmail.com"
             + "&subject=" + encodeURIComponent("This is my subject")
             + "&body=" + encodeURIComponent(document.getElementById('message').value);

    window.location.href = link;
}
