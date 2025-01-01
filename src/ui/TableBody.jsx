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

function TableBody({ data }) {
  return (
    <tbody>
      {data?.map((ticket) => {
        return (
          <tr key={ticket.id} className="border border-bg-gray">
            <td data-th="id" className="p-4 border-r border-bg-gray">
              <Link to={`${ticket.id}`}>&#35;{ticket.id}</Link>
            </td>
            <td
              data-th="Client/Company"
              className="p-4 border-r border-bg-gray"
            >
              <FontAwesomeIcon icon={faUserCircle} />
              <span className="ml-2">{ticket.requester}</span>
            </td>
            <td data-th="Subject" className="p-4 border-r border-bg-gray">
              {ticket.subject}
            </td>
            <td data-th="Status" className="p-4 border-r border-bg-gray">
              {ticket.status.toLowerCase().includes('loged') && (
                <FontAwesomeIcon icon={faCalendarDays} />
              )}
              {ticket.status.toLowerCase().includes('fulfiled') && (
                <FontAwesomeIcon icon={faCheck} />
              )}
              {ticket.status.toLowerCase().includes('progress') && (
                <FontAwesomeIcon icon={faHammer} />
              )}
              {ticket.status.toLowerCase().includes('hold') && (
                <FontAwesomeIcon icon={faHand} />
              )}
              <span className="ml-2">{ticket.status}</span>
            </td>
            <td data-th="Priority" className="p-4 border-r border-bg-gray">
              <span>{ticket.priority === 1 && 'High'}</span>
              <span>{ticket.priority === 2 && 'Medium'}</span>
              <span>{ticket.priority === 3 && 'Normal'}</span>
              <span>{ticket.priority === 4 && 'Low'}</span>
              <span className="text-orange-500">
                {ticket.priority === 1 && <FontAwesomeIcon icon={faCrown} />}
              </span>
            </td>
            <td data-th="Deadline" className="p-4 border-r border-bg-gray">
              <span
                className={`${
                  ticket?.deadline <= 1
                    ? 'bg-light-red text-color-orange font-medium'
                    : ticket?.deadline <= 4
                      ? 'bg-light-lim text-dark-green font-medium'
                      : 'bg-bg-light-gray text-dark-gray font-medium'
                }`}
              >
                {ticket.deadline &&
                  format(ticket?.deadline, 'MM/dd/yyyy hh:mm')}
              </span>
            </td>
            <td data-th="Assignee" className="p-4 border-r border-bg-gray">
              {ticket?.engineer}
            </td>
            <td data-th="Updated" className="p-4">
              {ticket?.lastUpdate && formatDistanceToNow(ticket.lastUpdate)}
            </td>
          </tr>
        );
      })}
    </tbody>
  );
}

export default TableBody;
