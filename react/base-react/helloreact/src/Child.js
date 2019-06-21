import React from 'react'

class Child extends React.Component {
  state = {
    inputVal: 111
  }
  handldAnotherFun = () => {
    console.log('hahaha')
  }
  handleClick = e => {
    console.log(this)
    this.handldAnotherFun()
    console.log(e.target.innerHTML)
  }
  handleChange = e => {
    this.setState({
      inputVal: e.target.value
    })
  }
  render(h) {
    return (
      <div onClick={this.handleClick}>
        {this.props.msg}
        <input
          type="text"
          value={this.state.inputVal}
          placeholder="请输入内容"
          onChange={this.handleChange}
        />
      </div>
    )
  }
}

export default Child
