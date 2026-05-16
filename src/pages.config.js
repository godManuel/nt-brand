import Home from "./pages/Home";
import Services from "./pages/Services";
import Blog from "./pages/Blog";
import BlogPost from "./pages/BlogPost";
import About from "./pages/AboutUs";
import Products from "./pages/Products";
import Policy from "./pages/Policy";

import __Layout from "./Layout.jsx";

export const PAGES = {
  Blog,
  "BlogPost/:id": BlogPost,
  Home: Home,
  Services: Services,
  About: About,
  Policy: Policy,
  Products: Products,
  // AdminDashboard: AdminDashboard,
  // AdminBookings: AdminBookings,
  // AdminTeam: AdminTeam,
  // AdminServices: AdminServices,
  // AdminProducts: AdminProducts,
  // AdminSettings: AdminSettings,
  // AdminLogin: AdminLogin
};

export const pagesConfig = {
  mainPage: "Home",
  Pages: PAGES,
  Layout: __Layout,
};
