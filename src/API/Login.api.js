import axios from "axios";
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

