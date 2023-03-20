import useId from "../hooks/useid";
import Homepage from "../pages/Home";
import Properties from "../pages/Properties";
export const navbar = [
  {
    id: useId,
    element: <Homepage />,
    title: "Home",
    path: "/home",
    private: false,
    hidden: false,
  },
  {
    id: useId,
    element: <Properties />,
    title: "Properties",
    path: "/properties",
    private: false,
    hidden: false,
  },
  {
    id: useId,
    element: <h1>Login</h1>,
    title: "Login",
    path: "/login",
    private: false,
    hidden: true,
  },
  {
    id: useId,
    element: <h1>Sign up</h1>,
    title: "Signup",
    path: "/singup",
    private: false,
    hidden: true,
  },
];
