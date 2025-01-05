import { useQuery } from '@tanstack/react-query';
import { getServiceRequests } from '../../apiServices/apiServiceRequests';
import { useSearchParams } from 'react-router-dom';

function useServiceRequests() {
  // Filter
  const columnName = 'status';
  const [searchParams] = useSearchParams();
  const filterByStatus = searchParams?.getAll(columnName);

  //Sort
  const sortByRow = searchParams.get('sortBy') || 'priority-asc';
  const [field, direction] = sortByRow.split('-');
  const sortBy = { field, direction };

  const {
    isLoading,
    data: serviceRequests,
    error,
  } = useQuery({
    queryKey: ['serviceRequests', filterByStatus, sortBy],
    queryFn: () => getServiceRequests({ filterByStatus, sortBy, columnName }),
  });

  return { isLoading, serviceRequests, error };
}

export default useServiceRequests;
