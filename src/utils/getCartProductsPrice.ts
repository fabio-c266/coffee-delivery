import { ProductCartData } from '../contexts/Cart'
import { coffessList } from './coffeesListt'

export function getCartProductsPrice(currentCartProducts: ProductCartData[]) {
  let total = 0
  for (const currentCartProduct of currentCartProducts) {
    const productPrice = coffessList.find(
      (product) => product.id === currentCartProduct.id,
    )?.price

    if (productPrice) {
      total += productPrice * currentCartProduct.amount
    }
  }

  return total
}
