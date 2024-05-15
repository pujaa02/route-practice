import * as React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useNavigate,
} from "react-router-dom";
import "../App.css";

function Form() {
  const navigate = useNavigate();
  const submitform = () => {
    navigate("/result");
  };
  return (
    <div className="middle">
      <h1>Form Submission</h1>
      <form onSubmit={submitform}>
        <label for="fname">Name : </label>
        <input type="text" name="fname" /> <br /> <br />
        <label for="age">Age : </label>
        <input type="number" name="age" />
        <br /> <br />
        <button className="btn">Submit</button>
      </form>
    </div>
  );
}
function Result() {
  return (
    <div className="middle">
      <h1>Form Submit Successfully!!</h1>
    </div>
  );
}

function Formresult() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Form />}></Route>
        <Route path="/result" element={<Result />}></Route>
      </Routes>
    </Router>
  );
}

export default Formresult;
