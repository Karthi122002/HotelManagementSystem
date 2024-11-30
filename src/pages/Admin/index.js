import React, { useEffect,useState } from "react";
import Header from "./Header";
import Menu from "./Menu";
import BookingsPage from "./BookingsPage";
import RoomsPage from "./RoomsPage";
import PaymentsPage from "./PaymentsPage";
import ReportsPage from "./ReportsPage";
import HomePage from "./HomePage";
import ReservationsChart from "./ReservationChart";
import FooterHotel from "./Footer";
import CustomersPage from "./CustomersPage";



const Admin = () => {
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
            <HomePage/>
            <ReservationsChart/>
            <FooterHotel/>
            {/* <Home detailslist={jsonData?.homecontent}/> */}
          </div>
        )}
        {activePage === "BOOKINGS" && (
          <div>
            <BookingsPage/>
            <FooterHotel/>

           
          </div>
        )}
         {activePage === "ROOMS" && (
          <div>
            <RoomsPage/>
            <FooterHotel/>

          </div>
        )}
        {activePage === "CUSTOMERS" && (
          <div>
            <CustomersPage/>
            <FooterHotel/>

          </div>
        )}
        {activePage === "PAYMENTS" && (
          <div>
            <PaymentsPage/>
            <FooterHotel/>

          </div>
        )}
        {activePage === "REPORTS" && (
          <div>
            <ReportsPage/>
            <FooterHotel/>

          </div>
        )}
        
         {activePage === " LOGOUT" && (
          <div>
           
          </div>
        )}
      </div>
      <main className="landing-content"></main>
     
     
      
    </div>
  );
};

export default Admin;