import Swal from "sweetalert2"
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { loginUser, setUser } from "../features/login/loginSlice";
import BrandLogo from "../assets/Group-Project-Logo.png"
import "../styles/LoginRegisterPage.css"

export default function Login() {
    const navigate = useNavigate();
    const user = useSelector((state) => state.login.user)
    const dispatch = useDispatch()

    const handleChange = (e) => {
        const { name, value } = e.target;
        dispatch(setUser({ [name]: value }))
    };

    async function handleOnLogin(event) {
        event.preventDefault()
        try {
            await dispatch(loginUser(user))
            Swal.fire({
                title: "Success login",
                text: "Clicked the button!",
                icon: "success"
            });
        navigate('/')
        } catch (error) {
            console.error(error.response?.data.message)
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: error.response.data.message
            });

        }
    }

    return (
        <div className="container-fluid d-flex flex-column justify-content-center justify-content-center align-items-center" style={{ height: "100vh" }}>
            <img className="brand-logo" src={BrandLogo}/>
            <h1>Login</h1>
            <form className="w-25" onSubmit={(event) => handleOnLogin(event)}>
                <div className="form-group mb-3">
                    <label htmlFor="email">Email :</label>
                    <input
                        type="email"
                        className="form-control"
                        id="email"
                        placeholder="Enter email"
                        name="email"
                        value={user.email}
                        onChange={handleChange}
                    />
                </div>
                <div className="form-group mb-4">
                    <label htmlFor="password">Password :</label>
                    <input
                        type="password"
                        className="form-control"
                        id="password"
                        placeholder="Enter password"
                        name="password"
                        value={user.password}
                        onChange={handleChange}
                    />
                </div>
                <button type="submit" className="btn btn-primary w-100 mb-2">
                    Login
                </button>
            </form>
            <p>
                Don't have any account ? Click
                <Link to={"/register"} className="m-1">here</Link>
                to register
            </p>
        </div>
    )
}