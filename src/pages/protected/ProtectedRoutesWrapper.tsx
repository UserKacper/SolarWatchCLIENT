import { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { isLocalStorageTokenExisting } from "../../stores/auth-store";

const ProtectedRoutesWrapper = () => {
  //TODO if user not logged in then redirect to login
  const navigate = useNavigate()
  const isToken = isLocalStorageTokenExisting()

  useEffect(() => {
    if (!isToken) navigate('/login')
  }, [isToken, navigate])

  return <><Outlet /></>;
};

export default ProtectedRoutesWrapper;
