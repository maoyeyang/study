import React from 'react'

class CommentInput extends React.Component {
  state = {
    userName: '',
    comment: ''
  }
  handleUsernameChange = e => {
    this.setState({
      userName: e.target.value
    })
  }
  handleCommentChange = e => {
    this.setState({
      comment: e.target.value
    })
  }
  handleSubmit = e => {
    const { userName, comment } = this.state
    this.props.onSubmit({ userName, comment })
    this.setState({
      userName: '',
      comment: ''
    })
  }
  render() {
    const { userName, comment } = this.state
    return (
      <div>
        <div>
          用户名:
          <input
            type="text"
            placeholder="请输入用户名"
            value={userName}
            onChange={this.handleUsernameChange}
          />
        </div>
        <div>
          评论:
          <textarea
            type="text"
            placeholder="不超过100字"
            value={comment}
            onChange={this.handleCommentChange}
          />
        </div>
        <div>
          <button onClick={this.handleSubmit}>提交</button>
        </div>
      </div>
    )
  }
}

export default CommentInput
