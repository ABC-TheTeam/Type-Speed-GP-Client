import {
    createBrowserRouter,
    redirect
} from "react-router-dom";
import Register from '../views/Register';
import Login from "../views/Login";
import HomePage from "../views/HomePage";
import MainLayout from "../views/MainLayout";
import Game from "../views/Game";

const router = createBrowserRouter([
    {
        element: <MainLayout />,
        loader: () => {
            if (!localStorage.access_token) {
                return redirect("/login");
            } 
            return null
        },
        children: [
            {
                path: "/",
                element: <HomePage />
            },
            {
                path: "/game",
                element: <Game />
            }
        ]
    },
    {
        path: "/register",
        element: <Register />,
    },
    {
        path: "/login",
        element: <Login />,
        loader: () => {
            if (localStorage.access_token) {
                return redirect("/");
            } 
            return null
        }
    },
]);

export default router