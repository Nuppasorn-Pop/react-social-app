import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "../pages/HomePage";
import LoginPage from "../pages/LoginPage";
import ProfilePage from "../pages/ProfilePage";
import NotFoundPage from "../pages/NotFoundPage";
// createBrowserRouter : FN(Array<RouterObject>)
// RouterProvider : Component
const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <h1>
        <HomePage />
      </h1>
    ),
  },
  {
    path: "/login",
    element: (
      <h1>
        <LoginPage />
      </h1>
    ),
  },
  {
    path: "/profile",
    element: (
      <h1>
        <ProfilePage />
      </h1>
    ),
  },
  {
    path: "*", // * นอกเหนือจาก path ใน array
    element: (
      <h1>
        <NotFoundPage />
      </h1>
    ),
  },
]);
function Router() {
  return <RouterProvider router={router} />;
}

export default Router;
