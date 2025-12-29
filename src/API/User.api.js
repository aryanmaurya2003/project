import { Api } from "@mui/icons-material";
import app from "../axios/axios";


export const getAllUsers = async (data) => {
    try {
        console.log("API Request Data:", data);
        const response = await app.get(data);
        console.log("API Response:", response);
        return response.data;
    } catch (error) {
        return error
    }

};

export const createUser = async (data) => {
    try {
        console.log("API Request Data:", data);
        const response = await app.post('/user', data);
        console.log("API Response:", response);
        return response;
    } catch (error) {
        return error
    }

}

export const updateUser = async (data) => {
    try {
        console.log("API Request Data:", data);
        const response = await app.put('/user/edit', data);
        console.log("API Response:", response);
        return response;
    } catch (error) {
        console.log("API Error:", error.message);
        return error
    }
}

export const deleteUser = async (id) => {
    try {
        console.log("----------------")
        const userdata = { id: id }
        console.log("the data is this:", userdata);

        const response = await app.delete('/user/delete', {
            data: userdata
        });
        console.log("API Response:", response);
        return response;
    } catch (error) {
        return { error: error }
    }

}


export const AssigendAccounts = async (data) => {
    try {
        const response = await app.post("/account/addUserAccount", data)
        return response
    }
    catch (error) {
        return error
    }

}
export const GetAssigendAccounts = async (id) => {
    try {
        const response = await app.get(`/account/getUserAccount/${id}`)
        return response
    }
    catch (error) {
        return error
    }

}