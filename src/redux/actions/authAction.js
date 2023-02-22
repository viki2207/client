// registration
// login
// loading current user
import axios from "axios";
import { REGISTER_SUCCESS } from "../types";
import { setAlert } from "./alertAction";
export const loadUser = () => async (dispatch) => {
  try {
    const res = await axios.get(); // we have to provide the token?
  } catch (err) {}
};
export const register =
  ({ name, email, password }) =>
  async (dispatch) => {
    // used to register the user via performing the rest call.

    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    const data = JSON.stringify({ name, email, password });
    try {
      console.log(data);
      const res = await axios.post("/api/users", data, config);
      dispatch({ type: REGISTER_SUCCESS, payload: res.data });
    } catch (err) {
      const errors = err.response.data.errors;
      if (errors) {
        errors.forEach((error) => dispatch(setAlert(error.msg, "danger")));
      }
      // lets traverse the errors array
      // to process the error i.e. display work should be handled by an action .
      /// let have alertAction.
    }
  };
// export : we can use this function in any file
// const : keyword
// register : name of the function
//({name,email,password}) : json object which is accepted by a function/ method
// as an arguement caller===> component.
// async : asynchronous operations
// dispatch :
