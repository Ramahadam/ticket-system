import useServiceRequests from './useServiceRequests';
import ErrorMessage from '../../ui/ErrorMessage';
import Loader from '../../ui/Loader';
import Table from '../../ui/Table';
import ExcelExportButton from '../../ui/ExcelExportButton';

function ServiceRequestList() {
  const { isLoading, error, serviceRequests } = useServiceRequests();

  if (error) return <ErrorMessage error={error} />;

  if (isLoading) return <Loader />;

  return (
    <div className="container overflow-scroll">
      <div className="flex items-center justify-between ">
        <h2 className="text-xl font-bold mb-4">Service requests List</h2>
        <ExcelExportButton data={serviceRequests} fileName="Service requests" />
      </div>
      <Table data={serviceRequests} />
    </div>
  );
}

export default ServiceRequestList;
