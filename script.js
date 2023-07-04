function validateForm(event) {
    event.preventDefault(); // Prevent form submission

    // Retrieve form field values
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var phone = document.getElementById("phone").value;
    var password = document.getElementById("password").value;
    var age = document.getElementById("age").value;
    var gender = document.getElementById("gender").value;
    var date = document.getElementById("date").value;
    var color = document.getElementById("color").value;

    // Perform validation
    var isValid = true;

    if (name.trim() === "") {
      document.getElementById("name").classList.add("error");
      isValid = false;
    } else {
      document.getElementById("name").classList.remove("error");
    }

    if (!validateEmail(email)) {
      document.getElementById("email").classList.add("error");
      isValid = false;
    } else {
      document.getElementById("email").classList.remove("error");
    }

    if (!validatePhone(phone)) {
      document.getElementById("phone").classList.add("error");
      isValid = false;
    } else {
      document.getElementById("phone").classList.remove("error");
    }

    if (password.trim() === "") {
      document.getElementById("password").classList.add("error");
      isValid = false;
    } else {
      document.getElementById("password").classList.remove("error");
    }

    if (age < 18 || age > 99) {
      document.getElementById("age").classList.add("error");
      isValid = false;
    } else {
      document.getElementById("age").classList.remove("error");
    }

    if (gender === "") {
      document.getElementById("gender").classList.add("error");
      isValid = false;
    } else {
      document.getElementById("gender").classList.remove("error");
    }

    if (date === "") {
      document.getElementById("date").classList.add("error");
      isValid = false;
    } else {
      document.getElementById("date").classList.remove("error");
    }

    if (color === "") {
      document.getElementById("color").classList.add("error");
      isValid = false;
    } else {
      document.getElementById("color").classList.remove("error");
    }

    // Submit the form if valid
    if (isValid) {
      document.getElementById("myForm").submit(alert("successfully submitted"));
    }
  }

  function validateEmail(email) {
    // Basic email validation using regex
    var emailRegex = /\S+@\S+\.\S+/;
    return emailRegex.test(email);
  }

  function validatePhone(phone) {
    // Basic phone number validation using regex
    var phoneRegex = /^\d{10}$/;
    return phoneRegex.test(phone);
  }