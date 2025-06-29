import { Outlet } from 'react-router-dom';
import IncidentsList from '../features/incidents/IncidentsList';
// import Operations from '../ui/Operations';
import IncidentsOperation from '../features/incidents/IncidentsOperation';

function Incidents() {
  return (
    <div>
      <Outlet />
      {/* <Operations ticketType="incidents" /> */}
      <IncidentsOperation />
      <IncidentsList />
    </div>
  );
}

export default Incidents;
