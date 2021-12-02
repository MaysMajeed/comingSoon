var pattern = /^[a-zA-Z]{2}$/;

var submitButton = document.querySelector(".submit");
submitButton.addEventListener("click", ValidateEmail);

function ValidateEmail() {
  var mytext = document.getElementById("emailAdress");
  var myInput = document.getElementById("emailAdress").value;
  var warrMessage = document.querySelector(".warr-message");
  if (pattern.test(myInput)) {
    mytext.style.borderColor = "green";
  }
  mytext.style.borderColor = "red";
}
