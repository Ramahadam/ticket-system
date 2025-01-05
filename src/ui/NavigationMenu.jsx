import {
  faBug,
  faChartLine,
  faGear,
  faTruckArrowRight,
  faUpRightAndDownLeftFromCenter,
  faUsers,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { NavLink } from 'react-router-dom';

export default function NavigationMenu() {
  return (
    <nav className="navbar-custom mt-10 p-4 bg-white rounded-md shadow-sm">
      <ul className="list-none flex flex-col gap-6">
        <li className="font-normal cursor-pointer group relative w-full flex justify-between items-center">
          <NavLink
            to="/dashboard"
            className="text-gray-700 w-full p-4 rounded-md "
          >
            <FontAwesomeIcon icon={faChartLine} />
            <span className="ml-4 text-2xl">Dashboard</span>
          </NavLink>
        </li>
        <li className="font-normal cursor-pointer group relative w-full flex justify-between items-center">
          <NavLink
            to="/incidents"
            className="text-gray-700 w-full p-4 rounded-md "
          >
            <FontAwesomeIcon icon={faBug} />
            <span className="ml-4 text-2xl">Incidents</span>
          </NavLink>
        </li>
        <li className="font-normal cursor-pointer group relative w-full flex justify-between items-center">
          <NavLink
            to="/requests"
            className="text-gray-700 w-full p-4 rounded-md "
          >
            <FontAwesomeIcon icon={faTruckArrowRight} />
            <span className="ml-4 text-2xl">Service requests</span>
          </NavLink>
        </li>
        <li className="font-normal cursor-pointer group relative w-full flex justify-between items-center">
          <NavLink
            to="/change"
            className="text-gray-700 w-full p-4 rounded-md "
          >
            <FontAwesomeIcon icon={faUpRightAndDownLeftFromCenter} />
            <span className="ml-4 text-2xl">Change requests</span>
          </NavLink>
        </li>
        <li className="font-normal cursor-pointer group relative w-full flex justify-between items-center">
          <NavLink to="/users" className="text-gray-700 w-full p-4 rounded-md ">
            <FontAwesomeIcon icon={faUsers} />
            <span className="ml-4 text-2xl">Users</span>
          </NavLink>
        </li>
        <li className="font-normal cursor-pointer group relative w-full flex justify-between items-center">
          <NavLink
            to="/settings"
            className="text-gray-700 w-full p-4 rounded-md "
          >
            <FontAwesomeIcon icon={faGear} />
            <span className="ml-4 text-2xl">Settings</span>
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}
