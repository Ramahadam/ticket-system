import {
  faCalendarDays,
  faCheck,
  faHammer,
  faHand,
  faUserCircle,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./TicketsList.module.css";

function TicketsList() {
  return (
    <div className={styles.container}>
      <table className={styles["tickets-table"]}>
        <thead>
          <tr>
            <th>Id</th>
            <th>Client&#47;Company</th>
            <th>Subject</th>
            <th>Status</th>
            <th>Prority</th>
            <th>Deadline</th>
            <th>Assignee</th>
            <th>Updated</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td data-th="id">#123</td>
            <td data-th="Client/Company">
              <FontAwesomeIcon icon={faUserCircle} />
              <span>Jone Kendy</span>
            </td>
            <td data-th="Subject">Keyboard not working</td>
            <td data-th="Status">
              <FontAwesomeIcon icon={faCheck} />
              <span>Completed</span>
            </td>
            <td data-th="Prority">Normal</td>
            <td data-th="Deadline">
              <span className={styles.normal}> 4 hours</span>
            </td>
            <td data-th="Assignee">Mirza</td>
            <td data-th="Updated">1 hour ago</td>
          </tr>
          <tr>
            <td data-th="id">#124</td>
            <td data-th="Client/Company">
              <FontAwesomeIcon icon={faUserCircle} />
              <span>Peter Jakc</span>
            </td>
            <td data-th="Subject">Outlook stuck</td>
            <td data-th="Status">
              <FontAwesomeIcon icon={faHammer} />
              <span>In progress</span>
            </td>
            <td data-th="Prority">High</td>
            <td data-th="Deadline">
              <span className={styles.high}>1 hours</span>
            </td>
            <td data-th="Assignee">Gazi</td>
            <td data-th="Updated">2 hours ago</td>
          </tr>
          <tr>
            <td data-th="id">#125</td>
            <td data-th="Client/Company">
              <FontAwesomeIcon icon={faUserCircle} />
              <span>Peter Jakc</span>
            </td>
            <td data-th="Subject">PC freezed</td>
            <td data-th="Status">
              <FontAwesomeIcon icon={faHand} />
              <span>On hold</span>
            </td>
            <td data-th="Prority">Low</td>
            <td data-th="Deadline">
              <span className={styles.low}>8 hours</span>
            </td>
            <td data-th="Assignee">Adam</td>
            <td data-th="Updated">3 hours ago</td>
          </tr>
          <tr>
            <td data-th="id">#126</td>
            <td data-th="Client/Company">
              <FontAwesomeIcon icon={faUserCircle} />
              <span>Anna Michl </span>
            </td>
            <td data-th="Subject">Reset password issue</td>
            <td data-th="Status">
              <FontAwesomeIcon icon={faCalendarDays} />
              <span>Open </span>
            </td>
            <td data-th="Prority">Normal</td>
            <td data-th="Deadline">
              <span className={styles.normal}>2 hours</span>
            </td>
            <td data-th="Assignee">Garbas</td>
            <td data-th="Updated">30 Mintes ago</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default TicketsList;
