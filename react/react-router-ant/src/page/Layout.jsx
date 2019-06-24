import React from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import Table from './table/index'
import { Layout, Row, Col, Avatar, Input, Menu, Dropdown, Icon } from 'antd'

const { Header, Footer, Sider, Content } = Layout
function DropMenu() {
  return (
    <Menu>
      <Menu.Item>
        <a href="">a</a>
      </Menu.Item>
      <Menu.Item>
        <a href="">b</a>
      </Menu.Item>
    </Menu>
  )
}
// function Table() {
//   return <div>Table</div>
// }
function Label() {
  return <div>Label</div>
}
function Post(props) {
  const { match } = props

  return <div>id:{match.params.id}</div>
}
class PageLayout extends React.Component {
  render() {
    return (
      <Layout>
        <Header
          style={{ color: '#fff', textAlign: 'center', fontWeight: 'bold' }}
        >
          <Row>
            <Col span={10}>React + Antd 实践</Col>
            <Col span={8}>
              <Input placeholder="请输入你想要的....." />
            </Col>
            <Col span={6}>
              <Avatar
                style={{ backgroundColor: '#666', marginRight: '20' }}
                icon="user"
              />
              <Dropdown overlay={DropMenu}>
                <span>
                  Hi,
                  <Icon type="down" />
                </span>
              </Dropdown>
            </Col>
          </Row>
        </Header>
        <Layout>
          <Sider>
            <Menu
              style={{
                width: 250,
                height: '60vh',
                overflow: 'hidden',
                minWidth: 250
              }}
              defaultOpenKeys={['sub1']}
              mode="inline"
            >
              <Menu.SubMenu
                key="sub1"
                title={
                  <span>
                    <Icon type="smile-0" />
                    部分UI 组件实战
                  </span>
                }
              >
                <Menu.Item key="sub1-1">
                  <Link
                    to={{
                      pathname: '/table',
                      search: '?type=all&a=1'
                    }}
                  >
                    表格
                  </Link>
                </Menu.Item>
                <Menu.Item key="sub1-2">
                  <Link to={'/label'}>标签页面</Link>
                </Menu.Item>
                <Menu.Item key="sub1-3">
                  <Link to={'/post/abcdefg'}>文章</Link>
                </Menu.Item>
              </Menu.SubMenu>
            </Menu>
          </Sider>
          <Content style={{ marginLeft: '10%' }}>
            <Route path="/table" component={Table} />
            <Route path="/label" component={Label} />
            <Route path="/post/:id" component={Post} />
          </Content>
        </Layout>
        <Footer>Footer</Footer>
      </Layout>
    )
  }
}
export default PageLayout
