import { useQuery, useQueryClient } from '@tanstack/react-query';
import { getIncidents } from '../../apiServices/apiForIncidents';
import { useLocation, useSearchParams } from 'react-router-dom';
import { PAGE_SIZE } from '../../utils/constant';

export function useIncidents() {
  const location = useLocation();
  // Filter
  const columnName = 'status';
  const [searchParams] = useSearchParams();
  const filterByStatus = searchParams?.getAll(columnName);

  //Sort
  const sortByRow = searchParams.get('sortBy') || 'priority-asc';
  const [field, direction] = sortByRow.split('-');
  const sortBy = { field, direction };

  // Pagination
  let page = null;
  // if the page is dashboard get all data else use pagination
  if (location.pathname !== '/dashboard')
    page = searchParams.get('page') ? Number(searchParams.get('page')) : 1;

  const queryClient = useQueryClient();

  const {
    isLoading,
    data: { data: incidents, count } = {},
    error,
  } = useQuery({
    queryKey: ['incidents', filterByStatus, sortBy, page],
    queryFn: () => getIncidents({ filterByStatus, sortBy, columnName, page }),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ['incidents', filterByStatus, sortBy, page],
      });
    },
  });

  // Prefetching the next page for better UX

  const pageCount = Math.ceil(count / PAGE_SIZE);

  if (page < pageCount)
    queryClient.prefetchQuery({
      queryKey: ['incidents', filterByStatus, sortBy, page + 1],
      queryFn: () =>
        getIncidents({ filterByStatus, sortBy, columnName, page: page + 1 }),
    });

  if (page > 1)
    queryClient.prefetchQuery({
      queryKey: ['incidents', filterByStatus, sortBy, page - 1],
      queryFn: () =>
        getIncidents({ filterByStatus, sortBy, columnName, page: page - 1 }),
    });

  return { isLoading, incidents, error, count };
}
