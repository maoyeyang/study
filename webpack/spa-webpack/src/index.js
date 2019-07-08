import {
  sync
} from "./components/sync";

document.getElementById('btn').addEventListener('click', function () {
  import( /* webpackChunkName: 'async'*/ './components/async/index').then(_ => {
    _.default.init()
  })
})

sync()