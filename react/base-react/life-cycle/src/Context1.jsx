import React from 'react'

const ThemeContext = React.createContext({
  theme: 'purple',
  toggeleTheme: () => {}
})

class MyButton extends React.Component {
  render() {
    return (
      <ThemeContext.Consumer>
        {value => {
          return (
            <button
              style={{ backgroundColor: value.theme }}
              onClick={value.handleToggleBlue}
            >
              {this.props.children}
            </button>
          )
        }}
      </ThemeContext.Consumer>
    )
  }
}

class Message extends React.Component {
  render() {
    return (
      <div>
        {this.props.text}
        <MyButton>delete11</MyButton>
      </div>
    )
  }
}

class Context1 extends React.Component {
  constructor() {
    super()
    this.handleToggleBlue = () => {
      this.setState(state => {
        return {
          theme: 'blue'
        }
      })
    }
    this.state = {
      theme: 'purple',
      handleToggleBlue: this.handleToggleBlue
    }
  }

  handleToggleTheme = () => {
    this.setState({
      theme: 'red'
    })
  }
  render() {
    const msgs = ['msg1', 'msg2', 'msg3']
    return (
      <ThemeContext.Provider value={this.state}>
        <button onClick={this.handleToggleTheme}>adad</button>
        {msgs.map((msg, i) => {
          return <Message text={msg} key={i} />
        })}
      </ThemeContext.Provider>
    )
  }
}

export default Context1
