import React from 'react'
import LoginStatus from './LoginStatus'
import ShopCart from './ShopCart'
// import WithLogin from './WithLogin'
import './App.css'

// const WithLoginStatus = WithLogin(LoginStatus)
// const WithShopCart = WithLogin(ShopCart)
function App() {
  return (
    <>
      {/* <WithLoginStatus />
      <WithShopCart a="1" b="2" /> */}
      <LoginStatus />
      <ShopCart a="1" b="2" />
    </>
  )
}

export default App
