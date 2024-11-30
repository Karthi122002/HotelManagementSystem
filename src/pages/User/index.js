import React, { useEffect,useState } from "react";
import "./Index.css";
import Menu from "./Menu";
import Header from "./Header";
import Home from "./Home";
import Mybookings from "./Mybookings";
import Payment from "./Payment";
import Rooms from "./Newbookings";
import FooterHotel from "./Footer";
import OffersPromotions from "./Offers";


const Landing = () => {
  const [activePage, setActivePage] = useState("Home"); // Track active page
  const [menu, setMenu] = useState("");
  const[jsonData,setJsonData]=useState();
  const handleMenuClick = (page) => {
    setActivePage(page);
    // toggleMenu(); // Close menu on selection
  };
  const handleButtonCLick = (button) => {
    setMenu(button);
  };
  useEffect(() => {
    fetch("db.json")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        
        console.log("userdata in JSON",data.homecontent);
        setJsonData(data); // Assuming data.users contains the array of users
      })
      .catch((error) => console.log(error));
  }, []);
  return (
    <div className="landing-container">
      <Header />
      <Menu
        onMenuClick={handleMenuClick}
        activePage={activePage}
        onButtonClick={handleButtonCLick}
      />
      {/* Page Content */}
      <div className="page-content">
        {activePage === "Home" && (
          <div>
            <Home detailslist={jsonData?.homecontent}/>
          </div>
        )}
        {activePage === "MY BOOKINGS" && (
          <div>
            <Mybookings/>
            <FooterHotel/>
          </div>
        )}
        {activePage === "NEW BOOKING" && (
          <div>
            <Rooms/>
            <FooterHotel/>
          </div>
        )}
        {/* {activePage === "EVENTS" && (
          <div>
            <Events/>
            <FooterHotel/>
          </div>
        )} */}
        {activePage === "OFFERS & PROMOTIONS" && (
          <div>
            <OffersPromotions/>
            <FooterHotel/>
          </div>
        )}
        {activePage === "PAYMENTS" && (
          <div>
           <Payment/>
           <FooterHotel/>
          </div>
        )}
        
         {/* {activePage === " LOGOUT" && (
          <div>
           <Contact/>
          </div>
        )} */}
       
        {/* {(menu === "Login" || menu === "Signup") && (
          <div>
            <Pages viewModal={menu} />
          </div>
        )} */}
      </div>
      <main className="landing-content"></main>
     
     
      
    </div>
  );
};

export default Landing;