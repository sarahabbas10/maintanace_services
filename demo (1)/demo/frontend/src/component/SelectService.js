import './newRequest.css'
import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
import ConfirmOrder from './ConfirmOrder';

function SelectService({ selectMaintenanceService }) {
    //console.log("in select service: "+maintenanceService);

    const state = useSelector((state) => {
        return {
            customer: state.customerReducer.customer,
        }
    })

    const [idCustomer, setIdCustomer] = useState();
    const [idServiceType, setIdServiceType] = useState();
    const [services, setServices] = useState([]);
    const [selcetService, setSelcetService] = useState();
    const [service, setService] = useState({});
    const [comment, setComment] = useState();
    const [time, setTime] = useState();
    const [date, setDate] = useState();
    const [requestState, setRequestState] = useState();
    const [service_enrolled, setService_enrolled] = useState([]);


    useEffect(() => {
        console.log(selectMaintenanceService);
        axios
            .get(`http://localhost:8080/maintenanceService/service/` + selectMaintenanceService)
            .then((response) => setServices(response.data))
            .catch((error) => console.log(error));

        if (selcetService) {
            axios
                .get(`http://localhost:8080/serviceType/` + selcetService)
                .then((response) => setIdServiceType(response.data.idServiceType))
                .catch((error) => console.log(error));
        }

    }, [selectMaintenanceService, selcetService]);

    function selectServiceType(e) {
        console.log(e.target.value);
        setSelcetService(e.target.value);

    }

    const selectDate = (e) => {
        setDate(e.target.value);

    }

    const selectTime = (e) => {
        setTime(e.target.value);
        setRequestState("done");
        setIdCustomer(state.customer.idCustomer)

    }

    const selectComment = (e) => {
        setComment(e.target.value);

    }
    let request = {};
    const clickBtn = (e) => {


        console.log("idServiceType: " + idServiceType);
        console.log("requestState: " + requestState);
        console.log("date: " + date);
        console.log("time: " + time);
        console.log("idCustomer: " + idCustomer);
        console.log("comment: " + comment);
        console.log("idServiceType: " + idServiceType);

        if (requestState && date && time && comment && idCustomer & idServiceType) {
            request = { requestState, date, time, comment };

            console.log(request);
            console.log("date: " + date);
            console.log("time: " + time);
            console.log("Comment: " + comment);
            console.log("reguest:" + request);
            console.log("idCustomer: " + idCustomer);
            console.log("idServiceType:" + idServiceType);

            e.preventDefault()
            const confiermRequest = { request, idCustomer, idServiceType }

            console.log(confiermRequest)
            fetch("http://localhost:8080/request/newRequest", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(confiermRequest)
            }).then(() => {
                console.log("New Request Added")
            })
        }
    }




    return (
        <>
            <div class="form-holder">
                <select class="custom-select my-1 mr-sm-2" id="inlineFormCustomSelectPref" required onChange={selectServiceType}>
                    <option selected>Choose...</option>
                    {services ? services.map((element) => {
                        return <option id="op1">{element.name}</option>
                    }) : ""}
                </select>
            </div>
            <div class="form-wrapper">
                <label >Selcet the time to recive servises</label>
                <div class="form-holder">
                    <select class="custom-select my-1 mr-sm-2" id="inlineFormCustomSelectPref" onChange={selectTime}>
                        <option selected>Choose...</option>
                        <option >10 am </option>
                        <option >11 am</option>
                        <option >1 pm </option>
                        <option >2 pm</option>
                        <option >3 pm </option>
                        <option >4 pm</option>
                        <option >5 pm </option>
                        <option >6 pm</option>
                        <option >7 pm </option>
                        <option >8 pm</option>
                        <option >9 pm </option>
                        <option >10 pm</option>
                    </select>
                </div>
            </div>
            <div class="form-wrapper">
                <label >Date</label>
                <div class="form-holder">
                    <input class="order-form-input datepicker" placeholder="Selected date" type="date"
                        id="date-picker-example" onChange={selectDate} />
                </div>
            </div>

            <div class="form-wrapper">
                <label for="">comments</label>
                <div class="form-holder">
                    <textarea class="order-form-input datepicker" placeholder="write you comment here" type="text-area"
                        id="date-picker-example" onChange={selectComment} />
                </div>
            </div>
            <div class="button-holder">
                <button onClick={clickBtn}>Confirm Order</button>
            </div>
        </>
    )
}
export default SelectService;

{/* <div class="col-12">
                <select class="custom-select my-1 mr-sm-2" id="inlineFormCustomSelectPref" required onChange={selectServiceType}>
                    <option selected>Choose...</option>
                    {services ? services.map((element) => {
                        return <option id="op1">{element.name}</option>
                    }) : ""}
                </select>
            </div>
            <div class="row mt-3 mx-4">
                <div class="col-12">
                    <label class="order-form-label" for="date-picker-example">Date</label>
                </div>
                <div class="col-12">
                    <input class="order-form-input datepicker" placeholder="Selected date" type="date"
                        id="date-picker-example" onChange={selectDate} />
                </div>
            </div>

            <div class="row mt-3 mx-4">
                <div class="col-12">
                    <label class="order-form-label" for="date-picker-example">Selcet the time to recive servises</label>

                </div>
                <div class="col-12">
                    <select class="custom-select my-1 mr-sm-2" id="inlineFormCustomSelectPref" onChange={selectTime}>
                        <option selected>Choose...</option>
                        <option >10 am </option>
                        <option >11 am</option>
                        <option >1 pm </option>
                        <option >2 pm</option>
                        <option >3 pm </option>
                        <option >4 pm</option>
                        <option >5 pm </option>
                        <option >6 pm</option>
                        <option >7 pm </option>
                        <option >8 pm</option>
                        <option >9 pm </option>
                        <option >10 pm</option>
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
            <div class="row mt-3">
                <div class="col-12">
                    <button type="button" id="btnSubmit" class="btn btn-dark d-block mx-auto btn-submit" onClick={clickBtn}>Submit</button>
                {/* {idServiceType ? <ConfirmOrder idServiceType={idServiceType} time={time} date={data}  comment={comment} />:""} */}
            //     </div>
            // </div> */}