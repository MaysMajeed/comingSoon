// var pattern = /^[a-zA-Z]{2}$/;

// var submitButton = document.querySelector(".submit");
// submitButton.addEventListener("click", ValidateEmail);

// function ValidateEmail() {
//   var mytext = document.getElementById("emailAdress");
//   var myInput = document.getElementById("emailAdress").value;
//   var warrMessage = document.querySelector(".warr-message");
//   if (pattern.test(myInput)) {
//     warrMessage.classList.add = "visiblex";
//   }
//   warrMessage.classList.remove = "visiblex";
// }

const submitBtn = document.querySelector(".submit");
const emailInput = document.querySelector("#emailAdress");
const errorImg = document.querySelector(".errImage");
const errorMessag = document.querySelector(".warr-message");
const REG_EX =
  /^([a-zA-Z\d\.-_]+)@([a-zA-Z\d\.-]{2,8})\.([a-zA-Z]{2,8})(\.[a-zA-Z]{2,8})?$/;
submitBtn.addEventListener("click", function (e) {
  if (REG_EX.test(String(emailInput.value).toLowerCase())) {
    errorImg.classList.remove("visible");
    errorMessag.classList.remove("visible");
  } else {
    errorImg.classList.add("visible");
    errorMessag.classList.add("visible");
  }
});
