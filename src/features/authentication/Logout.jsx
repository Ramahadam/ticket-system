import { faRightFromBracket } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useLogout } from './useLogout';

export default function Logout() {
  const { logout, isPending } = useLogout();
  return (
    <button title="Logout" onClick={logout} disabled={isPending}>
      <FontAwesomeIcon icon={faRightFromBracket} />
    </button>
  );
}
``;
