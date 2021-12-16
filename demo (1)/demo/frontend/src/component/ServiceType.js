import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from 'react-router-dom';

function ServiceType(){

 

const  {service} = useParams()

const [serviceTypes,setServiceTypes]=useState([])

    useEffect(() => {
        axios
          .get(`http://localhost:8080/maintenanceService/service/`+service)
          .then((response) => setServiceTypes(response.data))
          .catch((error) => console.log(error));
      
      },[service]);
return(
    <>
    <div>
        {serviceTypes.map((e)=>{
            return(
                <div>
                    <h4>{e.name}</h4>
                    <img src={e.imgUrl} alt="" />
                </div>
            )
        })}
    </div>
    
    </>
)
}
export default ServiceType;