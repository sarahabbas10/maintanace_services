import axios from "axios";
import { useState, useEffect } from "react";
import './login.css';
import { useNavigate } from 'react-router-dom';
import { addCustomer } from '../reducers/customer/action'
import { useDispatch } from 'react-redux';
import img from './imgs/bg-registration-form-3.jpg'
import { BsFillTelephoneFill } from "react-icons/bs";
import { BsFillPersonFill } from "react-icons/bs";
import { BsHouseDoorFill } from "react-icons/bs";
import { BsFileLock2Fill } from "react-icons/bs";
import formImg from './imgs/background-form.jpg'

function Register() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [phoneNo, setPhoneNo] = useState();
    const [name, setName] = useState();
    const [password, setPassword] = useState();
    const [address, setAddress] = useState();


    const clickBtn = (e) => { 
        const customer = { name, phoneNo, password, address }

        axios
        .post("http://localhost:8080/customer",customer)
        .then((response) => {
                    const action = addCustomer(response.data)
                    dispatch(action)
                })
                .catch((error) =>
             console.log(error));
             navigate("/maintanseServices/" + phoneNo);
    }



    return (
        <>
        
        <div class="wrapper" style={{ backgroundImage: `url("https://fullcirclehomecare.com/wp-content/uploads/2016/07/Handyman-Repairs.jpg")`}}>
			<div class="inner">
				<form action="">
					<h3>Registration Form</h3>
					<div class="form-group">
						<div class="form-wrapper">
							<label for=""><BsFillPersonFill/> Name</label>
							<div class="form-holder">
						                               
								<input type="text" class="form-control" placeholder="Enter your name" onChange={(e) => setName(e.target.value)}/>  
							</div>
						</div>
						<div class="form-wrapper">
							<label for=""><BsFillTelephoneFill/> phone number</label>
							<div class="form-holder">
								
								<input type="text" class="form-control" placeholder="Enter your phone number" onChange={(e) => setPhoneNo(e.target.value)}/>
							</div>
						</div>
					</div>
					<div class="form-group">
						<div class="form-wrapper">
							<label for=""><BsFileLock2Fill/> Password</label>
							<div class="form-holder">
							
								<input type="password" class="form-control" placeholder="********" onChange={(e) => setPassword(e.target.value)}/>
							</div>
						</div>
						<div class="form-wrapper">
							<label for=""><BsFileLock2Fill/> Repeat Password</label>
							<div class="form-holder">
							
								<input type="password" class="form-control" placeholder="********"/>
							</div>
						</div>
					</div>
					<div class="form-group">
						<div class="form-wrapper">
							<label for=""><BsHouseDoorFill/> Address</label>
                            <input type="text" class="form-control" placeholder="Enter your address" onChange={(e) => setAddress(e.target.value)} />
						</div>
						
					</div>
					<div class="form-end">
						
						<div class="button-holder">
							<button onClick={clickBtn}>Register Now</button>
						</div>
						<div class="button-holder">
							<button onClick={()=>{navigate("/login")}}>Already have account</button>
						</div>
						
					</div>
				</form>
			</div>
		</div>
           
        </>
    )
}
export default Register;

