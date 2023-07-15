import { Minus, Plus, Trash } from 'phosphor-react'
import { useContext } from 'react'
import { CartContext } from '../contexts/Cart'

interface CartCounterProps {
  productId: string
  productName: string
}

export function CartCounter({ productId, productName }: CartCounterProps) {
  const { updateQuantityOfProducts, getCartProductAmount, deleteCartProduct } =
    useContext(CartContext)

  const productAmount = getCartProductAmount(productId)

  function handleAddProduct() {
    updateQuantityOfProducts(productId, productName, productAmount + 1)
  }

  function handleRemoveProduct() {
    if (productAmount > 1)
      updateQuantityOfProducts(productId, productName, productAmount - 1)
  }

  function handleDeleteCartProduct() {
    deleteCartProduct(productId)
  }

  return (
    <div className="flex justify-center items-center gap-2">
      <div className="flex justify-center h-[32px] w-[72px] rounded-md items-center bg-base-button">
        <button onClick={handleRemoveProduct} type="button">
          <Minus weight="bold" className="text-brand-purple" size={14} />
        </button>
        <span className="p-2 text-regular-m font-bold">
          {getCartProductAmount(productId)}
        </span>
        <button onClick={handleAddProduct} type="button">
          <Plus weight="bold" className="text-brand-purple" size={14} />
        </button>
      </div>
      <div>
        <button
          className="flex justify-center items-center gap-1 text-base-text text-components-button-s bg-base-button w-[91px] h-[32px] rounded-md hover:bg-brand-purple-light"
          onClick={handleDeleteCartProduct}
        >
          <Trash size={16} className="text-brand-purple" />
          REMOVER
        </button>
      </div>
    </div>
  )
}
