import MaintenanceServices from './component/MaintenanceServices'
import {BrowserRouter,Routes,Route} from "react-router-dom";
import Customers from './component/Customers';
import Customer from './component/Customer';
import Reviews from './component/Reviews';
import Review from './component/Review';
import Requests from './component/Requests';
import Request from './component/Request';
import Login from './component/Login';
import Register from './component/Register';
import NewRequest from './component/NewRequest';
import ServiceType from './component/ServiceType';
function App() {
 
  return (
  
      <BrowserRouter>
    
      <div>
      <Routes>
      
          <Route path="/" element={<MaintenanceServices />} />
          <Route path="/customers" element={<Customers />} />
          <Route path="/login" element={<Login />} />
          <Route path="/login/:phoneNo" element={<Customer />} />
          <Route path="/Reviews" element={<Reviews />} />
          <Route path="/Reviews/1" element={<Review />} />
          <Route path="/Requests/:phoneNo" element={<Requests />} />
          {/* <Route path="/Requests/:phoneNo" element={<Request />} /> */}
          <Route path="/Register" element={<Register />} />
          <Route path="/new_request/:phoneNo" element={<NewRequest />} />
          <Route path="new_request/serviceType/:phoneNo" element={<ServiceType />} />
          
       
      </Routes>
      </div>

      </BrowserRouter>
    
  );
}

export default App;
