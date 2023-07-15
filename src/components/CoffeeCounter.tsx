import { Minus, Plus, ShoppingCart } from 'phosphor-react'
import { useContext, useState } from 'react'
import { CartContext } from '../contexts/Cart'
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

interface CounterProps {
  productId: string
  productName: string
}

export function CoffeeCounter({ productId, productName }: CounterProps) {
  const [productAmount, setProductAmount] = useState<number>(0)
  const { updateQuantityOfProducts } = useContext(CartContext)

  function handleAddProduct() {
    setProductAmount((prevCount) => prevCount + 1)
  }

  function handleRemoveProduct() {
    if (productAmount > 0) setProductAmount((prevCount) => prevCount - 1)
  }

  function handleSetCartProducts() {
    updateQuantityOfProducts(productId, productName, productAmount)

    setProductAmount(0)
    toast.success(`Produto adicionado ao carrinho!`, {
      position: 'bottom-right',
    })
  }

  return (
    <>
      <div className="flex justify-center h-max w-[72px] rounded-md items-center bg-base-button">
        <button onClick={handleRemoveProduct}>
          <Minus weight="bold" className="text-brand-purple" size={14} />
        </button>
        <span className="p-2 text-regular-m font-bold">{productAmount}</span>
        <button onClick={handleAddProduct}>
          <Plus weight="bold" className="text-brand-purple" size={14} />
        </button>
      </div>

      <button
        className="flex items-center justify-center w-9 h-9 rounded-md bg-brand-purple-dark"
        onClick={handleSetCartProducts}
      >
        <ShoppingCart
          className="text-base-background"
          weight="fill"
          size={22}
        />
      </button>
    </>
  )
}
