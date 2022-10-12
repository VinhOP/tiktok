import Home from "../pages/Home";
import Following from "../pages/Following";
import Upload from "../pages/Upload";
import Search from "../pages/Search";
import Profile from "../pages/Profile";
import { DefaultLayout, HeaderOnly } from "../components/Layout";
import RoutesConfig from "../config/routes";

const publicRoutes = [
  {
    path: RoutesConfig.home,
    component: Home,
    layout: DefaultLayout,
  },
  {
    path: RoutesConfig.following,
    component: Following,
    layout: DefaultLayout,
  },
  {
    path: RoutesConfig.upload,
    component: Upload,
    layout: HeaderOnly,
  },
  {
    path: RoutesConfig.search,
    component: Search,
    layout: null,
  },
  {
    path: RoutesConfig.profile,
    component: Profile,
    layout: DefaultLayout,
  },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
