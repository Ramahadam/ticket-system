import Status from '../features/dashboard/Status';
import TinyBarStatus from '../features/dashboard/TinyBarStatus';
import { useIncidents } from '../features/incidents/useIncidents';
import Cards from '../ui/Cards';
import ErrorMessage from '../ui/ErrorMessage';
import Loader from '../ui/Loader';
import { getTicketStatusCounts } from '../utils/helper';

function Dashboard() {
  const { isLoading, error, incidents } = useIncidents();

  if (error) return <ErrorMessage error={error} />;
  if (isLoading) return <Loader />;

  const incidentsStatus = getTicketStatusCounts(incidents);
  console.log(incidentsStatus);
  return (
    <div>
      <h1>Dashboard</h1>

      <Cards tickets={incidents} />

      <h2>Status for incidents</h2>

      <TinyBarStatus data={incidentsStatus} />
    </div>
  );
}

export default Dashboard;
