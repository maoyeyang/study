import React from 'react'
import './App.css'
import Child from './Child'

class App extends React.Component {
  state = {
    msg: 'from state'
  }
  componentDidMount() {
    setTimeout(() => {
      this.setState({
        msg: 'change msg'
      })
    }, 3000)
  }
  renderFooter = () => {
    return <footer>foot</footer>
  }
  render(h) {
    const red = 'red'
    const isRed = true
    const Main = <p>mian</p>
    const lists = [1, 2, 3, 4, 5, 6]
    const listNodes = lists.map((list, index) => <li key={index}>{list}</li>)
    return (
      <div className={isRed ? red : ''}>
        hello world
        {isRed ? <span> red</span> : <span> nored</span>}
        {Main}
        {this.state.msg}
        <ul>{listNodes}</ul>
        {this.renderFooter()}
        <Child msg={this.state.msg} />
      </div>
    )
  }
}

export default App
