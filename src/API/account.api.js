import app from "../axios/axios";


export const getAllAccountList = async () => {
    try {
        const response = await app.get("/account");
        return response;

    } catch (error) {
        return error;
    }
}


export const createAccount = async (account) => {
    try {
        const response = await app.post("/account", account);
        return response;

    } catch (error) {
        return error;
    }
}

