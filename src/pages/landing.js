import React, { useEffect,useState } from "react";
import Header from "../component/pages/Header";
import Menu from "../component/pages/Menu";
import CustomCarousel from "../component/pages/Home";
import About from "../component/pages/About";
import Services from "../component/pages/Services";
import Rooms from "../component/pages/Rooms";
import Team from "../component/pages/Ourteam";
import Contact from "../component/pages/Contact";
import FooterHotel from "../component/pages/Footer";
import Pages from "./Index";

// import "./Index.css";




const Landing = () => {
  const [activePage, setActivePage] = useState("Home"); // Track active page
  const [menu, setMenu] = useState("");
  const [jsonData,setJsonData]=useState();
  
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
        console.log("room datas in JSON", data.roomdatas);
        console.log("Service data",data.Service);
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
            <CustomCarousel />
          </div>
        )}
        {activePage === "ABOUT" && (
          <div>
            <About/>
          </div>
        )}
        {activePage === "SERVICES" && (
          <div>
            <Services serviceList={jsonData?.Service}/>
          </div>
        )}
        {activePage === "ROOMS" && (
          <div>
            <Rooms  Roomlist={jsonData?.Rooms}/>
          </div>
        )}{activePage === "OURTEAM" && (
          <div>
            <Team/>
          </div>
        )}
        {activePage === "CONTACT" && (
          <div>
           <Contact/>
          </div>
        )}
        {(menu === "Login" || menu === "Signup") && (
          <div>
            <Pages viewModal={menu}  userData={jsonData?.users}/>
          </div>
        )}
      </div>
      <main className="landing-content"></main>
     
     
      <FooterHotel />
    </div>
  );
};

export default Landing;