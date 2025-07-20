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

  // Pagination
  const page = searchParams.get('page') ? Number(searchParams.get('page')) : 1;

  const {
    isLoading,
    data: { data: serviceRequests, count } = {},
    error,
  } = useQuery({
    queryKey: ['serviceRequests', filterByStatus, sortBy, page],
    queryFn: () =>
      getServiceRequests({ filterByStatus, sortBy, columnName, page }),
  });

  return { isLoading, serviceRequests, error, count };
}

export default useServiceRequests;
