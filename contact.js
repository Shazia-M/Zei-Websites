(function() {
  emailjs.init("UJPSv8qypAQJa899F"); // from EmailJS -> Account -> API Keys
})();

document.getElementById("contact-form").addEventListener("submit", function(e) {
  e.preventDefault();

  const params = {
    user_name: document.getElementById("name").value,
    user_email: document.getElementById("email").value,
    user_phone: document.getElementById("phone").value,
    message: document.getElementById("message").value,
  };

  // Service ID and Template ID from EmailJS dashboard
  emailjs.send("service_nh0txmm", "template_i0qldhl", params)
    .then(() => {
      alert("Message sent successfully!");
      e.target.reset();
    })
    .catch(err => {
      console.error("Error:", err);
      alert("Failed to send message. Check your EmailJS setup.");
    });
});