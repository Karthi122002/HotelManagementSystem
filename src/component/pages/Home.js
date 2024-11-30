
import React from 'react';
import { Carousel as BootstrapCarousel } from 'react-bootstrap';
import "bootstrap/dist/css/bootstrap.min.css";
import './Homepage.css';
import About from './About';
// import Services from './Services';
import Rooms from './Rooms';
import Team from './Ourteam';
import Contact from './Contact';
import Services from './Services';
import ServiceCard from './Servicecard';

function CustomCarousel() {
  return (
    <div className="carousel-container">
      <BootstrapCarousel interval={2000} /* Slide every 1 second */>
        <BootstrapCarousel.Item>
          <img
            className="d-block w-100 carousel-img"
            src={require("../../Assets/carousel-7.jpg")}
            alt="First slide"
          />
          <BootstrapCarousel.Caption>
          <div className="content">
       <h2 className="subtitle">Luxury Living</h2>
        <h1 className="title">Discover A Brand Luxurious Hotel</h1>
         <div className="button-group">
          <button className="button our-rooms">Our Rooms</button>
          <button className="button book-room">Book a Room</button>
         </div>
       </div>
          </BootstrapCarousel.Caption>
        </BootstrapCarousel.Item>
        

        <BootstrapCarousel.Item>
          <img
            className="d-block w-100 carousel-img"
            src={require("../../Assets/carousel-4.jpg")}
            alt="Second slide"
          />
          <BootstrapCarousel.Caption>
          <div className="content">
       <h2 className="subtitle">Luxury Living</h2>
        <h1 className="title">Discover A Brand Luxurious Hotel</h1>
         <div className="button-group">
          <button className="button our-rooms">Our Rooms</button>
          <button className="button book-room">Book a Room</button>
         </div>
       </div>
          </BootstrapCarousel.Caption>
        </BootstrapCarousel.Item>

        <BootstrapCarousel.Item>
          <img
            className="d-block w-100 carousel-img"
            src={require("../../Assets/carousel-6.jpg")}
            alt="Third slide"
          />
          <BootstrapCarousel.Caption>
          <div className="content">
       <h2 className="subtitle">Luxury Living</h2>
        <h1 className="title">Discover A Brand Luxurious Hotel</h1>
         <div className="button-group">
          <button className="button our-rooms">Our Rooms</button>
          <button className="button book-room">Book a Room</button>
         </div>
       </div>
          </BootstrapCarousel.Caption>
        </BootstrapCarousel.Item>
        <BootstrapCarousel.Item>
          <img
            className="d-block w-100 carousel-img"
            src={require("../../Assets/carousel-9.jpg")}
            alt="Third slide"
          />
          <BootstrapCarousel.Caption>
          <div className="content">
       <h2 className="subtitle">Luxury Living</h2>
        <h1 className="title">Discover A Brand Luxurious Hotel</h1>
         <div className="button-group">
          <button className="button our-rooms">Our Rooms</button>
          <button className="button book-room">Book a Room</button>
         </div>
       </div>
          </BootstrapCarousel.Caption>
        </BootstrapCarousel.Item>
      
      </BootstrapCarousel>

      <BootstrapCarousel.Item>
          <img
            className="d-block w-100 carousel-img"
            src={require("../../Assets/carousel-6.jpg")}
            alt="Third slide"
          />
          <BootstrapCarousel.Caption>
          <div className="content">
       <h2 className="subtitle">Luxury Living</h2>
        <h1 className="title">Discover A Brand Luxurious Hotel</h1>
         <div className="button-group">
          <button className="button our-rooms">Our Rooms</button>
          <button className="button book-room">Book a Room</button>
         </div>
       </div>
          </BootstrapCarousel.Caption>
        </BootstrapCarousel.Item>
        <About/>
        <Rooms/>
        {/* <Services/>
        <ServiceCard/> */}
        <Team/>
        <Contact/>
      
      
    </div>
  );
}

export default CustomCarousel;
