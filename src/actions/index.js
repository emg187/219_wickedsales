import types from "./types";
import axios from "axios";

export const checkAuth = ()=>async dispatch=>{
    const response = await axios.get("/api/check-auth.php");

    if (response.data.success){
         dispatch({
             type: types.SIGN_IN,
             email: response.data.email
         });
    } else {
        dispatch({
            type: types.SIGN_OUT
        });
    }
}

export function signIn(user){
    return function(dispatch){
        axios.post("/api/sign-in.php", user).then(response=>{
            console.log("Sign in response:", response);

            if (response.data.success){
                localStorage.setItem("signedIn", 'true');

                dispatch({
                    type: types.SIGN_IN, 
                    email: response.data.email
                });
            } else {
                dispatch({
                    type: types.SIGN_IN_ERROR
                });
            }
        });
    }
}


export function signOut(){
    return function(dispatch){
        axios.get("/api/sign-out.php").then(response=>{
            localStorage.removeItem("signedIn");

            dispatch({
                type: types.SIGN_OUT
            });
        });
    }
}

export function getAllProducts(){
    return function(dispatch){
        axios.get("/api/getproducts.php").then((response)=>{
        
            dispatch({
                type: types.GET_ALL_PRODUCTS, 
                products: response.data.products
            });
        });
    }
}


