import logo from '../assets/Logo.svg'

import { useContext } from 'react'
import { MapPin, ShoppingCart } from 'phosphor-react'
import { CartContext } from '../contexts/Cart'

import { NavLink } from 'react-router-dom'

export function Header() {
  const { cartProducts } = useContext(CartContext)

  function getCartProductAmount() {
    let cartProductsAmount = 0

    for (const cartProduct of cartProducts) {
      cartProductsAmount += cartProduct.amount
    }

    return cartProductsAmount
  }

  return (
    <header className="flex items-center justify-between h-[104px]">
      <NavLink to="/">
        <img src={logo} alt="" />
      </NavLink>

      <div className="flex items-center gap-3">
        <div className="flex items-center justify-center rounded-md p-2 gap-1 w-[143px] h-[38px] bg-brand-purple-light text-brand-purple">
          <MapPin size={22} weight="fill" />
          <span className="text-regular-s font-normal">São Luís, MA</span>
        </div>

        <NavLink
          to="/checkout"
          title="Checkout"
          className="flex justify-center items-center w-[38px] h-[38px] rounded-md bg-brand-yellow-light relative"
        >
          <ShoppingCart
            className="text-brand-yellow-dark"
            weight="fill"
            size={22}
          />

          {cartProducts.length > 0 && (
            <div className="absolute flex items-center justify-center -top-[10px] -right-[10px] h-5 w-5 rounded-full bg-brand-yellow-dark">
              <span className="text-base-white text-bold-s font-bold">
                {getCartProductAmount()}
              </span>
            </div>
          )}
        </NavLink>
      </div>
    </header>
  )
}
