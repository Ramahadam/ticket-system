import { Link } from 'react-router-dom';
// import styles from './Logo.module.css';

function Logo() {
  return (
    <Link to="/" className="ml-[-8px] p-0">
      <img src="/logo.png" alt="Ticket system logo" />
    </Link>
  );
}

export default Logo;
