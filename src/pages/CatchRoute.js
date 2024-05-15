import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useParams,
} from "react-router-dom";

function Home() {
  return (
    <div className="middle">
      <h1>Home Page</h1>
    </div>
  );
}

function Setting() {
  return (
    <div className="middle">
      <h1>Setting Page</h1>
    </div>
  );
}
function Wrong() {
  return (
    <div className="middle">
      <h1>Wrong Url 404 </h1>
    </div>
  );
}

function CatchRoute() {
  return (
    <div className="middle">
      <Router>
        <div>
          <ul className="App-header ">
            <li>
              <Link to="/home">Home</Link>
            </li>
            <li>
              <Link to="/setting">Setting</Link>
            </li>
          </ul>

          <Routes>
            <Route path="/home" element={<Home />}></Route>
            <Route path="/setting" element={<Setting />}></Route>
            <Route path="*" element={<Wrong />}></Route>
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default CatchRoute;
