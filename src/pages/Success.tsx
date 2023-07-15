import { useContext, useEffect, useRef } from 'react'
import { CartContext } from '../contexts/Cart'
import { useNavigate } from 'react-router-dom'
import { MapPin, Timer, CurrencyDollar } from 'phosphor-react'

import deliveryImage from '../assets/delivery.svg'

export function Success() {
  const { userAddress, paymentMethod, setPaymentMethod, setUserAddres } =
    useContext(CartContext)

  const pagePaymentMethod = useRef(paymentMethod).current
  const pageUserAddress = useRef(userAddress).current

  const navigate = useNavigate()

  useEffect(() => {
    if (!userAddress && !pagePaymentMethod) {
      navigate('/')
    }

    setPaymentMethod('')
    setUserAddres(undefined)
  })

  if (!userAddress && !pagePaymentMethod) {
    return null
  }

  const paymentMethodTranformed = {
    money: 'Dinheiro/pix',
    credit: 'Cartão de crédito',
    debit: 'Cartão de débito',
    '': '',
  }

  return (
    <div className="flex justify-between mt-16">
      <div>
        <div className="mb-7">
          <h1 className="text-brand-yellow-dark text-title-l font-serif font-extrabold">
            Uhu! Pedido confirmado
          </h1>
          <p className="text-base-subtitle text-regular-l">
            Agora é só aguardar que logo o café chegará até você
          </p>
        </div>
        <div className="flex flex-col p-10 gap-8 rounded-tl-md rounded-br-md rounded-tr-[36px] rounded-bl-[36px] border-solid border-2 border-base-label">
          <div className="flex items-center gap-3">
            <div className="flex items-center justify-center w-8 h-8 bg-brand-purple rounded-full">
              <MapPin
                size={16}
                weight="fill"
                className="text-base-background"
              />
            </div>
            <div className="flex flex-col">
              <span>
                Entrega em{' '}
                <strong>
                  {pageUserAddress?.address}, {pageUserAddress?.addressNumber}
                </strong>
              </span>
              <span>
                {pageUserAddress?.neighborhood} - {pageUserAddress?.city},{' '}
                {pageUserAddress?.state}
              </span>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="flex items-center justify-center w-8 h-8 bg-brand-yellow rounded-full">
              <Timer size={16} weight="fill" className="text-base-background" />
            </div>
            <div className="flex flex-col">
              <span className="text-base-text text-regular-m">
                Previsão de entrega
              </span>
              <span className="text-base-text font-bold text-bold-m">
                20 min - 30 min
              </span>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="flex items-center justify-center w-8 h-8 bg-brand-yellow-dark rounded-full">
              <CurrencyDollar
                size={16}
                weight="fill"
                className="text-base-background"
              />
            </div>
            <div className="flex flex-col">
              <span className="text-base-text text-regular-m">
                Pagamento na entrega
              </span>
              <span className="text-base-text font-bold text-bold-m">
                {paymentMethodTranformed[pagePaymentMethod]}
              </span>
            </div>
          </div>
        </div>
      </div>
      <img src={deliveryImage} alt="Delivery" />
    </div>
  )
}
