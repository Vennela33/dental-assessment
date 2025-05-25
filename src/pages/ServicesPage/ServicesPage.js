import React, { useState } from 'react';
import styles from './ServicesPage.module.css';
import servicesData from '../../data/servicesData';
import Card from '../../components/Common/Card/Card';
import Modal from '../../components/Common/Modal/Modal';

const ServicesPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState(null);

  const openModal = (service) => {
    setSelectedService(service);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedService(null);
  };

  return (
    <div className="container">
      <section className={styles.servicesSection}>
        <h2 className="text-center">Our Dental Services</h2>
        <p className="text-center" style={{maxWidth: '700px', margin: '0 auto 2rem auto'}}>
          We offer a comprehensive range of dental services to meet all your oral health needs. Explore our services below to learn more.
        </p>
        <div className={`grid-container grid-container-3cols ${styles.servicesGrid}`}>
          {servicesData.map(service => (
            <Card
              key={service.id}
              title={service.title}
              imageUrl={service.imageUrl}
              description={service.shortDescription}
              onClick={() => openModal(service)} // Optional: click card to open modal
            >
              {/* Alternatively, a button inside the card:
              <button onClick={() => openModal(service)} className="btn btn-sm">Details</button> 
              */}
            </Card>
          ))}
        </div>
      </section>

      {selectedService && (
        <Modal
          isOpen={isModalOpen}
          onClose={closeModal}
          title={selectedService.title}
        >
          <img src={selectedService.imageUrl} alt={selectedService.title} className={styles.modalServiceImage} />
          <p>{selectedService.longDescription}</p>
          <button onClick={closeModal} className="btn" style={{marginTop: '1rem'}}>Close</button>
        </Modal>
      )}
    </div>
  );
};

export default ServicesPage;