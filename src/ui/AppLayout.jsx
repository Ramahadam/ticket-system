import { Outlet } from 'react-router-dom';
import Sidebar from './Sidebar';
import AppHeader from './AppHeader';
// import PageHeader from "./PageHeader";

function AppLayout() {
  return (
    <div className="bg-[#FAF8FF] min-h-screen  mx-auto grid grid-cols-[24rem_1fr] relative">
      <Sidebar />
      <main>
        <AppHeader />
        <Outlet />
      </main>
    </div>
  );
}

export default AppLayout;
