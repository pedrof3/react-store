import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import App from "./App.jsx";
import Products from "./pages/Products.jsx";
import Contact from "./pages/Contact.jsx";
import About from "./pages/About.jsx";

const router = createBrowserRouter([
    { path: "/", Component: App },
    { path: "/about", Component: About },
    { path: "/contact", Component: Contact },
    { path: "/products", Component: Products },
]);

createRoot(document.getElementById("root")).render(
    <StrictMode>
        <RouterProvider router={router} />
    </StrictMode>
);
