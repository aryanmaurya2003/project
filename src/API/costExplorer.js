import app from "../axios/axios";

export const PostCostExplorerData = async (groupBy,data) => {
  try {
    const response = await app.post(`/cost?groupBy=${groupBy}`, data);
    return response;
  } catch (error) {
    return error;
  }
}



export const getColumnData=async(data)=>{
  try{
    console.log("the data set to the bakcend is this",data)
    const response= await app.get(`/cost/getFilters/${data}`);
    return response;
  }catch(error){
    return error;
  }
}