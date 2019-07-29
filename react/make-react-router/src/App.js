import React from 'react'
import { BrowserRouter, Route } from './react-router-dom'
import './App.css'

function Home() {
  return <div>adadaadasdasdasd</div>
}
function Detail() {
  return <div>adadghkghkghkghkgad</div>
}
class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <ul>
          <li>home</li>
          <li>detail</li>
        </ul>
        <Route path="/" component={Home} />
        <Route path="/detail" component={Detail} />
      </BrowserRouter>
    )
  }
}

export default App
