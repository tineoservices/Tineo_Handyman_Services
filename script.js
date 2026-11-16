
/* =========================================
   TINEO HANDYMAN SERVICES — JAVASCRIPT
========================================= */


/* =========================================
   01 | BUSINESS CONTACT EMAIL
   Replace the placeholder with your email.
========================================= */

const BUSINESS_EMAIL = "tineo.services@gmail.com";


/* =========================================
   02 | CONTACT FORM FUNCTIONALITY
   Opens the visitor's email application.
========================================= */

const form = document.getElementById("contact-form");

form?.addEventListener("submit", (event) => {

  event.preventDefault();

  // Check that all required fields are filled.
  if (!form.reportValidity()) {
    return;
  }

  // Remind the website owner to set an email.
  if (BUSINESS_EMAIL === "YOUR_EMAIL@example.com") {
    alert(
      "Website owner: add your business email to script.js before using this form."
    );
    return;
  }

  // Get the information entered by the customer.
  const name = document
    .getElementById("customer-name")
    .value.trim();

  const email = document
    .getElementById("customer-email")
    .value.trim();

  const message = document
    .getElementById("customer-message")
    .value.trim();

  // Create the email subject.
  const subject = encodeURIComponent(
    `Project inquiry from ${name}`
  );

  // Create the email body.
  const body = encodeURIComponent(
    `Name: ${name}\n` +
    `Email: ${email}\n\n` +
    `Project details:\n${message}`
  );

  // Open the customer's default email application.
  window.location.href =
    `mailto:${BUSINESS_EMAIL}?subject=${subject}&body=${body}`;

});
