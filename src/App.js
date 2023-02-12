import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Layouts/Header";
import Footer from "./components/Layouts/Footer";
import { Routers } from "./components/routers/Routers";
import { BrowserRouter as Router } from "react-router-dom";
//redux import statements
//lib using for react to convert to the redux
import { Provider } from "react-redux";
import store from "./redux/store";
function App() {
  const appName = "devconnector";
  return (
    <>
      <Provider store={store}>
        <Router>
          <Header appName={appName}></Header>
          {/* <Landing></Landing> */}
          {/* landing should be handle via routers only */}
          <Routers></Routers>
          <Footer appName={appName}></Footer>
        </Router>
      </Provider>
    </>
  );
}

export default App;
