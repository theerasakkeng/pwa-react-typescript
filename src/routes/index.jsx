import { createBrowserRouter,Navigate } from "react-router-dom";
import Layout from "../layouts/Layout";
import Privilege from "../page/privilege/Privilege";
import Scan from "../page/scan/Scan";
import History from "../page/history/History";
import Profile from "../page/userprofile/Profile";
import EditProfile from "../page/userprofile/editprofile/EditProfile";
import Privacy from "../page/userprofile/privacy/Privacy";
import AddressTracking from "../page/userprofile/address-tracking/AddressTracking";



const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {index: true, element: <Navigate to="privilege"  replace/>},
      {
        path: "/privilege",
        element: (
            <Privilege />
        ),
      },
      {
        path: "/scanpoint",
        element: (
            <Scan />
        ),
      },
      {
        path: "/history",
        element: (
            <History />
        ),
      },
      {
        path: "/profile",
        element: (
            <Profile />
        ),
      },
      {
        path: "/profile/editprofile",
        element: (
            <EditProfile />
        ),
      },
      {
        path: "/profile/privacy",
        element: (
            <Privacy />
        ),
      },
      {
        path: "/profile/address-tracking",
        element: (
            <AddressTracking />
        ),
      },
    ],
  },
]);

export default router;
