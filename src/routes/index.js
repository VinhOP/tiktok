import Home from "../pages/Home";
import Following from "../pages/Following";
import Upload from "../pages/Upload";
import Search from "../pages/Search";
import Profile from "../pages/Profile";
import Foryou from "../pages/Foryou";
import Live from "../pages/Live";
import { DefaultLayout, HeaderOnly } from "../layouts";
import config from "../config";

const publicRoutes = [
  {
    path: config.routes.home,
    component: Home,
    layout: DefaultLayout,
  },
  {
    path: config.routes.foryou,
    component: Home,
    layout: DefaultLayout,
  },
  {
    path: config.routes.following,
    component: Following,
    layout: DefaultLayout,
  },
  {
    path: config.routes.live,
    component: Live,
    layout: DefaultLayout,
  },
  {
    path: config.routes.upload,
    component: Upload,
    layout: HeaderOnly,
  },
  {
    path: config.routes.search,
    component: Search,
    layout: null,
  },
  {
    path: config.routes.profile,
    component: Profile,
    layout: DefaultLayout,
  },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
