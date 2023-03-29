import Layout from "components/ui/Layout";
import { createBrowserRouter } from "react-router-dom";

export default createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      { index: true, element: (<h2>Welcome to MPC app</h2>) },
      { path: 'about', element: (<h2>About MPC app</h2>) },
    ],
  },
])