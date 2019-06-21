import React from 'react'

class Child extends React.Component {
  state = {
    childCount: 0
  }
  handleChildCountChange = () => {
    let { childCount } = this.state
    childCount++
    this.setState({
      childCount
    })
  }
  componentWillMount() {
    console.log('componentWillMount')
  }
  componentDidMount() {
    console.log('componentDidMount')
  }
  shouldComponentUpdate(nextProps, nextState) {
    console.log('shouldComponentUpdate')
    if (nextProps.count !== this.props.count) {
      return true
    }
    if (nextState.childCount !== this.state.childCount) {
      return true
    }
    return false
  }
  componentWillUpdate() {
    console.log(this.props.count)
  }
  componentDidUpdate() {
    console.log(this.props.count)
  }
  componentWillUnmount() {
    console.log('componentWillUnmount')
  }
  render() {
    console.log(this.props.count)
    return (
      <div>
        count:{this.props.count}
        childCount:{this.state.childCount}
        <button onClick={this.handleChildCountChange}>childChange</button>
      </div>
    )
  }
}

export default Child
