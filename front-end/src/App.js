import React from "react"
import NavBar from "./components/NavBar"
import HomePage from "./components/HomePage"
import Profile from "./components/Profile"
import Signup from "./components/Signup"
import LandingPage from "./components/LandingPage"
import Login from "./components/Login"

import { BrowserRouter as Router, Route } from "react-router-dom"

function App() {
  return (
    <div>
      <Router>
        <Route exact path="/">
          <NavBar />
          <HomePage />
        </Route>
        <Route path="/landingpage">
          <LandingPage />
        </Route>
        <Route path="/roadmap">
          <NavBar />
          Roadmap
        </Route>
        <Route path="/profile">
          <NavBar />
          <Profile />
        </Route>
        <Route path="/community">
          <NavBar />
          Community
        </Route>
        <Route path="/support">
          <NavBar />
          Support
        </Route>
        <Route path="/signup">
          <Signup />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
      </Router>
    </div>
  )
}

export default App
