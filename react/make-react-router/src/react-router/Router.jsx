import React, { Component } from 'react'
import { RouterContext } from './RouterContext'
export default class Router extends Component {
  constructor(props) {
    super(props)
    this.state = {
      location: props.history.location
    }
  }
  render() {
    return (
      <RouterContext.Provider
        children={this.props.children}
        value={{
          history: this.props.history,
          location: this.props.location
        }}
      />
    )
  }
}
