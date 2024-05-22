import Swal from "sweetalert2"
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { registerUser, setUser } from "../features/register/registerSlice";
import BrandLogo from "../assets/Group-Project-Logo.png"
import "../styles/LoginRegisterPage.css"

export default function Register() {
    const navigate = useNavigate()
    const user = useSelector((state) => state.register.user)
    const dispatch = useDispatch()
    
    const handleChange = (e) => {
        const { name, value } = e.target;
        dispatch(setUser({[name] : value}))
    };

    async function handleOnRegister(event) {
        event.preventDefault()
        try {
            await dispatch(registerUser(user))
            Swal.fire({
                title: "Success register",
                text: "Clicked the button!",
                icon: "success"
            });
            navigate("/login")
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
            <h1>Register</h1>
            <form className="w-25 mb-2" onSubmit={(event) => handleOnRegister(event)}>
                <div className="form-group mb-3">
                    <label htmlFor="name">Name :</label>
                    <input
                        type="text"
                        className="form-control"
                        id="name"
                        placeholder="Enter name"
                        name="name"
                        value={user.name}
                        onChange={handleChange}
                    />
                </div>
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
                <button type="submit" className="btn btn-primary w-100">
                    Register
                </button>
            </form>
            <p>
                Already have an account ? Click
                <Link to={"/login"} className="m-1">here</Link>
                to login
            </p>
        </div>
    )
}