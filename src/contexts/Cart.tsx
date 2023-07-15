import { ReactNode, createContext, useState } from 'react'
import { addressFormData } from '../pages/Checkout'

export interface Coffee {
  id: string
  name: string
  description: string
  tags: string[]
  image: string
  price: number
}

export interface ProductCartData {
  id: string
  name: string
  amount: number
}

export type PaymentMethodType = 'debit' | 'credit' | 'money' | ''

interface CartContextData {
  cartProducts: ProductCartData[]
  paymentMethod: PaymentMethodType
  userAddress: addressFormData | undefined
  setPaymentMethod: (method: PaymentMethodType) => void
  setCartProducts: (products: ProductCartData[]) => void
  setUserAddres: (address: addressFormData | undefined) => void
  updateQuantityOfProducts: (id: string, name: string, amount: number) => void
  resetCartProducts: () => void
  resetUserAddres: () => void
  deleteCartProduct: (id: string) => void
  getCartProductAmount: (id: string) => number
}

interface CartContextProvider {
  children: ReactNode
}

export const CartContext = createContext({} as CartContextData)

export function CartContextProvider({ children }: CartContextProvider) {
  const [cartProducts, setCartProducts] = useState<ProductCartData[]>([])
  const [paymentMethod, setCurrentPaymentMethod] =
    useState<PaymentMethodType>('')
  const [userAddress, setCurrentUserAddress] = useState<
    addressFormData | undefined
  >(undefined)

  function updateQuantityOfProducts(id: string, name: string, amount: number) {
    const productIsOnCart = cartProducts.find((product) => product.id === id)

    if (productIsOnCart) {
      const newCartProductsData = cartProducts.map((product) => {
        if (product.id === id) {
          return {
            ...product,
            amount,
          }
        } else {
          return product
        }
      })

      setCartProducts([...newCartProductsData])
    } else {
      setCartProducts([...cartProducts, { id, name, amount }])
    }
  }

  function resetCartProducts() {
    setCartProducts([])
  }

  function resetUserAddres() {
    setCurrentUserAddress(undefined)
  }

  function getCartProductAmount(id: string) {
    const product = cartProducts.find((product) => product.id === id)

    return product?.amount ?? 0
  }

  function deleteCartProduct(id: string) {
    const newCartProductsData = cartProducts.filter(
      (product) => product.id !== id,
    )

    setCartProducts([...newCartProductsData])
  }

  function setPaymentMethod(method: PaymentMethodType) {
    setCurrentPaymentMethod(method)
  }

  function setUserAddres(address: addressFormData | undefined) {
    setCurrentUserAddress(address)
  }

  return (
    <CartContext.Provider
      value={{
        cartProducts,
        paymentMethod,
        userAddress,
        setPaymentMethod,
        setCartProducts,
        setUserAddres,
        updateQuantityOfProducts,
        resetCartProducts,
        resetUserAddres,
        deleteCartProduct,
        getCartProductAmount,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}
