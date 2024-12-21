document.getElementById('contact-form').addEventListener('submit', function(e) {
  e.preventDefault(); // Prevent default form submission

  const params = {
      name: document.getElementById("input-name").value,
      email: document.getElementById("input-email").value,
      location: document.getElementById("input-location").value,
      phone: document.getElementById("input-phone").value,
      budget: document.getElementById("input-budget").value,
      subject: document.getElementById("input-subject").value,
      message: document.getElementById("input-message").value
  };
  
  const serviceID = "service_ll44l9h";  // Ensure this is your actual Service ID
  const templateID = "template_n223yvi";  // Ensure this is your actual Template ID
  
  emailjs.send(serviceID, templateID, params)
  .then((res) => {
      document.getElementById("input-name").value = "";
      document.getElementById("input-email").value = "";
      document.getElementById("input-location").value = "";
      document.getElementById("input-phone").value = "";
      document.getElementById("input-budget").value = "";
      document.getElementById("input-subject").value = "";
      document.getElementById("input-message").value = "";
      showAlert("Your message was sent successfully.");
      
  })
  .catch((err) => {
      console.error("Error details:", err);
      showAlert("An error occurred: " + (err.text || err.message || "Unknown error"));
  });
});

function showAlert(message) {
  document.getElementById('alertMessage').textContent = message;
  const alertBox = document.getElementById('customAlert');
  alertBox.classList.remove('hidden');
  alertBox.classList.add('show');
}

document.getElementById('closeAlertBtn').addEventListener('click', function() {
  const alertBox = document.getElementById('customAlert');
  alertBox.classList.remove('show');
  alertBox.classList.add('hidden');
});