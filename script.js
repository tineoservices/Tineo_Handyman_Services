
 // SETUP: Replace this placeholder with your business email address.
 const BUSINESS_EMAIL = "tineo.services@gmail.com";

 // Automatically update the copyright year.
 document.getElementById("year").textContent = new Date().getFullYear();
 
 // Handle contact form submissions.
 document.getElementById("contact-form").addEventListener("submit", (event) => {
   event.preventDefault();
 
   if (BUSINESS_EMAIL === "YOUR_EMAIL@example.com") {
     alert("Website owner: Set BUSINESS_EMAIL in script.js before publishing.");
     return;
   }
 
   const form = event.currentTarget;
   if (!form.reportValidity()) return;
 
   const data = new FormData(form);
 
   const name = String(data.get("name") || "").trim();
   const email = String(data.get("email") || "").trim();
   const phone = String(data.get("phone") || "").trim();
   const details = String(data.get("details") || "").trim();
 
   const subject = encodeURIComponent(`Project inquiry from ${name}`);
 
   const body = encodeURIComponent(
     `Name: ${name}\nEmail: ${email}\nPhone: ${phone || "Not provided"}\n\nProject details:\n${details}`
   );
 
   window.location.href = `mailto:${BUSINESS_EMAIL}?subject=${subject}&body=${body}`;
 });
 