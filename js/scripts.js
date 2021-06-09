$("document").ready(function(){
  $("#button").click(function(){
    var name=$("#name").val();
    var email=$("#email").val();
    var message=$("#message").val();
    if (!name && !email) {
    alert("Enter your contact details!")
  }else if (!email) {
    alert(name +", enter your email!");
  } else if (!name) {
    alert("Enter your name!")
  } else {
      alert(name+ ", I have receive your information. I will get back to you in a few!");
  }
  })
  })
