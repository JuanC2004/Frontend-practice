import { Flexbox } from "../pages/Flexbox/Flexbox";
import { Contact } from "../pages/Contact/Contact";
import { Products } from "../pages/Products/Products";
import { Home } from "../pages/Home/Home";

const GeneralRoutes = [
    { path: "/", component: Home},
    { path: "/flexbox", component: Flexbox},
    { path: "/contact", component: Contact},
    { path: "/products", component: Products}
]

const allRoutes = [...GeneralRoutes];
export default allRoutes;
