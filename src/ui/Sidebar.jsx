// import styles from './Sidebar.module.css';
// import Logo from '../ui/Logo';

// import NavigationMenu from './NavigationMenu';

import Logo from '../ui/Logo';
import NavigationMenu from './NavigationMenu';

function Sidebar() {
  return (
    <aside className="flex flex-col gap-8 h-80 w-96 p-4 ">
      <Logo />
      <NavigationMenu />
    </aside>
  );
}

export default Sidebar;
