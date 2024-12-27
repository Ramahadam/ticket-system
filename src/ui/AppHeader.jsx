import User from '../features/authentication/User';
import Search from './Search';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell, faSun, faUserGear } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

function AppHeader() {
  return (
    <header className="grid grid-cols-3 items-baseline justify-start h-fit p-7 border-b-2 border-bg-gray">
      <User />
      <Search />
      <Actions />
    </header>
  );
}

function Actions() {
  return (
    <div className="justify-self-end flex gap-8 text-2xl">
      <Link to="users" className="text-xl">
        <FontAwesomeIcon icon={faUserGear} />
      </Link>
      <span className="relative">
        <FontAwesomeIcon icon={faBell} className="text-xl" />
        <span className="absolute top-0 left-2.5 w-4 h-4 bg-color-orange text-white font-semibold text-xs text-center rounded-full">
          1
        </span>
      </span>
      <span className="text-xl">
        <FontAwesomeIcon icon={faSun} />
      </span>
    </div>
  );
}

export default AppHeader;
