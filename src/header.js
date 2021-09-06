import React from 'react';
import image from './images/video.gif';

function Header() {
    return (
        <div>

<div>
<div id ="nav-bar"className="navbar navbar-expand-lg navbar-light bg-light navbar-fixed-top" data-spy="affix" data-offset-top="197" >
    <div class="container-fluid">
      <a class="navbar-brand" href="#">Navbar</a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <a className="nav-link active" aria-current="page" href="#">Home</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#about">About Us</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#product">Products</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#contact">Reserve A Table</a>
          </li>
          <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
             Services
            </a>
            <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
              <li><a className="dropdown-item" href="#service">Service1</a></li>
              <li><a className="dropdown-item" href="#service2">Service2</a></li>
              <li><hr className="dropdown-divider"></hr></li>
              
              
             
            </ul>

          </li>
          <li className="nav-item">
            <a className="nav-link" href="#image-gallery">Image Gallery</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#contact-us">Contact Us</a>
          </li>
        </ul>
        <form className="d-flex">
            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
         
          <button className="btn btn-outline-success" type="submit">Search</button>
        </form>
      </div>
    </div>
    </div>
  </div>
  <br/>
  

  

    <br/>
    <div className="head" >
  
      <img src={image}style={{ width:"100%"}}/>
     

  
    </div>



          
</div>


            



            )
}

            export default Header
