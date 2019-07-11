import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import BlogList from "./components/blogList";
import BlogPost from "./components/blogPost";
import MainNav from "./components/mainNav";

import "./App.css";

const routesArray = [
  { linkRoute: "/", linkName: "Homepage" },
  { linkRoute: "/add", linkName: "Add Post" }
];

function App() {
  return (
    <Router>
      <div className="App">
        <MainNav routes={routesArray} />
        <Route path="/" exact component={BlogList} />
        <Route path="/post/:post_id" component={BlogPost} />
      </div>
    </Router>
  );
}

export default App;
