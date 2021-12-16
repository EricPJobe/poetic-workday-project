import React from "react"
import { Router } from "@reach/router"
import Nav from "./views/Nav/Nav"
import Search from "./views/Search/Search"
import Favorites from "./views/Favorites/Favorites"
import './App.css'

function App() {
  return (
    <div className="App">
      <Nav />
      <Router>
        <Search path={"/"} />
        <Favorites path={"favorites"} />
      </Router>
    </div>
  );
}

export default App
