import axios from "axios";
import app from "../axios/axios";
export const loginApi = async (url, data) => {


    try {
        const response = await axios.post(`http://localhost:8080${url}`, data, {
            headers: {
                "Content-Type": "application/json"
            }
        });
        return response

    }
    catch (error) {

        return error
    }


}

export const logoutApi = async () => {
    try {
        const response = await app.post("/user/logout",  {
            token: JSON.parse(localStorage.getItem("token"))? JSON.parse(localStorage.getItem("token")):""
        });
        return response

    }
    catch (error) {

        return error
    } 
  }

