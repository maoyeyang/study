import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import './App.css'
import Layout from './page/Layout'
import 'antd/dist/antd.css'

function App() {
  return (
    <Router>
      <Route path="/" component={Layout} />
    </Router>
  )
}

export default App
