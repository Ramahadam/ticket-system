import ServiceRequestList from '../features/serviceRequests/ServiceRequestList';
import { Outlet } from 'react-router-dom';
import Operations from '../ui/Operations';

function ServiceRequests() {
  return (
    <div>
      <Outlet />
      <Operations ticketType="reqeusts" />
      <ServiceRequestList />
    </div>
  );
}

export default ServiceRequests;
