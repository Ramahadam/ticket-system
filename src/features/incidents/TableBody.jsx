import {
  faCalendarDays,
  faCheck,
  faCrown,
  faHammer,
  faHand,
  faUserCircle,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { format, formatDistanceToNow } from 'date-fns';
import { Link } from 'react-router-dom';

// import {
//   faCalendarDays,
//   faCheck,
//   faCrown,
//   faHammer,
//   faHand,
//   faUserCircle,
// } from '@fortawesome/free-solid-svg-icons';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { format, formatDistanceToNow } from 'date-fns';
// import { Link } from 'react-router-dom';

function TableBody({ incidents }) {
  return (
    <tbody>
      {incidents?.map((incident) => {
        return (
          <tr key={incident.id} className="border border-bg-gray">
            <td data-th="id" className="p-4 border-r border-bg-gray">
              <Link to={`${incident.id}`}>&#35;{incident.id}</Link>
            </td>
            <td
              data-th="Client/Company"
              className="p-4 border-r border-bg-gray"
            >
              <FontAwesomeIcon icon={faUserCircle} />
              <span className="ml-2">{incident.requester}</span>
            </td>
            <td data-th="Subject" className="p-4 border-r border-bg-gray">
              {incident.subject}
            </td>
            <td data-th="Status" className="p-4 border-r border-bg-gray">
              {incident.status.toLowerCase().includes('loged') && (
                <FontAwesomeIcon icon={faCalendarDays} />
              )}
              {incident.status.toLowerCase().includes('fulfiled') && (
                <FontAwesomeIcon icon={faCheck} />
              )}
              {incident.status.toLowerCase().includes('progress') && (
                <FontAwesomeIcon icon={faHammer} />
              )}
              {incident.status.toLowerCase().includes('hold') && (
                <FontAwesomeIcon icon={faHand} />
              )}
              <span className="ml-2">{incident.status}</span>
            </td>
            <td data-th="Priority" className="p-4 border-r border-bg-gray">
              <span>{incident.priority === 1 && 'High'}</span>
              <span>{incident.priority === 2 && 'Medium'}</span>
              <span>{incident.priority === 3 && 'Normal'}</span>
              <span>{incident.priority === 4 && 'Low'}</span>
              <span className="text-orange-500">
                {incident.priority === 1 && <FontAwesomeIcon icon={faCrown} />}
              </span>
            </td>
            <td data-th="Deadline" className="p-4 border-r border-bg-gray">
              <span
                className={`${
                  incident?.deadline <= 1
                    ? 'bg-light-red text-color-orange font-medium'
                    : incident?.deadline <= 4
                      ? 'bg-light-lim text-dark-green font-medium'
                      : 'bg-bg-light-gray text-dark-gray font-medium'
                }`}
              >
                {incident.deadline &&
                  format(incident?.deadline, 'MM/dd/yyyy hh:mm')}
              </span>
            </td>
            <td data-th="Assignee" className="p-4 border-r border-bg-gray">
              {incident?.engineer}
            </td>
            <td data-th="Updated" className="p-4">
              {incident?.lastUpdate && formatDistanceToNow(incident.lastUpdate)}
            </td>
          </tr>
        );
      })}
    </tbody>
  );
}

export default TableBody;
