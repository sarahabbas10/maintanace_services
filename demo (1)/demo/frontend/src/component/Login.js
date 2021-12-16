import './login.css';
import axios from "axios";
import Customer from './Customer';
import { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import { addCustomer } from '../reducers/customer/action'
import { useSelector, useDispatch } from 'react-redux';
import { BsFillTelephoneFill } from "react-icons/bs";
import { BsFileLock2Fill } from "react-icons/bs";


function Login() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [phoneNo, setPhoneNo] = useState();

    const state = useSelector((state) => {
        return {
            customer: state.customerReducer.customer,
        }
    })

    console.log(state.customer);

    const onChange = (e) => {
        setPhoneNo(e.target.value)
    }

    const register = () => {
        navigate("/register")
    }


    const log = () => {
        if (phoneNo) {
            axios
                .get(`http://localhost:8080/customer/${phoneNo}`)
                .then((response) => {
                    const action = addCustomer(response.data)
                    dispatch(action)
                    console.log("yes");

                })
                .catch((error) =>
                    console.log(error));
            navigate("/home");

        }
    }

    return (
        <div className="wrapper" style={{ backgroundImage: `url("https://fullcirclehomecare.com/wp-content/uploads/2016/07/Handyman-Repairs.jpg")` }}>
            <div className="inner">
                <form>
                    <h3>Login Form</h3>
                    <br />
                    <div className="form-group">
                        <div className="form-wrapper">
                            <label ><BsFillTelephoneFill /> phone number</label>
                            <div className="form-holder">
                                <input id="user" type="text" className="form-control" placeholder="Enter your phone number" onChange={onChange} />

                            </div>
                        </div>
                    </div>
                    <div className="form-group">
                        <div className="form-wrapper">
                            <label ><BsFileLock2Fill /> Password</label>
                            <div className="form-holder">
                                <input type="password" className="form-control" placeholder="Enter your password" />

                            </div>
                        </div>
                    </div>
                    <div className="form-end">

                        <div class="button-holder">
                            <button onClick={() => { navigate("/register") }}>Register Now</button>
                        </div>
                        <div class="button-holder">
                            <button onClick={log} >Login</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>

    )

}

export default Login;


{/* <button type="submit" onClick={() => { navigate("/register") }}>Don't have Account?</button> */ }


{/* <div class="login-box">
             
<div class="login-space">
    <div class="login">
        <div class="group">
            <label for="user" class="label">Phone number</label>
            <input id="user" type="text" className="form-control" placeholder="Enter your phone number" onChange={onChange} />

        </div>
        <div class="group">
            <label for="pass" class="label">Password</label>
            <input id="pass" type="password" class="input" data-type="password" placeholder="Enter your password" />
        </div>
        <div class="group">
            <input type="submit" className="button" value="Login" onClick={log} />
        </div>
    </div>
</div>
</div> */}