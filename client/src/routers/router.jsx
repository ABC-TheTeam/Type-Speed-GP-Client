import {
    createBrowserRouter
} from "react-router-dom";
import Register from '../views/Register';
import Login from "../views/Login";
import TestTyping from "../components/TestTyping";
import Navbar from "../components/Navbar";
import Game from "../views/Game";

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
        path: "/game",
        element: 
        <>
        <Navbar/>
        <Game/>,
        </>
    }

]);

export default router