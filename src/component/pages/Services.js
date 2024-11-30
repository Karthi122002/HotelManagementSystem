import React from "react";
import "./Services.css";
import ServiceCard from './Servicecard';


const Services = ({ serviceList }) => {
  console.log("service list in comp...", serviceList);

  return (
    <section id="services" className="services_style">
      <h3 className="section-heading">Our Services</h3>
    <h1 className="section-title">
      Explore Our <span className="highlighted-title">SERVICES</span>
    </h1>
      
      <main>
        {serviceList?.map((service) => (
          <ServiceCard key={service.id} services={service} />
        ))}
      </main>
    </section>
  );
};

export default Services;
   
    
