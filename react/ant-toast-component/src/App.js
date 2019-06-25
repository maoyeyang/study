import React from 'react'
import './App.css'
import toast from './toast'

const openNotificationWithIcon = type => {
  toast[type]('这是提示的内容')
}

function App() {
  return (
    <div>
      <button onClick={() => openNotificationWithIcon('success')}>
        Success
      </button>
      <button onClick={() => openNotificationWithIcon('info')}>Info</button>
      <button onClick={() => openNotificationWithIcon('warning')}>
        Warning
      </button>
      <button onClick={() => openNotificationWithIcon('error')}>Error</button>
      <button onClick={() => openNotificationWithIcon('loading')}>
        Loading
      </button>
    </div>
  )
}

export default App
