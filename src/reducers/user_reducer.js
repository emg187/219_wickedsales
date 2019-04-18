const DEFAULT_STATE = {
    auth: false,
    username: ""
};

function userReducer(state = DEFAULT_STATE, action){
    switch(action.type){
        case "SIGN_IN":
            return{...state, auth: true};
        default: 
            return state;
    }
}


export default userReducer;

