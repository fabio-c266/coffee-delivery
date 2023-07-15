import { useContext } from 'react'
import { coffessList } from '../utils/coffeesListt'
import { formatNumber } from '../utils/formatNumber'
import { CartCounter } from './CartCounter'
import { CartContext } from '../contexts/Cart'

interface CardProductOnCartProps {
  productId: string
  productName: string
}

export function CardProductOnCart({
  productId,
  productName,
}: CardProductOnCartProps) {
  const { cartProducts } = useContext(CartContext)
  const product = coffessList.find((produc) => produc.name === productName)
  const productAmountOnCart =
    cartProducts.find((product) => product.id === productId)?.amount || 0

  if (!product) {
    return null
  }

  return (
    <div className="flex justify-between pb-6 border-b-base-button border-b-2 mb-6">
      <div className="flex gap-9">
        <img src={product.image} className="w-16 h-16" alt="" />
        <div className="flex flex-col gap-2">
          <span className="text-base-subtitle text-regular-m font-semibold">
            {product.name}
          </span>
          <CartCounter productId={productId} productName={productName} />
        </div>
      </div>
      <span className="text-bold-m text-base-text font-bold text-center">
        R$ {formatNumber(productAmountOnCart * product.price)}
      </span>
    </div>
  )
}
