import "./login.scss";
import { Link, useNavigate } from "react-router-dom";
import { useState, useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import axios from "axios";

const Login = () => {
  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
  });

  const { loading, error, dispatch } = useContext(AuthContext);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setCredentials({ ...credentials, [name]: value });
  };
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch({ type: "LOGIN_START" });
    console.log(credentials);
    try {
      const res = await axios.post(
        "http://localhost:8800/api/auth/login",
        credentials,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      dispatch({ type: "LOGIN_SUCCESS", payload: res.data });
      navigate("/");
    } catch (err) {
      dispatch({ type: "LOGIN_FAILURE", payload: err.response.data });
    }
  };

  return (
    <div className="login">
      <div className="loginContainer">
        <div className="PhoneContainer">
          <img src="/images/phones.png" alt="" />
        </div>
        <div className="formContainer">
          <div className="formContainerTop">
            <img src="/images/instagram-logo.png" alt="" />
            <form onSubmit={handleSubmit}>
              <input
                type="email"
                name="email"
                placeholder="Num.telephone, nom d'utlisateur ou email"
                value={credentials.email}
                onChange={handleChange}
              />
              <input
                type="password"
                name="password"
                placeholder="Mot de passe"
                value={credentials.password}
                onChange={handleChange}
              />

              <button disabled={loading} className="btnlogin" type="submit">
                Se connecter
              </button>
              {error && <span>{error.message}</span>}
            </form>
            <span className="ou">OU</span>
            <div className="connectFb">
              <img src="/images/facebook-icon.png" alt="" />
              <button className="seConnecterFb">
                Se connecter avec facebook
              </button>
            </div>
            <span className="forgetPassword">Mot de passe oublie?</span>
          </div>
          <div className="formMid">
            <p>Vous n'avez pas de compte?</p>
            <Link
              style={{
                color: "inherit",
                textDecoration: "none",
              }}
              to="/register"
              className="inscrire"
            >
              <span>Inscrivez-vous</span>
            </Link>
          </div>
          <div className="downApp">
            <span>Téléchargez l’application.</span>
          </div>
          <div className="imageDown">
            <img src="/images/applestore.png" alt="" />
            <img src="/images/googlestore.png" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
