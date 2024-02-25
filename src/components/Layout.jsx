import { Outlet, Link, useNavigate } from "react-router-dom";
import Logo from "../images/logo.png";
import { useState, useEffect } from "react";
import axios from "axios";

const Layout = () => {
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userName, setUserName] = useState("");
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  useEffect(() => {
    const token = localStorage.getItem("token");
    const name = localStorage.getItem("name");
    if (token) {
      setIsLoggedIn(true);
      setUserName(name);
    }
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(process.env.REACT_APP_LOGIN, formData);
      const { token, userId, name, role, phone, mail } = response.data;
      if (response.status === 200) {
        localStorage.setItem("token", token);
        localStorage.setItem("userId", userId);
        localStorage.setItem("name", name);
        localStorage.setItem("role", role);
        localStorage.setItem("phone", phone);
        localStorage.setItem("email", mail);
        setIsLoggedIn(true);
        setUserName(name);
        setShowLoginModal(false);
        navigate("/");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleLogout = () => {
    localStorage.clear();
    setIsLoggedIn(false);
    navigate("/");
  };

  const toggleLoginModal = () => {
    setShowLoginModal(!showLoginModal);
  };

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            <img src={Logo} alt="logo" style={{ maxHeight: "50px" }} />
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/aboutus">
                  About Us
                </Link>
              <li className="nav-item dropdown">
                <Link
                  className="nav-link dropdown-toggle"
                  to="#"
                  id="navbarDropdownMenuLink"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Interesting Places
                </Link>
                <ul
                  className="dropdown-menu"
                  aria-labelledby="navbarDropdownMenuLink"
                >
                  <li>
                    <Link className="dropdown-item" to="/alexandria">
                      Alexandria
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/cairo">
                      Cairo
                    </Link>
                  </li>
                </ul>
              </li>
              {isLoggedIn && (
                <>
                  <li className="nav-item dropdown">
                    <Link
                      className="nav-link dropdown-toggle"
                      to="#"
                      id="navbarDropdownMenuLink2"
                      role="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      Book A Ride
                    </Link>
                    <ul
                      className="dropdown-menu"
                      aria-labelledby="navbarDropdownMenuLink2"
                    >
                      <li>
                        <Link className="dropdown-item" to="/bookaride">
                          Book A Ride
                        </Link>
                      </li>
                      <li>
                        <Link className="dropdown-item" to="/sightseeing">
                          Sightseeing
                        </Link>
                      </li>
                      <li>
                        <Link className="dropdown-item" to="/fareinfo">
                          Understand Our Rates
                        </Link>
                      </li>
                    </ul>
                  </li>
                </>
              )}
              {!isLoggedIn && (
                <>
                  <li className="nav-item dropdown">
                    <Link
                      className="nav-link dropdown-toggle"
                      to="#"
                      id="navbarDropdownMenuLink3"
                      role="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      Do Business With Kemet
                    </Link>
                    <ul
                      className="dropdown-menu"
                      aria-labelledby="navbarDropdownMenuLink3"
                    >
                      <li>
                        <Link className="dropdown-item" to="/drivers">
                          Become A Driver
                        </Link>
                      </li>
                      <li>
                        <Link className="dropdown-item" to="/becomeapartner">
                          Become A Partner
                        </Link>
                      </li>
                    </ul>
                  </li>
                </>
              )}
              {isLoggedIn && (
                <>
                  <li>
                    <Link className="nav-link" to="/mytrip">
                      My Trip
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/contactus">
                      Contact Us
                    </Link>
                  </li>
                </>
              )}

              {!isLoggedIn && (
                <>
                  <li className="nav-item">
                    <Link className="nav-link" to="/signup">
                      Signup
                    </Link>
                  </li>
                </>
              )}
            </ul>
          </div>
          <div className="d-flex">
            {!isLoggedIn && (
              <button
                className="btn btn-outline-success"
                type="button"
                onClick={toggleLoginModal}
              >
                Login
              </button>
            )}
            {isLoggedIn && (
              <>
                <span className="navbar-text me-3">Welcome, {userName}</span>
                <button
                  className="btn btn-outline-danger"
                  type="button"
                  onClick={handleLogout}
                >
                  Logout
                </button>
              </>
            )}
          </div>
        </div>
      </nav>

      {/* Login Modal */}
      {showLoginModal && (
        <div
          className="modal fade show"
          style={{ display: "block" }}
          tabIndex="-1"
          role="dialog"
          aria-labelledby="loginModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="loginModalLabel">
                  Login
                </h5>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                  onClick={() => setShowLoginModal(false)}
                ></button>
              </div>
              <div className="modal-body">
                <form onSubmit={handleSubmit}>
                  <input
                    type="email"
                    className="form-control mb-2"
                    placeholder="Email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                  />
                  <input
                    type="password"
                    className="form-control mb-2"
                    placeholder="Password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                  />
                  <button className="btn btn-primary">Login</button>
                  <p className="mt-2">
                    Don't have an account!?{" "}
                    <Link to="/signup" onClick={() => setShowLoginModal(false)}>
                      Register
                    </Link>
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
      )}

      <Outlet />
    </>
  );
};

export default Layout;
