import ServiceRequestList from '../features/serviceRequests/ServiceRequestList';
import { Outlet } from 'react-router-dom';
// import Operations from '../ui/Operations';
import ServiceRequestsOperations from '../features/serviceRequests/ServiceRequestsOperations';

function ServiceRequests() {
  return (
    <div>
      <Outlet />
      {/* <Operations ticketType="reqeusts" /> */}
      <ServiceRequestsOperations />
      <ServiceRequestList />
    </div>
  );
}

export default ServiceRequests;
