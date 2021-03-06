
import { useState, useEffect } from "react";
import axios from "axios";
import Request from "./Request";
import { useNavigate } from 'react-router-dom';
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
import './myRequest.css'
import Footer from "./Footer";
import Navbar from "./Navbar";
function Requests() {
  // console.log("In Requests");
  const [allRequests, setAllRequests] = useState([]);
  const navigate = useNavigate();

  const state = useSelector((state) => {
    return {
      customer: state.customerReducer.customer,
    }
  })

  useEffect(() => {
    axios
      .get(`http://localhost:8080/customer/request/` + state.customer.phoneNo)
      .then((response) => setAllRequests(response.data))
      .catch((error) => console.log(error));

  }, [allRequests]);



  return (
    <> 
    
    <Navbar/>
    {allRequests.map((element) => {
      return (
        <>
          <div class="wrapper" style={{ backgroundImage: `url("https://np-concrete.com/wp-content/uploads/2016/04/general3-1.jpg")` }}>

            <div class="inner" >
              <form action="">
                <h3> Order code #{element.idRequest}</h3>
                <br />
                <div class="form-group">
                  <p>Time: {element.time}</p>
                </div>
                <div class="form-group">
                  <p>Date:  {element.date} </p>

                </div>

                <div id="request-form" class="form-group">
                  <p>The Serviceyou order it: {element.serviceType.name} </p>

                </div>

                <div class="form-group">
                  <p>The service you request it: {element.serviceType.name}</p>
                </div>
                <div class="form-group">
                  <p>Comment: {element.comment}</p>
                </div>

              </form>
            </div>
          </div>
          <br /><br />
        </>
      )
    })}
    <Footer/>
    </>
  )
}
export default Requests;

