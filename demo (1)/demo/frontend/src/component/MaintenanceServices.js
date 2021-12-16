import { useState, useEffect } from "react";
import axios from "axios";
import MaintenanceService from './MaintenanceService'
import Login from "./Login";
import { useNavigate } from 'react-router-dom';
    
function MaintenanceServices(){
  const navigate = useNavigate();
    
    const [allMaintenanceServices ,setMaintenanceServices] = useState([]);
    useEffect(() => {
        axios
          .get("http://localhost:8080/maintenanceService")
          .then((response) => setMaintenanceServices(response.data))
           //response.data.items[0].snippet.thumbnails.high.url
          .catch((error) => console.log(error));
      
      },[allMaintenanceServices]);

    //   console.log(allMaintenanceServices);

    const log = () => {
      navigate("/login");
    
  }
return(
<>
{allMaintenanceServices.map((element)=>{
       return(
          <MaintenanceService

         maintenanceService={element}
         
          />
        )
        })} 

        <button onClick={log}>Login</button>
</>
)
    }
export default MaintenanceServices;