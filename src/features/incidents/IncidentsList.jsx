import Loader from '../../ui/Loader';

import { useIncidents } from './useIncidents';
import ErrorMessage from '../../ui/ErrorMessage';
import Table from './Table';

/**
 * Component to display a list of incidents.
 *
 * This component fetches incidents data using the `useIncidents` hook and displays
 * a loading indicator, an error message, or the incidents list based on the state
 * of the data fetching.
 *
 * @component
 * @example
 * return (
 *   <IncidentsList />
 * )
 *
 * @returns {JSX.Element} The rendered component.
 */
function IncidentsList() {
  const { isLoading, error, incidents, count } = useIncidents();

  if (error) return <ErrorMessage error={error} />;

  if (isLoading) return <Loader />;

  return (
    <>
      <Table incidents={incidents} count={count} />
    </>
  );
}

export default IncidentsList;
