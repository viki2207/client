import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Layouts/Header";
import Footer from "./components/Layouts/Footer";
import { Routers } from "./components/routers/Routers";
import { BrowserRouter as Router, useNavigate } from "react-router-dom";
//redux import statements
//lib using for react to convert to the redux
import { Provider } from "react-redux";
import store from "./redux/store";
import { useEffect } from "react";
import setAuthToken from "./utils/setAuthToken";
import { loadUser } from "./redux/actions/authAction";

function App() {
  const navigate = useNavigate();
  useEffect(() => {
    console.log(localStorage.token);
    if (localStorage.token) {
      setAuthToken(localStorage.token);
      store.dispatch(loadUser());
    } else {
      //send the user to landing page
      navigate("/");
    }
  }, []); //we are not accessing any props.
  const appName = "devconnector";
  return (
    <>
      <Provider store={store}>
        <Header appName={appName}></Header>
        {/* <Landing></Landing> */}
        {/* landing should be handle via routers only */}
        <Routers></Routers>
        <Footer appName={appName}></Footer>
      </Provider>
    </>
  );
}

export default App;
