import './Navbar.css';
import { useEffect } from "react";
import { useRef } from "react";
import { NavLink } from 'react-router-dom';
function Navbar(){

    return(
    <div className="Navbar fixed-top">
    <nav class="navbar  navbar-expand-lg navbar-light ">
  <div class="container-fluid">
    <a class="logo" href="#"><img class="cloud" src={require('./img/cloud.png')}></img></a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div class="navbar-nav ">
        <a href='#'><button type="button" class="btn createVM-btn" >Create VM</button></a>
        <a href='#'><button type="button" class="btn User-btn" >
          <p>user@email.com <br></br>
        ID:Subscription_ID</p>
        <i class="fa fa-user-circle-o" aria-hidden="true"></i>
        
        </button></a>
       
      </div>
    </div>
  </div>
</nav>

    </div>
    );
}
export default Navbar; 