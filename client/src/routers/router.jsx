import {
    createBrowserRouter
} from "react-router-dom";
import Register from '../views/Register';
import Login from "../views/Login";
import TestTyping from "../components/TestTyping";

const router = createBrowserRouter([
    {
        path: "/register",
        element: <Register />,
    },
    {
        path: "/login",
        element: <Login />,
    },
    {
        path: "/games",
        element: <TestTyping/>
    }

]);

export default router