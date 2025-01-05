import { Outlet } from 'react-router-dom';
import ChangeRequestsList from '../features/changeRequests/ChangeRequestsList';
import ChangeRequestOperations from '../features/changeRequests/ChangeRequestOperations';
// import Operations from '../ui/Operations';

function ChangeRequests() {
  return (
    <div>
      <Outlet />
      <ChangeRequestOperations />
      <ChangeRequestsList />;
    </div>
  );
}

export default ChangeRequests;
