import { Outlet } from 'react-router-dom';
import IncidentsList from '../features/incidents/IncidentsList';
import Operations from '../ui/Operations';

function Incidents() {
  return (
    <div>
      <Outlet />
      <Operations ticketType="incidents" />
      <IncidentsList />
    </div>
  );
}

export default Incidents;
