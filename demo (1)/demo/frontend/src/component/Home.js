import Navbar from './Navbar'
import './style.css'
import axios from "axios";
import slide1 from './imgs/slide1.png'

import electrical from './imgs/electrical header.jpg'
import electrical2 from './imgs/elictrical.jpg'
import electronic from './imgs/electronic.jpg'
import air from './imgs/air2.jpg'
import header1 from './imgs/header1.jpg'
import Sterilization from './imgs/Sterilization.png'

import s1 from './imgs/s1.png'
import s2 from './imgs/s2.png'
import s3 from './imgs/s3.png'
import s4 from './imgs/s4.png'
import s5 from './imgs/s5.png'
import Carousel from 'react-bootstrap/Carousel'
import { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

const Home = () => {

   const navigate = useNavigate();
   const [service, setService] = useState();
   const [addNewReview, setAddNewReview] = useState(true);
   const [reviews, setReviews] = useState([]);
   const [allMaintenanceServices, setMaintenanceServices] = useState([]);
   const [idMaintenanceService, setIdMaintenanceService] = useState();
   const [service2, setService2] = useState();
   const [idCustomer, setIdCustomer] = useState();
   const [comment, setComment] = useState();


   const state = useSelector((state) => {
      return {
         customer: state.customerReducer.customer,
      }
   })


   useEffect(() => {
      axios
         .get("http://localhost:8080/review")
         .then((response) => setReviews(response.data))
         .catch((error) => console.log(error));
      axios
         .get("http://localhost:8080/maintenanceService")
         .then((response) => setMaintenanceServices(response.data))
         .catch((error) => console.log(error));
   }, []);

   const addReview = () => {
      let reviewDiv = document.getElementById("myDIV");

      if (reviewDiv.style.display === "none" && state.customer.idCustomer) {
         reviewDiv.style.display = "block";
         setAddNewReview(true)
      } else {
         reviewDiv.style.display = "none";
         setAddNewReview(false)
      }

   }


   function selectService(e) {
      setService2(e.target.value)
      allMaintenanceServices.map((e) => {
         if (e.name == service2)
            setIdMaintenanceService(e.idService);
      })

      setIdCustomer(state.customer.idCustomer)
   }

   const selectComment = (e) => {
      selectService(e)
      setComment(e.target.value);

   }

   const addIt = () => {
      console.log("comment: " + comment)
      console.log("idMaintenanceService: " + idMaintenanceService);
      console.log("idCustomer: " + idCustomer);

      if (comment && idMaintenanceService && idCustomer) {

         const review = { comment }
         const newReview = { review, idMaintenanceService, idCustomer }

         fetch("http://localhost:8080/review", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(newReview)
         }).then(() => {
            console.log("New Review Added")
         })

      }
   }
   // const goToServicesPage=(e)=>{
   //    console.log(e.target.value);
   //    setService(e.target.value);
   // }

   return (
      <>
         <Navbar />
         <div >

            <Carousel>

               <Carousel.Item>
                  <img
                     id="header"
                     className="d-block w-100 "
                     src={slide1}
                     alt="First slide"
                     style={{ "height": 510 }}
                  />
                  <Carousel.Caption>
                     <h2>We love working</h2>
                     <h4>Maintenance service</h4>

                  </Carousel.Caption>
               </Carousel.Item>
               <Carousel.Item>
                  <img
                     id="header"
                     className="d-block w-100 "
                     src={header1}
                     alt="Second slide"
                     style={{ "height": 510 }}

                  />

                  <Carousel.Caption>

                  </Carousel.Caption>
               </Carousel.Item>
               <Carousel.Item>

                  <img
                     id="header"
                     className="d-block w-100"
                     src={electrical}
                     alt="Third slide"
                     type="button"
                     onClick={() => { setService("Electrical") }}
                  />

               </Carousel.Item>

            </Carousel>
         </div>

         <div id="service" class="hiw_section layout_padding">
            <div class="container">
               <div class="row">
                  <div class="col-md-7">
                     <h3>OUR SERVICES</h3>
                     <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
                  </div>
                  <div class="col-md-5">
                  </div>
               </div>
               <div class="row">
                  <div class="col-md-8 service_blog">
                     <a href="" onClick={() => { setService("Air condition") }}>   <img id="air" class="margin_top_10 img-responsive" src={air} /> </a>
                     <h3 id="1" >Air condition</h3>
                     <br /><br /><br /><br />
                  </div>
                  <a href="" onClick={() => { setService("Electrical") }}>
                     <div class="col-md-8 service_blog">
                        <img class="margin_top_10 img-responsive" src={electrical2} />
                        <h3 id="2" >Electrical</h3>
                        <br /><br /><br /><br />
                     </div>
                  </a>
                  <a href="" onClick={() => { setService("Electronic devices") }} >
                     <div class="col-md-8 service_blog">
                        <img class="margin_top_10 img-responsive" src={electronic} />
                        <h3 id="3" >Elecronic Devices</h3>
                        <br /><br /><br /><br />
                     </div>
                  </a>
                  <a href="" onClick={() => { setService("Sterilization") }} >
                     <div class="col-md-8 service_blog">
                        <img class="margin_top_10 img-responsive" src={Sterilization} />
                        <h3 id="4" >Sterilization</h3>
                        <br /><br /><br /><br />
                     </div>
                  </a>
               </div>
            </div>
         </div>



         <div id="wcs" class="hiw_section layout_padding">
            <div class="container">
               <div class="row">
                  <div class="col-md-12 text_align_center">
                     <h3>Our Client Say</h3>
                     <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
                  </div>
                  <div class="col-md-5">
                  </div>
               </div>
               {reviews.map((e) => {
                  return (<>
                     <div class="row">
                        <div class="col-md-11">
                           <div class="full testimonial_blog">
                              <p>{e.customer.name}</p>
                              <p>{e.comment}</p>
                           </div>
                        </div>

                     </div>
                     <br />
                     <br />
                     <br />
                     <br />
                  </>
                  )
               })}
               <button onClick={addReview} className='reviewBtn'>Add reviw</button>
               <br /><br /><br />
               <div id="myDIV" class="row" style={{ display: "none" }}>
                  {addNewReview ?
                     <div class="row">
                        <div class="col-md-11">
                           <div class="full testimonial_blog">
                              <div class="row mt-3 mx-4">
                                 <div class="col-12">
                                    <label class="order-form-label" for="date-picker-example">Selcet the Maintanance Service</label>
                                 </div>
                                 <div class="col-12">
                                    <select class="custom-select my-1 mr-sm-2" id="inlineFormCustomSelectPref" onChange={selectService}>
                                       <option selected>Choose...</option>
                                       {allMaintenanceServices.map((element) => {
                                          return <option id="op1">{element.name}</option>
                                       })}
                                    </select>
                                 </div>
                              </div>
                              <div class="row mt-3 mx-4">
                                 <div class="col-12">
                                    <label class="order-form-label" for="date-picker-example">comments</label>
                                 </div>
                                 <div class="col-12">
                                    <textarea class="order-form-input datepicker" placeholder="write you comment here" type="text-area"
                                       id="date-picker-example" onChange={selectComment} />

                                 </div>
                              </div>
                              <button className='addBtn' type='submit' onClick={addIt} >supmit</button></div>
                        </div>
                     </div>

                     : navigate("/login")}

               </div>
            </div>

         </div>


     
         {service ? navigate("/services/" + service) : ""}

      </>
   )
}
export default Home;
