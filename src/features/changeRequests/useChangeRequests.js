import { useQuery } from '@tanstack/react-query';
import { fetchChangeRequests } from '../../apiServices/apiChangeRequests';
import { useSearchParams } from 'react-router-dom';

function useChangeRequests() {
  // Filter
  const columnName = 'status';
  const [searchParams] = useSearchParams();
  const filterByStatus = searchParams?.getAll(columnName);

  //Sort
  const sortByRow = searchParams.get('sortBy') || 'classification-asc';
  const [field, direction] = sortByRow.split('-');
  const sortBy = { field, direction };

  const {
    data: changeRequests,
    error,
    isLoading,
  } = useQuery({
    // queryKey: ['changeRequests'],
    // queryFn: fetchChangeRequests,

    queryKey: ['changeRequests', filterByStatus, sortBy],
    queryFn: () => fetchChangeRequests({ filterByStatus, sortBy, columnName }),
  });

  return { changeRequests, error, isLoading };
}

export default useChangeRequests;
