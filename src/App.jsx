import { Fragment } from 'react'
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

import {Login} from './components/auth/Login';
import { Register } from './components/auth/Register';
import { User } from './components/pages/user/User';
import { Dashboard } from './components/layout/dashboard/Dashboard';
import { Report } from './components/pages/report/Report';

function App() {

  return (
    <Fragment>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Dashboard />}>
            {/* <Route index element={<Login />}></Route> */}
            <Route path="register" element={<Register/>}></Route>
            <Route path="user" element={<User />}></Route> 
            <Route path="report" element={<Report />}></Route>
            {/* <Route path="*" element={<Navigation replace to="/" />} />  */}
          </Route>
          <Route path="/login" element={<Login />}></Route>

        </Routes>
      </BrowserRouter>
    </Fragment>
  );
}

export default App
