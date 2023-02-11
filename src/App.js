import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Layouts/Header";
import Footer from "./components/Layouts/Footer";
import { Routers } from "./components/routers/Routers";
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Header></Header>
        {/* <Landing></Landing> */}
        {/* landing should be handle via routers only */}
        <Routers></Routers>
        <Footer></Footer>
      </Router>
    </>
  );
}

export default App;
