import { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { isLocalStorageTokenExisting } from "../../stores/auth-store";

const ProtectedRoutesWrapper = () => {
  const navigate = useNavigate()
  const isToken = isLocalStorageTokenExisting()

  const logoutUserIfNotToken = async () => {
    if (!isToken) {
      await navigate('/login');
    }
  }

  useEffect(() => {
    const fetchData = async () => {
      await logoutUserIfNotToken();
    };
    fetchData()
  });


  return <Outlet />
};

export default ProtectedRoutesWrapper;
