import app from "../axios/axios";


export const getAllAccountList=async()=>{
    try{
 const response = await app.get("/account");
 console.log('the account list is this',response)
 return response;

    }catch(error){
        return error;
    }
}


export const createAccount=async(account)=>{
    try{
 const response = await app.post("/account",account);
 return response;

    }catch(error){
        return error;
    }
}

