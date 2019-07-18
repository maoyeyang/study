import {
  state
} from './redux/state'
import {
  storeChange
} from './redux/storeChange'
import {
  createStore
} from './redux/createStore'

const {
  store,
  dispatch,
  subscribe
} = createStore(state, storeChange)

function renderHead(state) {
  console.log('render head')
  const head = document.getElementById('head')
  head.innerHTML = state.head.text
  head.style.color = state.head.color
  // state.body.text = '我是经过 head 修改的 body'

}

function renderBody(state) {
  console.log('render body')
  const body = document.getElementById('body')
  body.innerHTML = state.body.text
  body.style.color = state.body.color

}

function renderApp(store, oldStore = {}) {
  if (store === oldStore) return
  store.head !== oldStore.head && renderHead(store)
  store.body !== oldStore.body && renderBody(store)
}
subscribe((store, oldStore) => renderApp(store, oldStore))
renderApp(store)

dispatch({
  text: '我是身体',
  type: 'BODY_TEXT'
})

// renderApp(store) 性能开销