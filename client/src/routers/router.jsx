import {
    createBrowserRouter,
    redirect
} from "react-router-dom";
import Register from '../views/Register';
import Login from "../views/Login";
import TestTyping from "../components/TestTyping";
import HomePage from "../views/HomePage";
import MainLayout from "../views/MainLayout";

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
    {
        path: "/games",
        element: <TestTyping/>
    }
]);

export default router