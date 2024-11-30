import React, { useState } from "react";
import "./Contact.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [formValid, setFormValid] = useState(true);

  // Email validation regex
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  // Handle input change
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: "",
    }));
    setFormValid(true);
  };

  // Validate the form fields
  const validateForm = () => {
    let valid = true;
    let newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
      valid = false;
    }
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
      valid = false;
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
      valid = false;
    }
    if (!formData.subject.trim()) {
      newErrors.subject = "Subject is required";
      valid = false;
    }
    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
      valid = false;
    }

    setErrors(newErrors);
    setFormValid(valid);
    return valid;
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      alert("Form submitted successfully!");
      // Reset form
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
    }
  };

  return (
    <section className="contact-section">
      <div className="contact-us-tagline">
        <h3 className="section-heading">CONTACT US</h3>
      </div>
      <h1 className="contact-title">
        <span className="highlight">CONTACT</span> For Any Details
      </h1>

      <div className="contact-container">
        <div className="contact-info">
          <div className="contact-card">
            <h3>BOOKING</h3>
            <p>
              <i className="fa-solid fa-envelope"></i> book@example.com
            </p>
          </div>
          <div className="contact-card">
            <h3>GENERAL</h3>
            <p>
              <i className="fa-solid fa-envelope"></i> Royalhotel@gmail.com
            </p>
          </div>
          <div className="contact-card">
            <h3>TECHNICAL</h3>
            <p>
              <i className="fa-solid fa-envelope"></i> tech@example.com
            </p>
          </div>
        </div>
        <div className="contact-form-map">
          <div className="google-map">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3916.548879749869!2d76.96599107451988!3d10.997383655080307!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba859a6cb382017%3A0x7e0fb613cd67c070!2sHotel%20Thaai%20Coimbatore%20-%20Opposite%20Railway%20Station!5e0!3m2!1sen!2sin!4v1732257154184!5m2!1sen!2sin"
              referrerPolicy="no-referrer-when-downgrade"
              title="Google Map"
            ></iframe>
          </div>
          <form className="contact-form" onSubmit={handleSubmit} noValidate>
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              className={errors.name ? "input-error" : ""}
              value={formData.name}
              onChange={handleInputChange}
              required
            />
            {errors.name && <div className="text-danger">{errors.name}</div>}

            <input
              type="email"
              name="email"
              placeholder="Your Email"
              className={errors.email ? "input-error" : ""}
              value={formData.email}
              onChange={handleInputChange}
              required
            />
            {errors.email && <div className="text-danger">{errors.email}</div>}

            <input
              type="text"
              name="subject"
              placeholder="Subject"
              className={errors.subject ? "input-error" : ""}
              value={formData.subject}
              onChange={handleInputChange}
              required
            />
            {errors.subject && <div className="text-danger">{errors.subject}</div>}

            <textarea
              name="message"
              placeholder="Message"
              className={errors.message ? "input-error" : ""}
              value={formData.message}
              onChange={handleInputChange}
              required
            ></textarea>
            {errors.message && <div className="text-danger">{errors.message}</div>}

            <button type="submit">SEND MESSAGE</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
