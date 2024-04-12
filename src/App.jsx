import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Login from "./pages/Login";

import TicketList from "./components/TicketsList";
import TicketCreation from "./components/TicketCreation";
import PageNotFound from "./pages/PageNotFound";
import TicketDetails from "./components/TicketDetails";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="homepage" element={<Homepage />}>
          <Route index element={<TicketList />}></Route>
          <Route path="newticket" element={<TicketCreation />} />
          <Route path=":id" element={<TicketDetails />} />
        </Route>
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
