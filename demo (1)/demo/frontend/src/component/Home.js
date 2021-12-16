import Navbar from './Navbar'
import './style.css'
import axios from "axios";
import slide1 from './imgs/slide1.png'
import left from './imgs/left.png'
import right from './imgs/right.png'
import logo from './imgs/logo1.PNG'
import s1 from   './imgs/s1.png'
import s2 from   './imgs/s2.png'
import s3 from   './imgs/s3.png'
import s4 from   './imgs/s4.png'
import s5 from   './imgs/s5.png'
import Carousel from 'react-bootstrap/Carousel'
import { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

const Home =()=>{
  
   const navigate = useNavigate();
   const [service, setService] = useState();

   const [reviews, setReviews] = useState([]);
   const [allMaintenanceServices, setMaintenanceServices] = useState([]);

   const state = useSelector((state) => {
      return {
          customer: state.customerReducer.customer,
      }
  }) 

  console.log(state.customer);

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


// const goToServicesPage=(e)=>{
//    console.log(e.target.value);
//    setService(e.target.value);
// }

return(
    <>
    <Navbar/>
<div>
    <Carousel>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={slide1}
      alt="First slide"
    />
    <Carousel.Caption>
   
                  <h2>We love working</h2>
                  <h4>Maintenance service</h4>
                  <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years</p>
                  <a class="blue_bt" href="#">See Our Service</a>
               
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={logo}
      alt="Second slide"
    />

    <Carousel.Caption>
       
               
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
     
    <img
      className="d-block w-100"
      src={slide1}
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>Third slide label</h3>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption>
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
                       <img class="margin_top_10 img-responsive" src={s1}  />
                       <h3 class="blog_head">Air condition</h3>
                  <br/><br/><br/><br/>
               </div>
               <div class="col-md-8 service_blog">
                       <img class="margin_top_10 img-responsive" src={s1}  />
                       <h3 class="blog_head">Elictrical</h3>
                  <br/><br/><br/><br/>   
               </div>
               <div class="col-md-8 service_blog">
                       <img class="margin_top_10 img-responsive" src={s1}  />
                       <h3 class="blog_head">Elecronic Devices</h3>
                  <br/><br/><br/><br/>   
               </div>
               <div class="col-md-8 service_blog">
                       <img class="margin_top_10 img-responsive" src={s1}  />
                       <h3 class="blog_head">Sterilization</h3>
                  <br/><br/><br/><br/>   
               </div>
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
            { reviews.map((e) => {
                    return (<>
            <div class="row">
               <div class="col-md-11">
                  <div class="full testimonial_blog">              
                     <p>{e.customer.name}</p>
                     <p>{e.comment}</p>
                     </div>
               </div>
              
            </div>
            <br/>
               <br/>
               <br/>
               <br/>
            </>
                       )
                       })}  
         </div>
      </div>

      {service ? navigate("/services/" + service) : ""}

     
    </>
)
}
export default Home;
