import { Outlet } from 'react-router-dom';
import ChangeRequestsList from '../features/changeRequests/ChangeRequestsList';
import Operations from '../ui/Operations';

function ChangeRequests() {
  return (
    <div>
      <Outlet />
      <Operations ticketType="changeRequests" />
      <ChangeRequestsList />;
    </div>
  );
}

export default ChangeRequests;
