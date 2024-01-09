function showResult() {
    // Get the age value from the input field
    var age = document.getElementById("age").value;
    // Hide both cards by default
    document.getElementById("adult-card").style.display = "none";
    document.getElementById("child-card").style.display = "none";
    // Check if the age is valid
    if (age >= 0 && age <= 120) {
      // Show the appropriate card based on the age
      if (age >= 18) {
        document.getElementById("adult-card").style.display = "block";
      } else {
        document.getElementById("child-card").style.display = "block";
      }
    } else {
      // Alert the user if the age is invalid
      alert("Please enter a valid age between 0 and 120.");
    }
  }