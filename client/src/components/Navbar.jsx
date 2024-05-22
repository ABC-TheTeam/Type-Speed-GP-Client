import { Link, useNavigate } from "react-router-dom";
import { ThemeContext } from "../contexts/ThemeContext";
import { useContext } from "react";

export default function Navbar() {
  const { theme, setTheme, currentTheme } = useContext(ThemeContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("access_token");
    navigate("/login");
  };
  return (
    <>
      <nav
        className={`d-flex navbar navbar-expand-lg navbar-light ${theme[currentTheme].bg} bg-gradient`}
      >
        <Link
          className={`navbar-brand px-3 ${theme[currentTheme].text}`}
          to={"/"}
        >
          SpeedTyper
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <Link to="/game"> Game </Link>
        <div
          className="collapse navbar-collapse px-3 justify-content-end"
          id="navbarSupportedContent"
        >
          <ul className="navbar-nav mr-auto">
            <li>
              <button
                className={"btn btn-outline-success"}
                onClick={() =>
                  setTheme(currentTheme === "light" ? "dark" : "light")
                }
              >
                Change theme
              </button>
            </li>
            <li>
              <Link
                className="nav-link text-danger "
                to={"/login"}
                onClick={handleLogout}
              >
                Logout
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}
