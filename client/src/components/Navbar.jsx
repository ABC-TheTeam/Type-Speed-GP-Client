import { Link, useNavigate } from "react-router-dom";
import { ThemeContext } from "../contexts/ThemeContext";
import { useContext } from "react";
import BrandLogo from "../assets/Group-Project-Logo.png"

export default function Navbar() {
  const { theme, setTheme, currentTheme } = useContext(ThemeContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("email");
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
          <img 
            src={BrandLogo} 
            style={{height: "50px", width: "50px"}}
          />
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
        <Link to="/game" className={`nav-link ${theme[currentTheme].text}`} style={{fontWeight: "bold"}}> Game </Link>
        <div
          className="collapse navbar-collapse px-3 justify-content-end"
          id="navbarSupportedContent"
        >
          <ul className="navbar-nav d-flex gap-3 mr-auto">
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
              <button
                className="btn btn-outline-danger"
                onClick={handleLogout}
              >
                Logout
              </button>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}
