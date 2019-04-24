import types from "./types";
import axios from "axios";

export function signIn(user){
    return function(dispatch){
        axios.get("/api/sign-in.php").then(response=>{
            console.log("Sign in response:", response);

            if (response.data.success){
                dispatch({
                    type: types.SIGN_IN
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
    return {
        type: types.SIGN_OUT
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


