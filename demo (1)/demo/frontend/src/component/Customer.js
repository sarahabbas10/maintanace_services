import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import { addCustomer } from '../reducers/customer/action'
import { useSelector, useDispatch } from 'react-redux';
import { BsFillTelephoneFill } from "react-icons/bs";
import { BsFillPersonFill } from "react-icons/bs";
import { BsHouseDoorFill } from "react-icons/bs";
import { BsFileLock2Fill } from "react-icons/bs";
import './customer.css'
function Customer() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    // const [customer, setCustomer] = useState({});
    let phoneNo
    let name
    let password
    let address
    const state = useSelector((state) => {

        return {
            customer: state.customerReducer.customer,
        }
    })

    const changeName = (e) => {
        name=e.target.value
      }
  
      const changeAddress = (e) => {
          address=e.target.value;
      }
  
      const changePhoneNo = (e) => {
          phoneNo=e.target.value;
      }
  
  
      const updateInfo = () => {
         password=state.customer.password;
         if (name) {
          console.log("name: " + name);
      } else name= state.customer.name;
          if (address) {
              console.log("address: " + address);
          } else address= state.customer.address;
          if (phoneNo) {
              console.log("phoneNo : " + phoneNo);
          } else phoneNo=state.customer.phoneNo;
         update()
  
  
      }
  
      const update = () => {
  
          console.log(name);
          console.log(address);
          console.log(phoneNo);
          console.log(password);
  
         
         let  customer = { name, phoneNo, password, address }
          console.log(customer);
          axios
          .put(`http://localhost:8080/customer/` + state.customer.idCustomer, customer)
          .then((response) => {
           
              const action = addCustomer(response.data)
              dispatch(action)
              navigate("/")
          })
          .catch((error) =>
              console.log(error));
          
      }
  
  
      const putCustomer = (customer)=>{
          if(name && address & phoneNo && password){
         
      }
      }

    return (

        <>
            {state.customer.idCustomer ?
                <div class="wrapper" style={{ backgroundImage: `url("https://fullcirclehomecare.com/wp-content/uploads/2016/07/Handyman-Repairs.jpg")` }}>
                    <div class="inner">
                        <form action="">
                            <h3>Profile information</h3>
                            <div class="form-group">
                                <div class="form-wrapper">
                                    <label for=""><BsFillPersonFill /> Name</label>
                                    <div class="form-holder">
                                        <input type="text" class="form-control" placeholder={state.customer.name} onChange={changeName} />
                                    </div>
                                </div>
                                <div class="form-wrapper">
                                    <label for=""><BsFillTelephoneFill /> phone number</label>
                                    <div class="form-holder">

                                        <input type="text" class="form-control" placeholder={state.customer.phoneNo} onChange={changePhoneNo} />
                                    </div>
                                </div>
                            </div>

                            <div class="form-group">
                                <div class="form-wrapper">
                                    <label for=""><BsHouseDoorFill /> Address</label>
                                    <input type="text" class="form-control" placeholder={state.customer.address} onChange={changeAddress} />
                                </div>

                            </div>
                            <div class="form-end">
                                <div class="button-holder">
                                <button  type="button" onClick={updateInfo}>Save Profile</button>
                                </div>

                            </div>
                        </form>
                    </div>
                </div>

                : navigate("/")}
        </>
    )
}
export default Customer;


{/* <div class="container rounded bg-white mt-5 mb-5" id="counter">
<div class="row">


    <div class="col-md-5 border-right">
        <div class="p-3 py-5">
            <div class="d-flex justify-content-between align-items-center mb-3">
                <h4 class="text-right">Profile Settings</h4>
            </div>
            <div class="row mt-2">
                <div class="col-md-6"><label class="labels">Name</label>
                    <input type="text" class="form-control" placeholder={state.customer.name} onChange={changeName} />
                </div>
            </div>
            <div class="row mt-3">
                <div class="col-md-12"><label class="labels">Mobile Number</label>
                    <input type="text" class="form-control" placeholder={state.customer.phoneNo} onChange={changePhoneNo} />
                </div>
                <div class="col-md-12"><label class="labels">Address</label>
                    <input type="text" class="form-control" placeholder={state.customer.address} onChange={changeAddress} />
                </div>
            </div>

            <div class="mt-5 text-center">
                <button class="btn btn-primary profile-button" type="button" onClick={updateInfo}>Save Profile</button>
            </div>
        </div>


    </div>
</div>
</div> */}


