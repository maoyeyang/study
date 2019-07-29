import React from 'react'
import RouterContext from './RouterContext'

class Route extends React.Component {
  render() {
    return (
      <RouterContext.Consumer>
        {context => {
          const location = context.location
        }}
      </RouterContext.Consumer>
    )
  }
}
