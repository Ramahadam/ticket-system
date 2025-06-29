import { Link } from 'react-router-dom';
import ErrorMessage from '../../ui/ErrorMessage';
import Loader from '../../ui/Loader';
import useChangeRequests from './useChangeRequests';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCalendarDays,
  faCheck,
  faCircle,
  faCrown,
  faHammer,
  faHand,
  faUserCircle,
} from '@fortawesome/free-solid-svg-icons';
import { format, formatDistanceToNow } from 'date-fns';

function ChangeRequestsList() {
  const { changeRequests, error, isLoading } = useChangeRequests();

  if (error) return <ErrorMessage error={error} />;

  if (isLoading) return <Loader />;
          
  return (
    <div className="container overflow-scroll">
      <h2 className="text-xl font-bold mb-4">Change requests List</h2>
      <table className="table-auto bg-white ">
        <thead className="bg-bg-light-gray">
          <tr>
            <td className="p-4 rounded-tl-md">Id</td>
            <td className="p-4">
              <span>Client&#47;Company</span>
            </td>
            <td className="p-4">Summary</td>
            <td className="p-4">Category</td>
            <td className="p-4">
              <span>Status</span>
            </td>
            <td className="p-4">
              <span>Priority</span>
            </td>
            <td className="p-4">Deadline</td>
            <td className="p-4">
              <span>Owner</span>
            </td>
            <td className="p-4 rounded-tr-md">Updated</td>
          </tr>
        </thead>
        <tbody>
          {changeRequests?.map((changeRequest) => {
            return (
              <tr key={changeRequest.id} className="border border-bg-gray">
                <td data-th="id" className="p-4 border-r border-bg-gray">
                  <Link to={`${changeRequest.id}`}>
                    &#35;{changeRequest.id}
                  </Link>
                </td>
                <td
                  data-th="Client/Company"
                  className="p-4 border-r border-bg-gray"
                >
                  <FontAwesomeIcon icon={faUserCircle} />
                  <span className="ml-2">{changeRequest.requester}</span>
                </td>
                <td data-th="Subject" className="p-4 border-r border-bg-gray">
                  {changeRequest.summary}
                </td>
                <td data-th="Subject" className="p-4 border-r border-bg-gray">
                  {changeRequest.category}
                </td>
                <td data-th="Status" className="p-4 border-r border-bg-gray">
                  {changeRequest.status.toLowerCase().includes('requested') && (
                    <FontAwesomeIcon icon={faCalendarDays} />
                  )}
                  {changeRequest.status.toLowerCase().includes('approved') && (
                    <FontAwesomeIcon icon={faCheck} />
                  )}
                  {changeRequest.status
                    .toLowerCase()
                    .includes('pending approval') && (
                    <FontAwesomeIcon icon={faHammer} />
                  )}
                  {changeRequest.status.toLowerCase().includes('cancelled') && (
                    <FontAwesomeIcon
                      icon={faHand}
                      className="text-color-orange"
                    />
                  )}
                  {changeRequest.status
                    .toLowerCase()
                    .includes('implemented') && (
                    <FontAwesomeIcon
                      icon={faCircle}
                      className="text-dark-green"
                    />
                  )}
                  <span className="ml-2">{changeRequest.status}</span>
                </td>
                <td data-th="Priority" className="p-4 border-r border-bg-gray">
                  <span>{changeRequest.classification === 1 && 'Major'}</span>
                  <span>
                    {changeRequest.classification === 2 && 'Significant'}
                  </span>
                  <span>
                    {changeRequest.classification === 3 && 'Standard'}
                  </span>
                  <span>{changeRequest.classification === 4 && 'Normal'}</span>
                  <span className="text-orange-500">
                    {changeRequest.classification === 1 && (
                      <FontAwesomeIcon icon={faCrown} />
                    )}
                  </span>
                </td>
                <td data-th="Deadline" className="p-4 border-r border-bg-gray">
                  <span
                    className={`${
                      changeRequest?.deadline <= 1
                        ? 'bg-light-red text-color-orange font-medium'
                        : changeRequest?.deadline <= 4
                          ? 'bg-light-lim text-dark-green font-medium'
                          : 'bg-bg-light-gray text-dark-gray font-medium'
                    }`}
                  >
                    {changeRequest.deadline &&
                      format(changeRequest?.deadline, 'MM/dd/yyyy hh:mm')}
                  </span>
                </td>
                <td data-th="Assignee" className="p-4 border-r border-bg-gray">
                  {changeRequest?.owner}
                </td>
                <td data-th="Updated" className="p-4">
                  {changeRequest?.last_updated &&
                    formatDistanceToNow(changeRequest.last_updated)}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default ChangeRequestsList;
