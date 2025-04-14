import React from "react";
import {
  BrowserRouter,
  Navigate,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";
import Admin_dash from "./Component/Matrimony/Admin/Admin_dash";
import Form_admin from "./Component/Matrimony/Admin/Form_admin";
import Dashboard from "./Component/Matrimony/Dash_Board/Dashboard";
import Detail from "./Component/Matrimony/Dash_Board/Detail";
import Photo from "./Component/Matrimony/Dash_Board/Photo";
import Upgrade from "./Component/Matrimony/Dash_Board/Upgrade";
import Blog from "./Component/Matrimony/F&Q/Blog";
import F_andQ from "./Component/Matrimony/F&Q/F_andQ";
import Home_Page from "./Component/Matrimony/Home_Page/Home_Page";
import Matches from "./Component/Matrimony/NavBar/Matches";
import Prime_Header from "./Component/Matrimony/Prime/Prime_Header";
import { Alert } from "./Component/Matrimony/Profile/Alert";
import Edit from "./Component/Matrimony/Profile/Edit";
import Help from "./Component/Matrimony/Profile/Help";
import Horo from "./Component/Matrimony/Profile/Horo";
import Mobile_Pri from "./Component/Matrimony/Profile/Mobile_Pri";
import Photo_Pri from "./Component/Matrimony/Profile/Photo_Pri";
import Preview from "./Component/Matrimony/Profile/Preview";
import Privacy from "./Component/Matrimony/Profile/Privacy";
import Profile from "./Component/Matrimony/Profile/Profile";
import Safe from "./Component/Matrimony/Profile/Safe";
import Setting from "./Component/Matrimony/Profile/Setting";
import Verify from "./Component/Matrimony/Profile/Verify";
import Result from "./Component/Matrimony/Search/Result";
import Search from "./Component/Matrimony/Search/Search";
import "./index.css";
import Task from "./Component/Matrimony/Anant/Task";

const isAuthenticated = () => {
  const token = localStorage.getItem("token");
  console.log("Token in Local Storage:", token);
  return !!token;
};

const AuthGuard = ({ children }) => {
  const location = useLocation();
  const auth = isAuthenticated();

  console.log("User Authenticated:", auth);

  if (!auth) {
    console.warn("User is not authenticated, redirecting to Home...");
    return <Navigate to="/" state={{ from: location }} replace />;
  }

  return children;
};


const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home_Page />} />
        <Route
          path="/dash"
          element={
            <AuthGuard>
              <Dashboard />
            </AuthGuard>
          }
        />
        <Route
          path="/pro"
          element={
            <AuthGuard>
              <Profile />
            </AuthGuard>
          }
        />
        <Route
          path="/pre"
          element={
            <AuthGuard>
              <Edit />
            </AuthGuard>
          }
        />
        <Route
          path="/ver"
          element={
            <AuthGuard>
              <Verify />
            </AuthGuard>
          }
        />
        <Route
          path="/help"
          element={
            <AuthGuard>
              <Help />
            </AuthGuard>
          }
        />
        <Route
          path="/safe"
          element={
            <AuthGuard>
              <Safe />
            </AuthGuard>
          }
        />
        <Route
          path="/photo"
          element={
            <AuthGuard>
              <Photo_Pri />
            </AuthGuard>
          }
        />
        <Route
          path="/horo"
          element={
            <AuthGuard>
              <Horo />
            </AuthGuard>
          }
        />
        <Route
          path="/mob"
          element={
            <AuthGuard>
              <Mobile_Pri />
            </AuthGuard>
          }
        />
        <Route
          path="/prime"
          element={
            <AuthGuard>
              <Prime_Header />
            </AuthGuard>
          }
        />
        <Route
          path="/set"
          element={
            <AuthGuard>
              <Setting />
            </AuthGuard>
          }
        />
        <Route
          path="/upg"
          element={
            <AuthGuard>
              <Upgrade />
            </AuthGuard>
          }
        />
        <Route
          path="/pho"
          element={
            <AuthGuard>
              <Photo />
            </AuthGuard>
          }
        />
        <Route
          path="/prev"
          element={
            <AuthGuard>
              <Preview />
            </AuthGuard>
          }
        />
        <Route
          path="/det"
          element={
            <AuthGuard>
              <Detail />
            </AuthGuard>
          }
        />
        <Route
          path="/mat"
          element={
            <AuthGuard>
              <Matches />
            </AuthGuard>
          }
        />
        <Route
          path="/privacy"
          element={
            <AuthGuard>
              <Privacy />
            </AuthGuard>
          }
        />
        <Route
          path="/adm"
          element={
            <AuthGuard>
              <Form_admin />
            </AuthGuard>
          }
        />
        <Route
          path="/fq"
          element={
            <AuthGuard>
              <F_andQ />
            </AuthGuard>
          }
        />
        <Route
          path="/blog"
          element={
            <AuthGuard>
              <Blog />
            </AuthGuard>
          }
        />
        <Route
          path="/search"
          element={
            <AuthGuard>
              <Search />
            </AuthGuard>
          }
        />
        <Route
          path="/result"
          element={
            <AuthGuard>
              <Result />
            </AuthGuard>
          }
        />
        <Route
          path="/matches"
          element={<AuthGuard>{/* <All_Matches /> */}</AuthGuard>}
        />
        <Route path="/all" element={<AuthGuard>{/* <All/> */}</AuthGuard>} />
        <Route
          path="/newly"
          element={<AuthGuard>{/* <Newly/> */}</AuthGuard>}
        />

        <Route
          path="/admin-dash"
          element={
            <AuthGuard>
              <Admin_dash />
            </AuthGuard>
          }
        />
        <Route path="/sort" element={<AuthGuard>{/* <Sort/> */}</AuthGuard>} />
        <Route
          path="/alert"
          element={
            <AuthGuard>
              <Alert />
            </AuthGuard>
          }
        />
        <Route
          path="/task"
          element={
            <AuthGuard>
              <Task />
            </AuthGuard>
          }
        />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
