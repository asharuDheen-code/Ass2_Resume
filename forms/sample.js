$(document).ready(function () {
  $('[data-toggle="popover"]').popover({
    html: true,
    placement: "right",
    trigger: "click",
  });
  $("#formButton").click( () => {
    var fullName = $("#fullName").val();
    var email = $("#email").val();
    var phone = $("#phone").val();
    var message = $("#message").val();

    if (validator()) {
      console.log("Form Submitted");
      $("#Myform").submit();
      alert("Thank you for Submission");
    } else {
      event.preventDefault();
      alert("Error While submitting");
    }
  });

  function validator() {
    var fullName = $("#fullName").val();
    var email = $("#email").val();
    var phone = $("#phone").val();
    var message = $("#msg").val();
    var emailValidator = /^([a-zA-Z0-9_\.\-\+])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;

    if (fullName == "") {
      alert("Fill Your name...");
      return false;
    } else if (fullName.length <= 3) {
      alert("Please fill Minimum three char...");
      return false;
    } else if (!emailValidator.test(email)) {
      alert("Invalid Email ID...!!!!!");
      return false;
    } else if (phone.length !== 10) {
      alert("Please enter the correct mobile No...!!!!! ");
    } else if (message === "") {
      alert("Enter Something");
      return false;
    } else {
      return true;
    }
  }
});
