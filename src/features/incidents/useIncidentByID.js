import { useQuery } from '@tanstack/react-query';
import { useParams } from 'react-router-dom';
import { getIncident } from '../../apiServices/apiForIncidents';

function useIncidentByID() {
  const { id } = useParams();
  ``;
  const { data: incident, isLoading } = useQuery({
    queryFn: () => getIncident(id),
    queryKey: ['incident', id],
  });

  return { incident, isLoading };
}

export default useIncidentByID;
