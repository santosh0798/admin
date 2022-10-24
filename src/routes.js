// import
import Dashboard from "views/Dashboard/Dashboard";
import Tables from "views/Dashboard/Tables";
import CompanyTables from "views/Dashboard/Tables/CompanyTables";
import Billing from "views/Dashboard/Billing";
import AddJobPost from "views/Dashboard/Post/addJobPost"
import ViewJobPost from "views/Dashboard/Post/viewJobPost"
import SignIn from "views/Auth/SignIn.js";
import SignUp from "views/Auth/SignUp.js";

import {
  HomeIcon,
  StatsIcon,
  CreditIcon,
  DocumentIcon,
} from "components/Icons/Icons";

var dashRoutes = [
  {
    path: "/dashboard",
    name: "Dashboard",
    icon: <HomeIcon color="inherit" />,
    component: Dashboard,
    layout: "/admin",
  },
  {
    path: "/candidate-table",
    name: "Candidate Table",
    icon: <StatsIcon color="inherit" />,
    component: Tables,
    layout: "/admin",
  },
  {
    path: "/company-table",
    name: "Companies Table",
    icon: <StatsIcon color="inherit" />,
    component: CompanyTables,
    layout: "/admin",
  },
  {
    path: "/billing",
    name: "Transaction",
    icon: <CreditIcon color="inherit" />,
    component: Billing,
    layout: "/admin",
  },
  {
        path: "/signin",
        name: "Sign In",
        icon: <DocumentIcon color="inherit" />,
        component: SignIn,
        layout: "/auth",
  },
  {
    path: "/signup",
    name: "Sign Up",
    icon: <DocumentIcon color="inherit" />,
    component: SignUp,
    layout: "/auth",
  },
  {
    path: "/add-job-post",
    name: "Add Job Post",
    icon: <DocumentIcon color="inherit" />,
    component: AddJobPost,
    layout: "/admin",
  },
  {
    path: "/view-job-post",
    name: "View Job Post",
    icon: <DocumentIcon color="inherit" />,
    component: ViewJobPost,
    layout: "/admin",
  }

];
export default dashRoutes;
