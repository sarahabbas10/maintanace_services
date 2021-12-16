import './style.css';
import logo from './imgs/logo2.png';
import Offcanvas from 'react-bootstrap/Offcanvas';


import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from "react";

import { useSelector, useDispatch } from 'react-redux';

function Navbar() {

   const navigate = useNavigate();
   const [show, setShow] = useState(false);

   const handleClose = () => setShow(false);
   const handleShow = () => setShow(true);

   const state = useSelector((state) => {
      return {
         customer: state.customerReducer.customer,
      }
   })

   const myProfile = (e) => {
      if (state.customer.idCustomer) {
         navigate("/myAccount");
      }
      // else navigate("/login")
   }

   const myRequest = (e) => {
      if (state.customer.idCustomer) {
         navigate("/myRequests");
      }
      //  else navigate("/login")
   }

   const newRequest = (e) => {
      if (state.customer.idCustomer) {
         navigate("/new_request");
      }
   //   else navigate("/login")
   }

   const registerCustomer = () => {
      navigate("/register");
   }

   return (
      <>
         <div id="header" class="header">
            <nav class="navbar navbar-expand-lg navbar-light text-capitalize">
               <div class="container">
                  <img src={logo} className='logoImg' />
                  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#show-menu" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                     <span class="navbar-toggler-icon"></span>
                  </button>
                  <div class="collapse navbar-collapse" id="show-menu">
                     <ul class="navbar-nav ml-auto">
                        <li class="nav-item active">
                           <a class="nav-link" href="#home">Home</a>
                        </li>
                        <li class="nav-item">
                           <a class="nav-link" href="#about">About</a>
                        </li>
                        <li class="nav-item">
                           <a class="nav-link" href="#service">Service</a>
                        </li>
                        <li class="nav-item">
                           <a class="nav-link" href="#wcs">What Clients Say</a>
                        </li>
                        <li class="nav-item">
                           <a class="nav-link" href="#contact">Contact</a>
                        </li>
                        <li class="nav-item">
                           <a class="nav-link" href="" onClick={registerCustomer} >Login/Register</a>
                        </li>
                        <li class="nav-item .search-container">
                           <a class="nav-link" onClick={handleShow} >Menu</a>

                           <Offcanvas show={show} onHide={handleClose}>
                              <Offcanvas.Header closeButton>
                                 <Offcanvas.Title>Close Menu</Offcanvas.Title>
                              </Offcanvas.Header>
                              <Offcanvas.Body>

                                 <a class="nav-link" href="#hiw" onClick={newRequest}>New Request</a>
                                 <a class="nav-link" href="#hiw" onClick={myProfile}>My Profile</a>
                                 <a class="nav-link" href="#hiw" onClick={myRequest}>My Request </a>

                              </Offcanvas.Body>
                           </Offcanvas>
                        </li>
                     </ul>

                  </div>

               </div>
            </nav>
         </div>
      </>
   )
}
export default Navbar;
