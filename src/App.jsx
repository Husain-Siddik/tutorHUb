import {
  createBrowserRouter,
  RouterProvider,
} from "react-router";

import PublicLayout from "./layouts/PublicLayout";
import StudentLayout from "./layouts/StudentLayout";
import TutorLayout from "./layouts/TutorLayout";
import AdminLayout from "./layouts/AdminLayout";

import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Login from "./pages/Login";

import StudentDashboard from "./pages/student/StudentDashboard";
import TutorDashboard from "./pages/tutor/TutorDashboard";
import AdminDashboard from "./pages/admin/AdminDashboard";

const router = createBrowserRouter([
  {
    path: "/",
    element: <PublicLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
      {
        path: "login",
        element: <Login />,
      },
    ],
  },

  {
    path: "/student",
    element: <StudentLayout />,
    children: [
      {
        path: "dashboard",
        element: <StudentDashboard />,
      },
    ],
  },

  {
    path: "/tutor",
    element: <TutorLayout />,
    children: [
      {
        path: "dashboard",
        element: <TutorDashboard />,
      },
    ],
  },

  {
    path: "/admin",
    element: <AdminLayout />,
    children: [
      {
        path: "dashboard",
        element: <AdminDashboard />,
      },
    ],
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}