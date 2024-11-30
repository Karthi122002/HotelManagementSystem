import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState, useEffect } from "react";
import SignUp from "./Signup";

import LoginForm from "./Login";
import ForgotPassword from "./Forgotpassword";
import Mymodal from "../component/Mymodal";
import Button from "../component/Button";
import { useNavigate } from "react-router-dom";

function Pages({viewModal,userData}) {
  // Modal state management
  const [show, setShow] = useState(false);
  const [currentModal, setCurrentModal] = useState("");
 // const [userdata, setUsersData] = useState(); // State to store user data
  const navigate = useNavigate();

  // Fetch user data from db.json
  // useEffect(() => {
  //   fetch("db.json")
  //     .then((response) => {
  //       if (!response.ok) {
  //         throw new Error("Network response was not ok");
  //       }
  //       return response.json();
  //     })
  //     .then((data) => {
  //       console.log("Data in JSON", data);
  //       setUsersData(data.users); // Assuming data.users contains the array of users
  //     })
  //     .catch((error) => console.log(error));
  // }, []);

  // Function to open modal with login form
  const handleLogin = () => {
    setCurrentModal("login");
    setShow(true);
  };

  // Function to open modal with signup form
  const signuphandleLogin = () => {
    setCurrentModal("signup");
    setShow(true);
  };

  // Function to switch to the signup form in the login modal
  const switchToSignup = () => {
    setCurrentModal("signup");
  };

  // Function to switch to the login form in the signup modal
  const switchToLogin = () => {
    setCurrentModal("login");
  };

  // Function to close the modal
  const handleClose = () => {
    setShow(false);
  };

  // Handle login form submission
  const handleLogins = (loginDetails) => {
    console.log("login details...", loginDetails);

    // Filter the users to check if the email and password match
    const matchingUser = userData.filter(
      (user) => user.email === loginDetails.userName
    );

    const matchingUserPassword =
      matchingUser.length > 0
        ? matchingUser[0].password === loginDetails.password
        : false;

    if (matchingUser.length <= 0) {
      return alert("email invalid");
      // handleClose(); // Close the login modal after successful login
    } else if (!matchingUserPassword) {
      return alert("password invalid");
    }

    handleClose();
    alert("Login successful");

    // Close the login modal after successful login
    if (matchingUser[0].name === "Admin") {
      navigate("/admin");
    } else {
      navigate("/user");
    }
  };
  // Handle signup form submission
  const handleSignups = (signupDetails) => {
    console.log("signup details...", signupDetails);
    handleClose();
    alert("Signup Successful");
  };

  // Function to show the ForgotPassword component inside a separate modal
  const handleForgotPassword = () => {
    console.log("Forgot Password button Clicked");
    setCurrentModal("forgotpassword");
    setShow(true);
  };
  useEffect(() => {
    if (viewModal === "Login") {
      handleLogin();
    } else {
      signuphandleLogin();
    }
  }, [viewModal]);

  return (
    <>
      

      {/* <Button title="Login" handleClick={handleLogin} />
      <Button title="Signup" handleClick={signuphandleLogin} /> */}

      {/* Main Modal */}
      {show && (
        <Mymodal
          title={
            currentModal === "login"
              ? "Login"
              : currentModal === "signup"
              ? "SignUp"
              : "Forgot Password"
          }
          body={
            currentModal === "login" ? (
              <LoginForm
                onLogin={handleLogins}
                onSwitchToSignup={switchToSignup}
                onForgotPassword={handleForgotPassword}
              />
            ) : currentModal === "signup" ? (
              <SignUp
                onSignup={handleSignups}
                onSwitchToLogin={switchToLogin}
              />
            ) : (
              <ForgotPassword handleClose={handleClose} />
            )
          }
          view={show}
          handleClose={handleClose}
        />
      )}
    </>
  );
}

export default Pages;
