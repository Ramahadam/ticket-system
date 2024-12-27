import { faUserCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from './Members.module.css';
export function Members() {
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
