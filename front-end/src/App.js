import React, { Component } from "react"
import NavBar from "./components/NavBar"
import HomePage from "./components/HomePage"
import Profile from "./components/Profile"
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom"

function App() {
  return (
    <div>
      <NavBar />
      <Router>
        <Route exact path="/">
          <HomePage />
        </Route>
        <Route exact path="/roadmap">
          Roadmap
        </Route>
        <Route exact path="/profile">
          <Profile />
        </Route>
        <Route exact path="/community">
          Community
        </Route>
        <Route exact path="/support">
          Support
        </Route>
      </Router>
    </div>
  )
}

export default App
