import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useParams,
} from "react-router-dom";

function Customer() {
  const { name } = useParams();
  return (
    <div className="middle">
      <h1>Customer : {name}</h1>
    </div>
  );
}
function Ids() {
  const { ids } = useParams();
  return (
    <div className="middle">
      <h1>Id's : {ids}</h1>
    </div>
  );
}

function UrlParameters() {
  return (
    <div className="middle">
      <Router>
        <div>
          <ul className="App-header ">
            <h1>Customer</h1>
            <li>
              <Link to="/Puja">Puja</Link>
            </li>
            <li>
              <Link to="/Maya">Maya</Link>
            </li>
            <li>
              <Link to="/Shreya">Shreya</Link>
            </li>
          </ul>
          <ul className="App-header ">
            <h1>Id's</h1>
            <li>
              <Link to="/ids/1">1</Link>
            </li>
            <li>
              <Link to="/ids/2">2</Link>
            </li>
            <li>
              <Link to="/ids/3">3</Link>
            </li>
          </ul>
          <Routes>
            <Route path="/:name" element={<Customer />}></Route>
            <Route path="/ids/:ids" element={<Ids />}></Route>
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default UrlParameters;
