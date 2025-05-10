import React, { useState } from "react";
import Swal from "sweetalert2";

function Contact() {
  {
    /* Form */
  }
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [result, setResult] = useState("");

  const isFormValid = form.name && form.email && form.phone && form.subject;

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  {
    /* Email FUction */
  }
  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "b205eaef-0704-4b9d-939b-a149acec33b1");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      Swal.fire({
        title: "✅ Message Sent!",
        text: "Thank you for reaching out. I’ll get back to you soon.",
        icon: "success",
        confirmButtonColor: "#3085d6",
      });
      event.target.reset();
      setForm({ name: "", email: "", phone: "", subject: "", message: "" });
      setResult("");
    } else {
      console.error("Submission error:", data);
      setResult("Failed to send. Try again later.");
    }
  };

  return (
    <section id="contact" className="scroll-mt-12">
      <div className="p-6">
      <h2 className="text-4xl font-bold text-center text-green-900 mt-8 mb-6">
        Reach out today, and let's shape the future together.
      </h2>
      <div className="max-w-4xl mx-auto p-4">
        <form
          onSubmit={onSubmit} // Replace with your W3Forms endpoint
          className="space-y-6"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              name="name"
              type="text"
              placeholder="Enter Your Name *"
              className="border p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={form.name}
              onChange={handleChange}
              required
            />
            <input
              name="email"
              type="email"
              placeholder="Enter Your Email *"
              className="border p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={form.email}
              onChange={handleChange}
              required
            />
            <input
              name="phone"
              type="tel"
              placeholder="Phone Number *"
              className="border p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={form.phone}
              onChange={handleChange}
              required
            />
            <input
              name="subject"
              type="text"
              placeholder="Enter Subject *"
              className="border p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={form.subject}
              onChange={handleChange}
              required
            />
          </div>
          <textarea
            name="message"
            rows="5"
            placeholder="Your Message"
            className="w-full border p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={form.message}
            onChange={handleChange}
          ></textarea>
          <div className="text-center">
            <button
              type="submit"
              disabled={!isFormValid}
              className={`px-6 py-2 text-white rounded-md transition ${
                isFormValid
                  ? "bg-blue-600 hover:bg-blue-700"
                  : "bg-gray-400 cursor-not-allowed"
              }`}
            >
              Submit
            </button>
            <span>{result}</span>
          </div>
        </form>
      </div>
      </div>
    </section>
  );
}

export default Contact;
