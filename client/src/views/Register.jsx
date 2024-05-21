import { useState } from "react"
import { serverApi } from "../utils/api";
import Swal from "sweetalert2"
import { Link } from "react-router-dom";

export default function Register() {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    async function handleOnRegister(event) {
        event.preventDefault()
        try {
            let { data } = await serverApi({
                method: 'post',
                url: '/register',
                data: {
                    name,
                    email,
                    password
                }
            });
            Swal.fire({
                title: "Success register",
                text: "Clicked the button!",
                icon: "success"
            });
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
            <h1>Register</h1>
            <form className="w-25 mb-2" onSubmit={(event) => handleOnRegister(event)}>
                <div className="form-group mb-3">
                    <label htmlFor="name">Name :</label>
                    <input
                        type="text"
                        className="form-control"
                        id="name"
                        placeholder="Enter name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                </div>
                <div className="form-group mb-3">
                    <label htmlFor="email">Email :</label>
                    <input
                        type="email"
                        className="form-control"
                        id="email"
                        placeholder="Enter email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                <div className="form-group mb-4">
                    <label htmlFor="password">Password :</label>
                    <input
                        type="password"
                        className="form-control"
                        id="password"
                        placeholder="Enter password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                <button type="submit" className="btn btn-primary w-100">
                    Register
                </button>
            </form>
            <p>
                Already have an account ? Click
                <Link to={""} className="m-1">here</Link>
                to login
            </p>
        </div>
    )
}