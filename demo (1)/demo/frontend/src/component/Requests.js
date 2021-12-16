
import { useState, useEffect } from "react";
import axios from "axios";
import Request from "./Request";
import { useNavigate } from 'react-router-dom';
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';

function Requests(){
//  console.log("In Requests");
    const [allRequests ,setAllRequests] = useState([]);
    const navigate = useNavigate();
    const {phoneNo} = useParams()

    const state = useSelector((state) => {
        return {
          customer: state.customerReducer.customer,
        }
      })
      
    useEffect(() => {
        axios
          .get(`http://localhost:8080/customer/request/`+state.customer.phoneNo)
          .then((response) => setAllRequests(response.data))
          .catch((error) => console.log(error));
      
      },[allRequests]);



return(
    <> {allRequests.map((element)=>{
      return(
          <div>
<h5>Date: {element.date}</h5>
<h5>Time: {element.time}</h5>
<h5>Service: {element.serviceType.name}</h5>
<h5>Comment: {element.comment}</h5>
          </div> )
         })} 
    </>
)
}
export default Requests;

// return(
//     <Request

//     request={element}
   
//     />
//   )