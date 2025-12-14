import axios from 'axios';

const app=axios.create({
    baseURL: 'http://localhost:8080',
    timeout: 8000,
    withCredentials: true

});

app.interceptors.request.use(config => {
    // console.log('Request Config:', config); 
    return config;
}, error => {
    return Promise.reject(error);
});


app.interceptors.response.use(config => {
        console.log('response Config:', config); 

    return config;
}, error => {
    console.log("tje errodr is this",error.status)
    
    if(error.status==403 || error.status==401){
        window.location.href = '/';
    }
    return Promise.reject(error);
});


export default app;

