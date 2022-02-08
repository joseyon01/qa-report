import { Fragment } from 'react'
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

import {Login} from './components/auth/Login';
import { Register } from './components/auth/Register';
/* import { Header } from './components/layout/header/Header';
import { Aside } from './components/layout/aside/Aside'; */
import { Dashboard } from './components/layout/dashboard/Dashboard';
import { Report } from './components/pages/report/Report';

function App() {

  return (
    <Fragment>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />}></Route>
          <Route path="/register" element={<Register/>}></Route>
{/*           <Route path="/cabecera" element={<Header />}></Route>
          <Route path="/lateral" element={<Aside />}></Route> */}
          <Route path="/dash" element={<Dashboard />}></Route>
          <Route path="/report" element={<Report />}></Route>
        </Routes>
      </BrowserRouter>
    </Fragment>
  );
}

export default App
