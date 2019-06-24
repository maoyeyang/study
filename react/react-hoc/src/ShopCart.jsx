import React from 'react'
import WithLogin from './WithLogin'

@WithLogin
class ShopCart extends React.Component {
  render() {
    return (
      <ul>
        <li>手机</li>
        <li>平板</li>
      </ul>
    )
  }
}
ShopCart.displayName = 'ShopCart'
export default ShopCart
