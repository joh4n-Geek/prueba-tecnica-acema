import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import "./Login.css";

const initializeForm = {
  email: "",
  password: ""
};

const Login = () => {
    const [formState, setFormState] = useState(initializeForm);
    const [modalTitle, setModalTitle] = useState("Login");
    const { loginUser, errorMessage } = useContext(AuthContext);
    const { email, password } = formState;

    useEffect(() => {
        setFormState(initializeForm);
    }, [initializeForm]);

    const navigate = useNavigate();

  const onInputChange = ({ target }) => {
    const { name, value } = target;

    setFormState({
      ...formState,
      [name]: value,
    });
  };

  const onLoginUser = (event) => {
    event.preventDefault();

    const successLogin = loginUser(email, password);
    if (successLogin) {
      const lastPath = localStorage.getItem("lastPath") || "/";
      navigate(lastPath, {
        replace: true,
      });
    }
  };

  return (
    <div className="login-form-container">
      <form className="login-form-content">
        <div className="login-form-title">
          <h2>{modalTitle}</h2>
        </div>
        <div className="login-form-body">
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={onInputChange}
            placeholder="User email"
            required
          />
          <input
            type="password"
            id="password"
            name="password"
            value={password}
            onChange={onInputChange}
            placeholder="Password"
            required
          />
          <div className="signup-options">
            <button
              onClick={onLoginUser}
              type="button"
              className="btn-login"
            >Iniciar sesión
            </button>
          </div>
          {!errorMessage ? null : (
            <div className="alert alert-danger" role="alert">
              {errorMessage}
            </div>
          )}
        </div>
      </form>
    </div>
  )
};

export default Login;