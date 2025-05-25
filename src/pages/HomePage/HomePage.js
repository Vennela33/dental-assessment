import React from 'react';
import { Link } from 'react-router-dom';
import styles from './HomePage.module.css';
import FAQ from '../../components/Common/FAQ/FAQ';
import faqData from '../../data/faqData';
import servicesData from '../../data/servicesData'; // For services overview
import Card from '../../components/Common/Card/Card';

const HomePage = () => {
  const featuredServices = servicesData.slice(0, 3); // Show first 3 services

  return (
    <>
      {/* Hero Section */}
      <section className={styles.heroSection}>
        <div className="container">
          <h1 className={styles.heroTitle}>Your Smile, Our Priority</h1>
          <p className={styles.heroSubtitle}>
            Welcome to Relax Dental Services, where we provide top-quality dental care in a friendly and comfortable environment.
          </p>
          <Link to="/contact" className={`btn ${styles.heroCtaButton}`}>Book Appointment</Link>
        </div>
      </section>

      {/* Brief Introduction */}
      <section className={styles.introSection}>
        <div className="container">
          <h2>Welcome to Relax Dental Services</h2>
          <p>
            At Relax Dental Services, we are committed to providing exceptional dental care for you and your family. Our experienced team uses the latest technology to ensure you receive the best treatment possible. We believe in a patient-centered approach, focusing on your comfort and individual needs. From routine check-ups to advanced cosmetic procedures, we're here to help you achieve and maintain a healthy, beautiful smile.
          </p>
        </div>
      </section>

      {/* Overview of Services */}
      <section className={styles.servicesOverview}>
        <div className="container">
          <h2 className="text-center">Our Key Services</h2>
          <div className={`grid-container grid-container-3cols ${styles.servicesGrid}`}>
            {featuredServices.map(service => (
              <Card 
                key={service.id}
                title={service.title}
                imageUrl={service.imageUrl}
                description={service.shortDescription}
              >
                <Link to="/services" className={`btn btn-secondary ${styles.serviceCardButton}`}>Learn More</Link>
              </Card>
            ))}
          </div>
          <div className="text-center" style={{marginTop: '2rem'}}>
             <Link to="/services" className="btn">View All Services</Link>
          </div>
        </div>
      </section>

      {/* Call-to-action (Book Appointment) - could be a separate section or integrated */}
      <section className={styles.ctaSection}>
        <div className="container text-center">
          <h2>Ready to Improve Your Smile?</h2>
          <p>Contact us today to schedule your consultation or appointment. We look forward to welcoming you!</p>
          <Link to="/contact" className="btn btn-lg">Book an Appointment Now</Link>
        </div>
      </section>
      
      {/* Frequently Asked Questions */}
      <section className={styles.faqSection}>
        <div className="container">
          <h2 className="text-center">Frequently Asked Questions</h2>
          <FAQ items={faqData} />
        </div>
      </section>
    </>
  );
};

export default HomePage;