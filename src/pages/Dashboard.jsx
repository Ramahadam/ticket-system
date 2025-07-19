import StatusInPercentage from '../features/dashboard/StatusInPercentage';
import TinyBarStatus from '../features/dashboard/TinyBarStatus';
import { useIncidents } from '../features/incidents/useIncidents';
import useServiceRequests from '../features/serviceRequests/useServiceRequests';
import useChangeRequests from '../features/changeRequests/useChangeRequests';

import ErrorMessage from '../ui/ErrorMessage';
import Loader from '../ui/Loader';
import { getTicketStatusCounts } from '../utils/helper';

function Dashboard() {
  const { isLoading, error, incidents } = useIncidents();
  const { serviceRequests } = useServiceRequests();
  const { changeRequests, isLoading: isLoadingChange } = useChangeRequests();

  if (error) return <ErrorMessage error={error} />;
  if (isLoading || isLoadingChange) return <Loader />;

  const incidentsStatus = getTicketStatusCounts(incidents);
  const serviceRequestsStatus = getTicketStatusCounts(serviceRequests);
  const changeRequestsStatus = getTicketStatusCounts(changeRequests);

  return (
    <div>
      <h1>Dashboard</h1>
      <div className="grid grid-cols-3 gap-y-32 text-center">
        <TinyBarStatus data={incidentsStatus} lable="incidents" />

        <TinyBarStatus data={serviceRequestsStatus} lable="Service Requests" />
        <TinyBarStatus data={changeRequestsStatus} lable="Change Requests" />

        <StatusInPercentage data={incidentsStatus} label="Incidents" />

        <StatusInPercentage
          data={serviceRequestsStatus}
          label="service requests"
        />
        <StatusInPercentage
          data={changeRequestsStatus}
          label="change requests"
        />
      </div>
    </div>
  );
}

export default Dashboard;
