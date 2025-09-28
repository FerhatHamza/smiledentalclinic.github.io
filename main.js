// Replace this with your Google Apps Script Web App URL
const SCRIPT_URL = "https://script.google.com/macros/s/AKfycbzF9mFW-ZdbimX3wRj6BA0DzCfW7aCjRMGVUPE7p0E09q73cwl-76kkIUj5a1r9ACVUwg/exec";

document.getElementById("appointmentForm").addEventListener("submit", async (e) => {
  e.preventDefault();
  
  const form = e.target;
  const data = {
    date: form.date.value,
    time: form.time.value,
    first_name: form.first_name.value,
    last_name: form.last_name.value,
    phone: form.phone.value,
    email: form.email.value
  };

  const res = await fetch(SCRIPT_URL, {
    method: "POST",
    body: JSON.stringify(data),
    headers: { "Content-Type": "application/json" }
  });

  const result = await res.json();
  if (result.status === "success") {
    document.getElementById("message").innerText = "✅ Appointment booked successfully!";
    form.reset();
  } else {
    document.getElementById("message").innerText = "❌ Error booking appointment.";
  }
});
