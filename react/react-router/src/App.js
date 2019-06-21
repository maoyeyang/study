import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect
} from 'react-router-dom'
import './App.css'
function Index() {
  return <div>Home</div>
}
function About() {
  return <div>about</div>
}
function User() {
  return <div>user</div>
}
function Post() {
  return <div>Post</div>
}
function Protect() {
  return <div>protect</div>
}
function Login() {
  return <div>Login</div>
}
function PrivateRoute(props) {
  const { path, component: Commonent } = props
  return (
    <Route
      path={path}
      render={() => {
        return true ? <Commonent /> : <Redirect to={{ pathname: 'login' }} />
      }}
    />
  )
}
function App() {
  return (
    <Router>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/user">User</Link>
        </li>
        <li>
          <Link to="/protect">protect page</Link>
        </li>
      </ul>
      {true ? <Route path="/" exact component={Index} /> : <div>no router</div>}
      <Route path="/about" component={About} />
      <Route path="/login" component={Login} />
      <PrivateRoute path="/post" component={Post} />
      <PrivateRoute path="/user" component={User} />
      <Route
        path="/protect"
        render={() => {
          return false ? (
            <Protect />
          ) : (
            <Redirect
              to={{ pathname: '/login', state: { from: '/protect' } }}
            />
          )
        }}
      />
    </Router>
  )
}

export default App
