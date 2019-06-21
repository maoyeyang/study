import React from 'react'
import Child from './Child'
import Child1 from './Child1'
import Context from './Context'
import Context1 from './Context1'
import './App.css'

class App extends React.Component {
  constructor() {
    super()
    this.objRef = React.createRef()
  }
  handleToggleChild = () => {
    const { showChild } = this.state
    this.setState({
      showChild: !showChild
    })
  }
  handleChildProosChange = () => {
    let { count } = this.state
    count++
    this.setState({
      count
    })
  }
  componentDidMount = () => {
    this.refs.stringRef.innerHTML = 'new String'
    this.methodRef.innerHTML = 'new methodRef'
    this.objRef.current.innerHTML = 'new objRef'
  }
  state = { count: 0 }
  render() {
    const { count, showChild } = this.state
    return (
      <div>
        <span ref="stringRef">react ref</span>
        <span ref={ref => (this.methodRef = ref)}>method ref</span>
        <span ref={this.objRef}>object ref</span>
        <div dangerouslySetInnerHTML={{ __html: `<strong>strong</strong>` }} />
        <button onClick={this.handleChildProosChange}>
          child component props change
        </button>
        <button onClick={this.handleToggleChild}>
          handleToggleChild change
        </button>
        {showChild ? <Child count={count} /> : <Child1 count={count} />}
        <Context>小华111</Context>
        <Context1>adasda</Context1>
      </div>
    )
  }
}

export default App
