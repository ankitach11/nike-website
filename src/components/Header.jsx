import React, { useState } from "react";
import logo from "./images/logo.png";
import styled from "styled-components";
import HeaderHome from "./HeaderComponents/HeaderHome";
import Features from "./HeaderComponents/Features"; // Assume you have this component
import ContactUs from "./HeaderComponents/ContactUs"; // Assume you have this component
import Shopping from "./HeaderComponents/Shopping"; // Assume you have this component
import { Link } from "react-router-dom";

const Header = () => {
  const [activeMenu, setActiveMenu] = useState("Home");

  const menuOptions = [
    { name: "Home", component: <HeaderHome /> },
    { name: "Features", component: <Features /> },
    { name: "Contact Us", component: <ContactUs /> },
    { name: "Shopping", component: <Shopping /> },
  ];

  return (
    <>
      <Container>
        <div className="parent">
          <img src={logo} alt="logo" height="60px" width="110px" />
          <nav>
            {menuOptions.map((option) => (
              <Link
                key={option.name}
                to={option.path}
                onClick={() => setActiveMenu(option.name)}
                style={{
                  margin: "0 10px",
                  color: "white",
                  textDecoration: "none",
                }}
              >
                {option.name}
              </Link>
            ))}
          </nav>
        </div>

        {}
        <div>
          {menuOptions
            .filter((option) => option.name === activeMenu)
            .map((option) => (
              <div key={option.name}>{option.component}</div>
            ))}
        </div>
      </Container>
    </>
  );
};

export default Header;

const Container = styled.div`
  padding: 0px 18px;
  color: white;
  .parent {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  nav button {
    margin: 0 10px;
    background: none;
    border: none;
    color: white;
    cursor: pointer;
  }
`;
