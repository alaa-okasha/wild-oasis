import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import GlobalStyles from "../src/styles/GlobalStyles";
import Dashboard from "../src/pages/Dashboard";
import Account from "../src/pages/Account";
import Bookings from "../src/pages/Bookings";
import Cabins from "../src/pages/Cabins";
import Login from "../src/pages/Login";
import Settings from "../src/pages/Settings";
import Users from "../src/pages/Users";
import PageNotFound from "../src/pages/PageNotFound";
import AppLayout from "./ui/AppLayout";
function App() {
  return (
    <>
      <GlobalStyles />
      <BrowserRouter>
        <Routes>
          <Route element={<AppLayout />}>
            <Route index element={<Navigate replace to="dashboard" />} />
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="account" element={<Account />} />
            <Route path="bookings" element={<Bookings />} />
            <Route path="cabins" element={<Cabins />} />
            <Route path="settings" element={<Settings />} />
            <Route path="users" element={<Users />} />
          </Route>
          <Route path="login" element={<Login />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
