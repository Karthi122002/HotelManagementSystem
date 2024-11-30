import React from 'react';
import './Ourteam.css';
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';

// Team data with dynamic imports for images
const teamData = [
  { name: 'Mr.Karthik', role: 'Manager', imgSrc: require('../../Assets/team-1.jpg') },
  { name: 'Mr.Akilan', role: 'Supervisor', imgSrc: require('../../Assets/team-2.jpg') },
  { name: 'Mr.Dheeran', role: 'Chef', imgSrc: require('../../Assets/team-3.jpg') },
  { name: 'Mr.Shandy', role: 'Cleaning Head', imgSrc: require('../../Assets/team-4.jpg') },
  { name: 'Mr.Mahendran', role: 'Parking Maintenance', imgSrc: require('../../Assets/team-5.jpg') },
  { name: 'Mr.Jagadeesh', role: 'Security', imgSrc: require('../../Assets/team-6.jpg') },
  { name: 'Mr.Ilayaraja', role: 'Gym Maintenance', imgSrc: require('../../Assets/team-7.jpg') },
  { name: 'Mr.Kailash', role: 'Executive Head', imgSrc: require('../../Assets/team-8.jpg') },
];

// Team card component
const TeamCard = ({ member }) => (
  <div className="team-card">
    <img src={member.imgSrc} alt={member.name} className="team-image" />
    <div className="team-details">
      <h3>{member.name}</h3>
      <p>{member.role}</p>
      <div className="social-icons">
        <a href="#facebook" className="social-icon" aria-label="Facebook">
          <FaFacebook />
        </a>
        <a href="#twitter" className="social-icon" aria-label="Twitter">
          <FaTwitter />
        </a>
        <a href="#instagram" className="social-icon" aria-label="Instagram">
          <FaInstagram />
        </a>
      </div>
    </div>
  </div>
);

// Main team component
const Team = () => (
  <div className="team-container">
    <h3 className="section-heading">OUR TEAM</h3>
      <h1 className="section-title">
      Explore Our <span className="highlighted-title">STAFFS</span>
      </h1>
    <div className="team-grid">
      {teamData.map((member, index) => (
        <TeamCard key={index} member={member} />
      ))}
    </div>
  </div>
);

export default Team;
