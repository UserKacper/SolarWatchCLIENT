import { useNavigate } from "react-router-dom";
import { LoginForm } from "../../features/login-form/LoginForm";
import { isLocalStorageTokenExisting } from "../../stores/auth-store";
import { useEffect } from "react";

const Login = () => {
  const navigate = useNavigate()
  const token = isLocalStorageTokenExisting()
  useEffect(() => {
    if (token) navigate("/")
  }, [token, navigate])
  return <LoginForm />;
};

export default Login;
