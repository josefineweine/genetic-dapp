import React from 'react';
import './About.css';

const AboutPage = () => {
  return (
    <div className="about-container">
      <div className="about-header">
        <h1>About Us</h1>
        <p>Learn more about our mission, vision, and the team behind the project.</p>
      </div>

      <div className="about-content">
        <section className="mission-section">
          <h2>Our Mission</h2>
          <p>
            Our mission is to revolutionize the healthcare industry by providing a platform that enables seamless and secure sharing of donor information. We aim to improve the efficiency of organ donation and medical assistance programs by connecting donors, patients, and healthcare professionals in a more transparent and accessible way.
          </p>
        </section>

        <section className="vision-section">
          <h2>Our Vision</h2>
          <p>
            We envision a world where every donor can easily contribute to saving lives. By leveraging blockchain technology, we ensure that donor data is securely stored, transparent, and accessible only to those who need it. Our vision is to create a safer, more efficient, and trustworthy ecosystem for the healthcare sector.
          </p>
        </section>

        <section className="team-section">
          <h2>Our Team</h2>
          <p>
            We are a diverse team of developers, healthcare professionals, and visionaries committed to transforming the way healthcare interacts with technology. Our team members come from various backgrounds, bringing unique perspectives and expertise to the table.
          </p>
          <div className="team-members">
            <div className="team-member">
              <h3>John Doe</h3>
              <p>CEO & Founder</p>
            </div>
            <div className="team-member">
              <h3>Jane Smith</h3>
              <p>CTO</p>
            </div>
            <div className="team-member">
              <h3>Sam Johnson</h3>
              <p>Lead Developer</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default AboutPage;
