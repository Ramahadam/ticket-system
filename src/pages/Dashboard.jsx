import { useIncidents } from '../features/incidents/useIncidents';
import Cards from '../ui/Cards';
import ErrorMessage from '../ui/ErrorMessage';
import Loader from '../ui/Loader';

function Dashboard() {
  const { isLoading, error, incidents } = useIncidents();

  if (error) return <ErrorMessage error={error} />;
  if (isLoading) return <Loader />;

  return (
    <div>
      <h1>Dashboard</h1>

      <Cards tickets={incidents} />
    </div>
  );
}

export default Dashboard;
