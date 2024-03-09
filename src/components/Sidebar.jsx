import Logo from "./Logo";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBox,
  faClock,
  faEnvelopeOpenText,
  faUserCircle,
} from "@fortawesome/free-solid-svg-icons";

import styles from "./Sidebar.module.css";

function Sidebar() {
  return (
    <aside className={styles.sidebar}>
      <Logo />
      <Tickets />
      <Members />
    </aside>
  );
}

function Tickets() {
  return (
    <nav className={styles.tickets}>
      <h2>Support</h2>

      <ul>
        <li className="active">
          <div>
            <FontAwesomeIcon icon={faEnvelopeOpenText} />
            <span>Open</span>
          </div>
          <span>12</span>
        </li>
        <li>
          <div>
            <FontAwesomeIcon icon={faClock} />
            <span>Pending</span>
          </div>
          <span>15</span>
        </li>
        <li>
          <div>
            <FontAwesomeIcon icon={faBox} />

            <span>Closed</span>
          </div>
          <span>11</span>
        </li>
      </ul>
    </nav>
  );
}

function Members() {
  return (
    <nav className={styles.members}>
      <h2>Members</h2>
      <ul>
        <li>
          <FontAwesomeIcon icon={faUserCircle} />
          <span>Mirza Kashi</span>
        </li>
        <li>
          <FontAwesomeIcon icon={faUserCircle} />
          <span>Khalid Garbas</span>
        </li>
        <li>
          <FontAwesomeIcon icon={faUserCircle} />
          <span>Gazi Mohamed </span>
        </li>
        <li>
          <FontAwesomeIcon icon={faUserCircle} />
          <span>Mohamed Adam </span>
        </li>
      </ul>
    </nav>
  );
}

export { Sidebar, Tickets, Members };
