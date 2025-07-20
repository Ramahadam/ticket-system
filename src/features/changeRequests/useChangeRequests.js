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

  //Pagination
  const page = searchParams.get('page') ? Number(searchParams.get('page')) : 1;

  const {
    data: { data: changeRequests, count } = {},
    error,
    isLoading,
  } = useQuery({
    // queryKey: ['changeRequests'],
    // queryFn: fetchChangeRequests,

    queryKey: ['changeRequests', filterByStatus, sortBy, page],
    queryFn: () =>
      fetchChangeRequests({ filterByStatus, sortBy, columnName, page }),
  });

  return { changeRequests, error, isLoading, count };
}

export default useChangeRequests;
