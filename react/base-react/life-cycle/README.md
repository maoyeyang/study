# React 生命周期

## 挂载阶段

- 第一次渲染

  - componentWillMount

  - render

  - componentDidMount

## 更新阶段

- shouldComponentUpdate

  - `return true` 更新
  - `return false` 不更新

- componentWillUpdate

- render

- componentDidUpdate

## 卸载阶段

- componentWillUnmount 清除全局事件绑定

## red blue

// parent state
{
theme:'red'
}
层层传递
父->子->孙

1. 父组件通过 getChildContext 返回提供的 Context 内容
2. 父组件 .childContextTypes 定义提供的 context 类型
3. 子组件 获取 .contextTypes 定义接受的类型 this.context 获取

### 问题

跨层级传递,假如中间某一组件 shouldComponentUpdate return false
断流了 不能修改

16.xxx

1. 构造 Provider Consumer
2. 父组件`<Provider value={}/>` 提供数据
3. 后代组件

```jsx
<Consumer>{() => {}}</Consumer>
```

```js
state = {
  theme: 'purple',
  toggle: this.handleToggletheme
}
```

静态属性 无法获取 实例的 this
