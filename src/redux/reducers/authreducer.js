import { USER_LOADED, REGISTER_SUCCESS, REGISTER_FAIL } from "../types";
//it is used to hold and manipulate the user related states in the store
//we are perform all auth related operations / user related operations like register, login, loading current info. etc
const initialState = {
  token: null, //token is required
  isAuthenticated: null, // user is authenticated
  loading: true, // user is loading
  user: null, //for user
};
//it will be a part of ur global state/ store we can hold all user related data.
//global state its a store
export default (state = initialState, action) => {
  //action will share the data needs to be manaipulated it will share the flag
  //ont the basis of flag we need to the change store content
  //data : payload
  const { type, payload } = action;
  switch (type) {
    case USER_LOADED:
      return { ...state };
    case REGISTER_SUCCESS:
      //to handle the success part of user registerations
      //it will give us the token
      //is authenticates : true
      ///loading:false
      //token : we need to use the token from the dashboard on wrds
      //for create profilr/add exp add education etc..
      localStorage.setItem("token", payload.token);
      //local storage will help us to hold the token in persisted way..
      return { ...state, ...payload, isAuthenticated: true, loading: false };

    default:
      return state;
  }
};
