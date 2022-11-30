import React from "react";
import Project from "./Project";

const projects = [
    {
        id:1, 
        title: 'GOAT Cars', 
        languages: 'CSS, Javascript', 
        node_packages: 'express, express-handlebars, express-session, sequelize, mysql2, socket.io', 
        image: "/images/goatcars.png",
        description: "A social media platform for classic car enthusiasts. Users create profiles to display images of classic cars they own, while also interacting with other users on the platform through following, liking, and commenting on user-to-user content. Auction and merchandise purchasing functionality is present as well! I was repsonsible for the full-stack execution of the merchandise section.", 
        repository: "https://github.com/Young-Chhay/GOAT-CARs", 
        live_link: "https://goatcars.herokuapp.com/",
    },

    {
        id:1, 
        title: 'BreakHub', 
        languages: 'CSS, Javascript', 
        node_packages: 'N/A', 
        image: "/images/breakhub.png",
        description: "BreakHub is a customized virtual break room for killing time efficiently. Procrastinators unite. Whether you are a working professional, student, or want to keep on task for things around the house, BreakHub gives you the break you need and gets you back on task when the time is right. Set your custom timer to determine how long your break needs to be, and use the app to help you get back on task once break is over.", 
        repository: "https://github.com/aurorayihe/BreakHub_theThunderCats", 
        live_link: "https://aurorayihe.github.io/BreakHub_theThunderCats/",
    },

    {
        id:2, 
        title: 'E-Commerce Back End', 
        languages: 'Javascript', 
        node_packages: 'sequelize, mysql2, express, dotenv', 
        image: "",
        description: "Challenge 13 involves creating a back-end e-commerce application. Users can use this application to take full inventory of their product database by storing items according to tag, category, or product", 
        repository: "https://github.com/thundernunder/13-E-Commerce-Back-End", 
    }, 
];

function Portfolio() {
    return (
      <div>
        <p className="content is-medium">Portfolio</p>
        <hr />
  
        <Project projects={projects} />
      </div>
    );
  }
  
  export default Portfolio;