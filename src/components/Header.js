import React, { useState } from 'react';
import Navigation from "./Navigation";
import About from "./About";
import Portfolio from "./Portfolio";
import Resume from "./Resume";
import Nate from "../img/nate.png";

function Header() {
    const [currentPage, handlePageChange] = useState("About");

const renderPage = () => {
    switch (currentPage) {
      case "About":
        return <About />;
      case "Portfolio":
        return <Portfolio />;
      case "Resume":
        return <Resume />;
      default:
        return <About />;
    }
  };

  return (
    <div>
      <nav className="navbar">
        <div className="navbar-brand">
          <a
            className="navbar-item"
            rel="noreferrer"
            target="_blank"
            href="https://github.com/thundernunder?tab=repositoriess"
          >
            <span className="content is-large">
              <div style={{ backgroundImage: `url(${Nate})` }}>
              Nathan Underwood
              <br />
              <br />
              <br />
              </div>
            </span>
          </a>
        </div>
      </nav>
    
      <Navigation
        currentPage={currentPage}
        handlePageChange={handlePageChange}
      />
      
      <main>
        <div>{renderPage(currentPage)}</div>
      </main>
    </div>
  );
}

export default Header;