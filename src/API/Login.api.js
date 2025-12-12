import app from "../axios/axios";

export const loginApi = async (url, data) => {


    try {
        const response = await app.post(url, data);
        return {data:response};

    }
    catch (error) {
        console.log("Login API Error:", error);
        if(error.message){
            return { error: { data: { message: error.message } } };
        }
        return { error:error}
    }


}

