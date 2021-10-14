import React from 'react';
import './Sidebar.css'
const SidebarMain = () => {
    return (
        <body>
    <input type="checkbox" id="check"/>
    <label for="check">
      <i class="fas fa-bars" id="btn"></i>
      <i class="fas fa-times" id="cancel"></i>
    </label>
    <div class="sidebar">
      <header>Guitar Bangladesh</header>
      <a href="#" class="active">
        <i class="fas fa-qrcode"></i>
        <span>Dashboard</span>
      </a>
      <a href="#">
      <i class="fa-solid fa-guitar"></i>
        <span>Guitars</span>
      </a>
      <a href="#">
        <i class="fas fa-stream"></i>
        <span>Overview</span>
      </a>
      <a href="#">
         <i class="fas fa-calendar"></i>
        <span>Events</span>
      </a>
      <a href="#">
        <i class="far fa-question-circle"></i>
        <span>About</span>
      </a>
      <a href="#">
        <i class="fas fa-sliders-h"></i>
        <span>Services</span>
      </a>
      <a href="#">
        <i class="far fa-envelope"></i>
        <span>Contact</span>
      </a>
    </div>
</body>
    );
};

export default SidebarMain;