import logo from "./logo.svg";
import "./App.scss";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import FetApi from "./lab/FetchApi";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <FetApi />
        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
      </div>
    </BrowserRouter>
  );
}

export default App;
