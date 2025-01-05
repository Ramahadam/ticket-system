import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { Toaster } from 'react-hot-toast';

import AppLayout from './ui/AppLayout';
import Dashboard from '../src/pages/Dashboard';
import PageNotFound from './pages/PageNotFound';
import Login from './pages/Login';

import NewIncident from './features/incidents/NewIncident';
import Incidents from './pages/Incidents';
import Incident from './features/incidents/Incident';

import ServiceRequestDetail from './features/serviceRequests/ServiceRequestDetail';
import ServiceRequestNew from './features/serviceRequests/ServiceRequestNew';
import ServiceRequests from './pages/ServiceRequests';

import ChangeRequests from './pages/ChangeRequests';
import ChangeRequest from './features/changeRequests/ChangeRequest';
import ChangeRequestNew from './features/changeRequests/ChangeRequestNew';

import Users from './pages/Users';
import Settings from './pages/Settings';

import { FilterProvider } from './Context/FilterContext';
import TicketLayout from './ui/TicketLayout';
// Create a client
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 0,
    },
  },
});

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools initialIsOpen={false} />
      <FilterProvider>
        <BrowserRouter>
          <Routes>
            <Route element={<AppLayout />}>
              <Route index element={<Navigate replace to="dashboard" />} />
              <Route path="dashboard" element={<Dashboard />} />

              <Route path="incidents" element={<TicketLayout />}>
                <Route index element={<Incidents />} />
                <Route path=":id" element={<Incident />} />
                <Route path="new" element={<NewIncident />} />
              </Route>

              <Route path="requests" element={<TicketLayout />}>
                <Route index element={<ServiceRequests />} />
                <Route path=":id" element={<ServiceRequestDetail />} />
                <Route path="new" element={<ServiceRequestNew />} />
              </Route>
              <Route path="change" element={<TicketLayout />}>
                <Route index element={<ChangeRequests />} />
                <Route path=":id" element={<ChangeRequest />} />
                <Route path="new" element={<ChangeRequestNew />} />
              </Route>
              <Route path="users" element={<Users />} />
              <Route path="settings" element={<Settings />} />
            </Route>
            <Route path="login" element={<Login />} />
            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </BrowserRouter>
      </FilterProvider>
      <Toaster
        position="top-center"
        reverseOrder={false}
        gutter={8}
        containerClassName=""
        containerStyle={{}}
        toastOptions={{
          // Define default options
          className: '',
          duration: 8000,
          style: {
            color: '#062b4b',
            fontWeight: '500',
          },

          // Default options for specific types
          success: {
            duration: 3000,
            theme: {
              primary: 'green',
              secondary: 'black',
            },
          },
        }}
      />
    </QueryClientProvider>
  );
}

export default App;
