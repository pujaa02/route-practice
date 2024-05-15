import "./App.css";
import * as React from "react";
import Formresult from "./pages/Formresult";
import UrlParameters from "./pages/UrlParameters";
import CatchRoute from "./pages/CatchRoute";
class App extends React.Component {
  render() {
    return (
      <>
        {/* <Formresult /> */}
        {/* <UrlParameters /> */}
        <CatchRoute />
      </>
    );
  }
}

export default App;
