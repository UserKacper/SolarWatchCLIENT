import axios from "axios";
import { TUserLogin } from "../../data/data-types-d";
import { saveDataToLocalStorage } from "../../stores/auth-store";

export const handleLoginUser = async (userLoginData: TUserLogin, setLoggedInUser: (token: string, email: string, userName: string) => void) => {
    try {
        const AuthUrl = process.env.REACT_APP_BASE_URL + "/Auth/Login";
        const response = (await axios.post(AuthUrl, userLoginData))

        setLoggedInUser(response.data.token, response.data.email, response.data.userName);
        saveDataToLocalStorage(response.data.token, response.data.email, response.data.userName)
    } catch (error) {
        throw new Error("Unable to login: " + error);
    }
};
