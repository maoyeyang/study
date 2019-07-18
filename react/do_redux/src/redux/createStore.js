export const createStore = (state, storeChange) => {
  const store = state || {}
  const listeners = [] // 组件
  // listen callback
  const subscribe = (listen) => listeners.push(listen) // 订阅发布者模式
  const dispatch = (action) => {
    const newStore = storeChange(store, action)
    listeners.forEach(item => {
      item(newStore, store)
    })
  }
  return {
    store,
    dispatch,
    subscribe
  }
}