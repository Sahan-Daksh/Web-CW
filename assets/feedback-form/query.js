document.addEventListener("DOMContentLoaded", function () {
  var submitBtn = document.getElementById("submitButton");

  submitBtn.addEventListener("click", function (event) {
    event.preventDefault();
    validateForm();
  });

  function validateForm() {
    var firstname = document.forms["myform"]["fname"].value;
    var lastname = document.forms["myform"]["lname"].value;
    var email = document.forms["myform"]["email"].value;
    var selectedRadioButton = document.querySelector(
      'input[name="first-visit"]:checked'
    );
    var firstVisit = selectedRadioButton ? selectedRadioButton.value : "";
    var selectedRadioButton2 = document.querySelector(
      'input[name="informative"]:checked'
    );
    var informative = selectedRadioButton2 ? selectedRadioButton2.value : "";
    var improvements = document.forms["myform"]["improvements"].value;
    var selectedRadioButton3 = document.querySelector(
      'input[name="rate"]:checked'
    );
    var rate = selectedRadioButton3 ? selectedRadioButton3.value : "";
    var selectedRadioButton4 = document.querySelector(
      'input[name="option"]:checked'
    );
    var recommend = selectedRadioButton4 ? selectedRadioButton4.value : "";
    var selectedValue = document.forms["myform"]["updates"].value;
    var request = document.forms["myform"]["request"].value;

    if (firstname == "") {
      alert("First name must be entered");
      return false;
    } else if (lastname == "") {
      alert("Last name must be entered");
      return false;
    } else if (email == "") {
      alert("Email must be entered");
      return false;
    } else {
      document.getElementById("fname").innerHTML = "First Name: " + firstname;
      document.getElementById("lname").innerHTML = "Last Name: " + lastname;
      document.getElementById("email").innerHTML = "Email: " + email;
      document.getElementById("firstVisit").innerHTML =
        "Was this your first time Visiting? " + firstVisit;
      document.getElementById("informative").innerHTML =
        "Was this website informative and easy to navigate through? " +
        informative;
      document.getElementById("improvements").innerHTML =
        "Any Improvements: " + improvements;
      document.getElementById("rate").innerHTML =
        "How satisfied you with our services? " + rate;
      document.getElementById("recommend").innerHTML =
        "Would you recommend our web services? " + recommend;
      document.getElementById("updates").innerHTML =
        "Updates: " + selectedValue;
      document.getElementById("request").innerHTML = "Any requests: " + request;
      document.getElementById("f1").style.display = "none";
      document.getElementById("div").style.display = "block";
    }
  }
});

function edit() {
  document.getElementById("div").style.display = "none";
  document.getElementById("f1").style.display = "inline-grid";
}

function send() {
  var form = document.forms["myform"]; // Accessing the form by its name
  var formData = new FormData(form);

  var body = "";
  formData.forEach(function (value, key) {
    body += key + ": " + value + "\r\n";
  });

  var email =
    "mailto:lakithmaxpunsara@gmail.com" + // Replace recipient@example.com with the recipient's email address
    "?subject=" +
    encodeURIComponent("Form Submission") +
    "&body=" +
    encodeURIComponent(body);

  window.location.href = email;
}
