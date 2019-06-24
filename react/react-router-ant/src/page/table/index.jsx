import React from 'react'
import { Table } from 'antd'

function Message(props) {
  return <div>{props.msg.time}</div>
}

class Index extends React.Component {
  state = {
    msgs: [
      {
        time: '2017-6-18'
      },
      {
        time: '2018-6-18'
      }
    ]
  }
  handlePushTime = () => {
    const date = new Date()
    const dateLoacl = date.toLocaleTimeString()
    const msgs = this.state.msgs.slice(0)
    this.setState({
      msgs: msgs.concat({ time: dateLoacl })
    })
  }
  // componentDidMount() {
  //   setInterval(() => {
  //     this.handlePushTime()
  //   }, 3000)
  // }
  render() {
    const dataSource = [
      {
        key: '1',
        name: '胡彦斌',
        age: 32,
        address: '西湖区湖底公园1号'
      },
      {
        key: '2',
        name: '胡彦祖',
        age: 42,
        address: '西湖区湖底公园1号'
      }
    ]
    const columns = [
      {
        title: '姓名',
        dataIndex: 'name',
        key: 'name',
        render: text => <a href="#">{text}</a>
      },
      {
        title: '年龄',
        dataIndex: 'age',
        key: 'age'
      },
      {
        title: '住址',
        dataIndex: 'address',
        key: 'address'
      },
      {
        title: '操作',
        key: 'key',
        render: (text, record) => {
          return (
            <div>
              <a href="#">修改</a>
              &nbsp;
              <a href="#">删除</a>
              正在操作 key:{record.key}
            </div>
          )
        }
      }
    ]

    const { location } = this.props
    const { msgs } = this.state
    return (
      <div>
        {location.search}
        {msgs.map((msg, i) => {
          return <Message key={i} msg={msg} />
        })}
        <Table dataSource={dataSource} columns={columns} />
      </div>
    )
  }
}
export default Index
