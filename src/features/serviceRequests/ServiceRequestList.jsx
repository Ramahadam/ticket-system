import useServiceRequests from './useServiceRequests';
import ErrorMessage from '../../ui/ErrorMessage';
import Loader from '../../ui/Loader';
import Table from '../../ui/Table';

function ServiceRequestList() {
  const { isLoading, error, serviceRequests } = useServiceRequests();

  if (error) return <ErrorMessage error={error} />;

  if (isLoading) return <Loader />;

  return (
    <div className="container">
      <Table data={serviceRequests} />
    </div>
  );
}

export default ServiceRequestList;
