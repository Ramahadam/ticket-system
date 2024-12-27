import Loader from '../../ui/Loader';
import { useIncidents } from './useIncidents';
import Table from '../../ui/Table';
import ErrorMessage from '../../ui/ErrorMessage';

function IncidentsList() {
  const { isLoading, error, incidents } = useIncidents();

  if (error) return <ErrorMessage error={error} />;

  if (isLoading) return <Loader />;

  return (
    <div className="container">
      <Table data={incidents} />
    </div>
  );
}

export default IncidentsList;
