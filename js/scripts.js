$("document").ready(function(){
  $("#button").click(function(){
    var name=$("#name").val();
    var email=$("#email").val();
    var message=$("#message").val();
    if (!name && !email) {
    alert("Enter your contact details!");
    $("#message").val("");
    return false;
  }else if (!email) {
    alert(name +", enter your email!");
    return false;
  } else if (!name) {
    alert("Enter your name!")
    return false;
  }else {
      alert(name+ ", Your details have been send to Dennis Yiaile. In case of any questions or concerns, I will get back to you ASAP!");
  }
  })
  })
