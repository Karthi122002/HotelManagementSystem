import React from "react";
import './Services.css'
export default function ServiceCard({ services }) {
  console.log("service in card", services);
  console.log("image",services.imgSrc);
  const { imgSrc, title, description, buttonText } = services;

  return (
    <section className="service-item card" key={services.id}>
     
      <div className="service-details">
        <h3 style={{fontWeight:"bold",fontSize:"20px",color:"#0F172B"}}>{title}</h3>
        <p>{description}</p>
      </div>
    </section>
  );
}