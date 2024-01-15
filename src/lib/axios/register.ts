import axios from "axios";
import { TUserRegister } from "../../data/data-types-d";

export const handleRegisterUser = async (userLoginData: TUserRegister) => {
    try {
        const AuthUrl = process.env.REACT_APP_BASE_URL + "/Auth/Register";
        const res = await axios.post(AuthUrl, userLoginData);
        if (res.status === 200) {
            return "succesfully registered"
        }
    } catch (error) {
        throw new Error("Unable to Register: " + error);
    }
}; 
