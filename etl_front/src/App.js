import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/layout/Header";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Landing from "./components/layout/Landing";
import PhoneList from "./components/Phone/PhoneList";
import OpinionList from "./components/Opinion/OpinionList";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Route exact path="/" component={Landing} />
        <Route exact path="/phones" component={PhoneList} />
        <Route exact path="/phone/:phoneId/opinions" component={OpinionList} />
      </div>
    </Router>
  );
}

export default App;
