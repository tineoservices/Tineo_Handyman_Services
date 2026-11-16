
/* =========================================
   TINEO HANDYMAN SERVICES
   WEBSITE JAVASCRIPT
========================================= */

/* 01 | EDIT YOUR BUSINESS EMAIL HERE */

const BUSINESS_EMAIL = "tineo.services@gmail.com";

/* 02 | CONTACT FORM */

const form = document.getElementById("contact-form");

if (form) {
  form.addEventListener("submit", function (event) {
    event.preventDefault();

    if (!form.reportValidity()) return;

    if (BUSINESS_EMAIL === "YOUR_EMAIL@example.com") {
      alert("Please configure your business email in script.js.");
      return;
    }

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const location = document.getElementById("location").value.trim();
    const message = document.getElementById("message").value.trim();

    const subject = encodeURIComponent(
      "Tineo Handyman Services - Project Inquiry"
    );

    const body = encodeURIComponent(
      `Name: ${name}\n` +
      `Email: ${email}\n` +
      `Project city: ${location}\n\n` +
      `Project details:\n${message}`
    );

    window.location.href =
      `mailto:${BUSINESS_EMAIL}?subject=${subject}&body=${body}`;
  });
}
