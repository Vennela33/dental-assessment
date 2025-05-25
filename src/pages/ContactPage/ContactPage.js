import React, { useState } from 'react';
import axios from 'axios';
import styles from './ContactPage.module.css';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [formErrors, setFormErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null); // 'success', 'error', or null

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const validateForm = () => {
    const errors = {};
    if (!formData.name.trim()) errors.name = "Name is required.";
    if (!formData.email.trim()) {
      errors.email = "Email is required.";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = "Email address is invalid.";
    }
    if (!formData.subject.trim()) errors.subject = "Subject is required.";
    if (!formData.message.trim()) errors.message = "Message is required.";
    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      // Simulate API call with Axios to a placeholder
      // In a real app, this would be your backend endpoint
      const response = await axios.post('https://jsonplaceholder.typicode.com/posts', formData);
      console.log('Form submitted successfully (simulated):', response.data);
      setSubmitStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' }); // Reset form
    } catch (error) {
      console.error('Error submitting form (simulated):', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="container">
      <section className={styles.contactSection}>
        <h2 className="text-center">Get In Touch</h2>
        <p className="text-center" style={{maxWidth: '700px', margin: '0 auto 2rem auto'}}>
          Have questions or want to schedule an appointment? Fill out the form below or use our contact details.
        </p>

        <div className={styles.contactLayout}>
          {/* Contact Form */}
          <div className={styles.contactFormContainer}>
            <h3>Send Us a Message</h3>
            <form onSubmit={handleSubmit} noValidate>
              <div className={styles.formGroup}>
                <label htmlFor="name">Name</label>
                <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required />
                {formErrors.name && <p className={styles.errorMessage}>{formErrors.name}</p>}
              </div>
              <div className={styles.formGroup}>
                <label htmlFor="email">Email</label>
                <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required />
                {formErrors.email && <p className={styles.errorMessage}>{formErrors.email}</p>}
              </div>
              <div className={styles.formGroup}>
                <label htmlFor="subject">Subject</label>
                <input type="text" id="subject" name="subject" value={formData.subject} onChange={handleChange} required />
                {formErrors.subject && <p className={styles.errorMessage}>{formErrors.subject}</p>}
              </div>
              <div className={styles.formGroup}>
                <label htmlFor="message">Message</label>
                <textarea id="message" name="message" rows="5" value={formData.message} onChange={handleChange} required></textarea>
                {formErrors.message && <p className={styles.errorMessage}>{formErrors.message}</p>}
              </div>
              <button type="submit" className="btn" disabled={isSubmitting}>
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>
              {submitStatus === 'success' && <p className={styles.successMessage}>Message sent successfully! We'll be in touch soon.</p>}
              {submitStatus === 'error' && <p className={styles.errorMessage}>There was an error sending your message. Please try again.</p>}
            </form>
          </div>

          {/* Contact Information & Map */}
          <div className={styles.contactInfoContainer}>
            <h3>Contact Information</h3>
            <p><strong>Address:</strong> 123 Dental St, Smileville, CA 90210</p>
            <p><strong>Phone:</strong> (555) 123-4567</p>
            <p><strong>Email:</strong> <a href="mailto:contact@todaysdental.com">contact@todaysdental.com</a></p>
            
            <div className={styles.mapContainer}>
              <h4>Our Location</h4>
              {/* Replace with actual Google Maps embed code if you have an API key or use a more generic one */}
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3305.719079302953!2d-118.3453526847875!3d34.05093998060679!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2b94f5f783c9f%3A0xdec2c997bd0d5a3c!2sBeverly%20Hills%2C%20CA%2090210%2C%20USA!5e0!3m2!1sen!2suk!4v1678886400000!5m2!1sen!2suk" 
                width="100%" 
                height="300" 
                style={{ border:0 }} 
                allowFullScreen="" 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="Clinic Location Map"
              ></iframe>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;