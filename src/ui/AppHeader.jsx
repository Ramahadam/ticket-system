import User from '../features/authentication/User';
import Search from './Search';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell, faSun, faUserGear } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

function AppHeader() {
  return (
    <header className="grid grid-cols-3 items-baseline justify-start h-fit p-7 mb-10 border-b-2 border-indigo-50">
      <User />
      <Search />
      <Actions />
    </header>
  );
}

function Actions() {
  return (
    <div className="flex justify-end gap-5 items-center">
      <Link to="users" className="text-2xl">
        <FontAwesomeIcon icon={faUserGear} />
      </Link>
      <Link className="text-2xl">
        <span className="relative">
          <FontAwesomeIcon icon={faBell} />
          <span className="absolute top-0 left-2.5 w-4 h-4 bg-color-orange text-white font-semibold text-xs text-center rounded-full">
            1
          </span>
        </span>
      </Link>

      <Link className="text-2xl">
        <FontAwesomeIcon icon={faSun} />
      </Link>
    </div>
  );
}

export default AppHeader;
