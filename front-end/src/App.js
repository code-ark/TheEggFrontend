import React, { Component } from "react"
import NavBar from "./components/NavBar"
import HomePage from "./components/HomePage"
import Profile from "./components/Profile"
import Signup from "./components/Signup"
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom"

function App() {
  return (
    <div>
      <Router>
        <Route exact path="/">
          <NavBar />
          <HomePage />
        </Route>
        <Route exact path="/roadmap">
          <NavBar />
          Roadmap
        </Route>
        <Route exact path="/profile">
          <NavBar />
          <NavBar />
          <Profile />
        </Route>
        <Route exact path="/community">
          <NavBar />
          Community
        </Route>
        <Route exact path="/support">
          <NavBar />
          Support
        </Route>
        <Route exact path="/signup">
          <Signup />
        </Route>
      </Router>
    </div>
  )
}

export default App
