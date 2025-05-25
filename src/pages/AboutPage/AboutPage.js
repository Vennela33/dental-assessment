import React from 'react';
import styles from './AboutPage.module.css';
import practitionersData from '../../data/practitionersData';
import Card from '../../components/Common/Card/Card'; // Re-use Card for practitioners

const AboutPage = () => {
  return (
    <div className="container">
      {/* Clinic Background */}
      <section className={styles.clinicBackground}>
        <h2>Our Story</h2>
        <p>
          Founded in 2005, Relax Dental Services began with a simple mission: to provide compassionate, high-quality dental care to our community. Over the years, we've grown into a trusted family practice, known for our friendly atmosphere and commitment to patient well-being. We believe that a healthy smile is a cornerstone of overall health, and we strive to make dental care accessible and comfortable for everyone.
        </p>
        <p>
          Our clinic is equipped with state-of-the-art technology, allowing us to offer a wide range of services, from preventive care to complex restorative and cosmetic treatments. We are dedicated to continuous improvement and regularly invest in training and equipment to ensure we provide the best possible outcomes for our patients.
        </p>
      </section>

      {/* Practitioner Details */}
      <section className={styles.practitionersSection}>
        <h2>Meet Our Team</h2>
        <div className={`grid-container grid-container-3cols ${styles.practitionersGrid}`}>
          {practitionersData.map(practitioner => (
            <Card 
              key={practitioner.id}
              title={practitioner.name}
              imageUrl={practitioner.imageUrl}
              description={practitioner.specialty}
            >
              <p className={styles.practitionerBio}>{practitioner.bio}</p>
            </Card>
          ))}
        </div>
      </section>

      {/* Mission Statement or Philosophy */}
      <section className={styles.missionStatement}>
        <h2>Our Philosophy</h2>
        <blockquote>
          "To enhance the health and well-being of our patients by providing personalized, high-quality dental care in a welcoming and supportive environment. We are committed to education, prevention, and building lasting relationships based on trust and respect."
        </blockquote>
        <p>
          We achieve this by:
        </p>
        <ul>
          <li>Listening to our patients' needs and concerns.</li>
          <li>Providing clear explanations of treatment options.</li>
          <li>Focusing on preventive care to maintain long-term oral health.</li>
          <li>Utilizing advanced technology for precise and effective treatments.</li>
          <li>Maintaining a clean, safe, and comfortable clinic environment.</li>
        </ul>
      </section>
    </div>
  );
};

export default AboutPage;