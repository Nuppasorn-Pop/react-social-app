import { createBrowserRouter, RouterProvider } from "react-router-dom";

// createBrowserRouter : FN(Array<RouterObject>)
// RouterProvider : Component
const router = createBrowserRouter([
  {
    path: "/",
    element: <h1>Home</h1>,
  },
  {
    path: "/login",
    element: <h1>Login</h1>,
  },
  {
    path: "/profile",
    element: <h1>Profile</h1>,
  },
  {
    path: "*", // * นอกเหนือจาก path ใน array
    element: <h1>404 Not Found</h1>,
  },
]);
function Router() {
  return <RouterProvider router={router} />;
}

export default Router;
