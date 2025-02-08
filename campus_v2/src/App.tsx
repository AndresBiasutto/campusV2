import React, { useEffect } from "react";
import {
  Route,
  Routes,
  useLocation,
  useNavigate,
} from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch } from "./redux/store";
import { loadUserFromStorage } from "./redux/actions/authActions";
import usePreserveRoute from "./hooks/UsePreserveRoute";
import NavBar from "./components/templates/NavBar";
import PrivateRoute from "./layouts/PrivateRoute";
import Dashboard from "./views/protectedViews/Dashboard";
import { Login, Landing, Register, Missing } from "./views/publicViews/_index";
import LandingFooter from "./components/templates/LandingFooter";
import Unauthorized from "./views/publicViews/Unauthorized";
import Sidebar from "./components/templates/Sidebar";
import { RootState } from "./redux/reducers";
import ProfileSettings from "./views/protectedViews/ProfileSettings";
import Teach from "./views/protectedViews/Teach";
import CreateCourse from "./views/protectedViews/CreateCourse";
// import { Cloudinary } from "@cloudinary/url-gen";
import CreateCourseForm from "./components/templates/CreateCourseForm";
import CreateCourseData from "./components/templates/CreateCourseData";

const App: React.FC = () => {
  // const cld = new Cloudinary({
  //   cloud: {
  //     cloudName: 'demo'
  //   }
  // });
  const dispatch: AppDispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const { isAuthenticated } = useSelector((state: RootState) => state.auth);

  usePreserveRoute();

  useEffect(() => {
    const loadUser = async () => {
      await dispatch(loadUserFromStorage());
      const lastVisitedPath = window?.localStorage?.getItem("lastVisitedPath");
      if (lastVisitedPath && lastVisitedPath !== "/login") {
        navigate(lastVisitedPath, { replace: true });
      }
    };

    loadUser();
  }, [dispatch, navigate]);

  return (
    <div className="h-full min-h-screen transition bg-light-background dark:bg-dark-background flex flex-col justify-start items-center">
      {isAuthenticated &&
      location.pathname !== "/" &&
      location.pathname !== "/login" ? (
        <Sidebar />
      ) : (
        <NavBar />
      )}

      <Routes>
        {/* public routes */}
        <Route path="/" element={<Landing />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/*" element={<Missing />} />
        <Route path="/unauthorized" element={<Unauthorized />} />

        {/* protected routes */}
        <Route
          path={`/dashboard`}
          element={
            <PrivateRoute roles={["teacher", "student"]}>
              <Dashboard />
            </PrivateRoute>
          }
        />
        <Route
          path={`/profile`}
          element={
            <PrivateRoute roles={["teacher", "student"]}>
              <ProfileSettings />
            </PrivateRoute>
          }
        />
        <Route
          path="/teach"
          element={
            <PrivateRoute roles={["teacher", "student"]}>
              <Teach />
            </PrivateRoute>
          }
        />
        <Route
          path="/teach/createcourse"
          element={
            <PrivateRoute roles={["teacher", "student"]}>
              <CreateCourse />
            </PrivateRoute>
          }
        >
          <Route
            path="/teach/createcourse"
            element={
              <PrivateRoute roles={["teacher", "student"]}>
                <CreateCourseForm />
              </PrivateRoute>
            }
          />
          <Route
            path="/teach/createcourse/addmodulesandchapters"
            element={
              <PrivateRoute roles={["teacher", "student"]}>
                <CreateCourseData />
              </PrivateRoute>
            }
          />
        </Route>
      </Routes>

      <LandingFooter />
    </div>
  );
};

export default App;
