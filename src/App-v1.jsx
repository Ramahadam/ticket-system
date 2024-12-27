import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';

import AppLayout from './ui/AppLayout';
import Dashboard from '../src/pages/Dashboard';
import PageNotFound from './pages/PageNotFound';
import Login from './pages/Login';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { Toaster } from 'react-hot-toast';
import NewIncident from './features/incidents/NewIncident';
import Incidents from './pages/Incidents';
import ServiceRequests from './pages/ServiceReqeusts';
import ChangeRequests from './pages/ChangeRequests';
import Users from './pages/Users';
import Settings from './pages/Settings';
import Incident from './features/incidents/Incident';

import { FilterProvider } from './Context/FilterContext';
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
              <Route path="incidents">
                <Route index element={<Incidents />} />
                <Route path="incidents/:id" element={<Incident />} />
                <Route path="newIncident" element={<NewIncident />} />
              </Route>
              <Route path="services" element={<ServiceRequests />} />
              <Route path="changes" element={<ChangeRequests />} />
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
