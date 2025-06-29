import { useQuery } from '@tanstack/react-query';
import { useParams } from 'react-router-dom';
import { fetchChangeRequestById } from '../../apiServices/apiChangeRequests';

function useChangerequestById() {
  const { id } = useParams();
  ``;
  const { data: changeRequest, isLoading } = useQuery({
    queryFn: () => fetchChangeRequestById(id),
    queryKey: ['changeRequest', id],
  });

  return { changeRequest, isLoading };
}

export default useChangerequestById;
