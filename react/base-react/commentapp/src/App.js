import React from 'react'
import './App.css'
import CommentInput from './CommentInput'
import CommentList from './CommentList'

class App extends React.Component {
  state = {
    commentLists: []
  }
  handleSubmit = info => {
    let commentLists = this.state.commentLists.slice(0)
    commentLists.unshift(info)
    this.setState({
      commentLists
    })
  }
  render(h) {
    return (
      <div>
        <CommentInput onSubmit={this.handleSubmit} />
        <CommentList commentLists={this.state.commentLists} />
      </div>
    )
  }
}

export default App
