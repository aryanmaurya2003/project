import app from "../axios/axios";


export const getAllUsers =async (data) => {
    try {
        console.log("API Request Data:", data);
        const response = await app.get(data);
        console.log("API Response:", response);
        return response.data;
    } catch (error) {
        return error
    }
  
};

export const createUser=async (data) => {
    try {
        console.log("API Request Data:", data);
        const response = await app.post('/user', data);
        console.log("API Response:", response);
        return response;
    } catch (error) {
        return error
    }
  
}
