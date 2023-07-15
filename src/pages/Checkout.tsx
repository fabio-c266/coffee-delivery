import {
  MapPinLine,
  CurrencyDollar,
  CreditCard,
  Bank,
  Money,
} from 'phosphor-react'
import { AddressForm } from '../components/AddressForm'
import { useContext } from 'react'
import { CartContext, PaymentMethodType } from '../contexts/Cart'
import { getCartProductsPrice } from '../utils/getCartProductsPrice'
import { formatNumber } from '../utils/formatNumber'
import { CardProductOnCart } from '../components/CardProductOnCart'
import { FormProvider, useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { toast } from 'react-toastify'
import { useNavigate } from 'react-router-dom'

const addressFormSchema = z.object({
  cep: z.string().regex(/^\d{5}-\d{3}$/, 'CEP inválido'),
  address: z.string().nonempty('O endereço é um campo obrigatório'),
  addressNumber: z.coerce
    .number({
      invalid_type_error: 'O número precisar ser válido',
    })
    .min(0),
  complement: z.string().optional(),
  neighborhood: z.string().nonempty('O bairro é um campo obrigatório'),
  city: z.string().nonempty('A cidade é um campo obrigatório'),
  state: z
    .string()
    .min(2, 'A sigla do estado deve ser no mínimo 2 caracteres')
    .max(2, 'A sigla do estado deve ser no máximo 2 caracteres'),
})

export type addressFormData = z.infer<typeof addressFormSchema>

export function Checkout() {
  const {
    cartProducts,
    paymentMethod,
    setPaymentMethod,
    setUserAddres,
    resetCartProducts,
  } = useContext(CartContext)

  const navigate = useNavigate()

  const addressForm = useForm<addressFormData>({
    resolver: zodResolver(addressFormSchema),
  })

  const { handleSubmit, reset } = addressForm

  const cartProductsTotalPrice = formatNumber(
    getCartProductsPrice(cartProducts),
  )

  function handleSetPaymentMethod(method: PaymentMethodType) {
    setPaymentMethod(method)
  }

  function handlePurchaseRequest(data: addressFormData) {
    if (paymentMethod === '')
      return toast.warn(`Insira uma forma de pagamento`, {
        position: 'bottom-right',
      })

    setUserAddres(data)
    resetCartProducts()
    navigate('/success')
    reset()
  }

  return (
    <div>
      <form
        onSubmit={handleSubmit(handlePurchaseRequest)}
        className="flex justify-between mb-16"
      >
        <div>
          <h1 className="mb-4 mt-8 text-title-xs text-base-subtitle font-bold font-serif">
            Complete seu pedido
          </h1>
          <div className="flex flex-col gap-3 bg-base-card rounded-md max-h-[400px] w-[640px] p-10">
            <div className="flex gap-2">
              <MapPinLine size={22} className="text-brand-yellow-dark" />

              <div className="flex flex-col">
                <span className="text-regular-m font-bold text-base-subtitle">
                  Endereço de Entrega
                </span>
                <p className="text-regular-s text-base-text">
                  Informe o endereço onde deseja receber seu pedido
                </p>
              </div>
            </div>
            <FormProvider {...addressForm}>
              <AddressForm />
            </FormProvider>
          </div>
          <div>
            <div className="flex bg-base-card p-10 mt-3 gap-2 rounded-md">
              <CurrencyDollar size={22} className="text-brand-purple" />

              <div className="flex flex-col">
                <div>
                  <span className="text-regular-m font-bold text-base-subtitle">
                    Pagamento{' '}
                  </span>
                  <p className="text-regular-s text-base-text">
                    O pagamento é feito na entrega. Escolha a forma que deseja
                    pagar
                  </p>
                </div>

                <div className="mt-8 flex items-center gap-3 -ml-6">
                  <button
                    type="button"
                    onClick={() => handleSetPaymentMethod('credit')}
                    className={`flex items-center justify-center gap-2 w-[178px] h-[51px] text-base-text text-components-button-s bg-base-button rounded-md border-2 uppercase hover:bg-brand-purple-light ${
                      paymentMethod === 'credit' && 'border-brand-purple'
                    }`}
                  >
                    <CreditCard size={16} className="text-brand-purple" />
                    Cartão de crédito
                  </button>

                  <button
                    type="button"
                    onClick={() => handleSetPaymentMethod('debit')}
                    className={`flex items-center justify-center gap-2 w-[178px] h-[51px] text-base-text text-components-button-s bg-base-button rounded-md border-2 uppercase hover:bg-brand-purple-light ${
                      paymentMethod === 'debit' && 'border-brand-purple'
                    }`}
                  >
                    <Bank size={16} className="text-brand-purple" />
                    Cartão de Débito
                  </button>

                  <button
                    type="button"
                    onClick={() => handleSetPaymentMethod('money')}
                    className={`flex items-center justify-center gap-2 w-[178px] h-[51px] text-base-text text-components-button-s bg-base-button rounded-md border-2 uppercase hover:bg-brand-purple-light ${
                      paymentMethod === 'money' && 'border-brand-purple'
                    }`}
                  >
                    <Money size={16} className="text-brand-purple" />
                    Dinheiro/pix
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div>
          <h1 className="mb-4 mt-8 text-title-xs text-base-subtitle font-bold font-serif">
            Cafés selecionados
          </h1>
          <div className="h-[498px] w-[490px] p-10 bg-base-card rounded-md rounded-tr-[36px] rounded-bl-[36px] justify-between flex flex-col">
            {cartProducts.length === 0 ? (
              <div className="text-center">
                <h1 className="text-base-subtitle text-regular-m font-bold mb-1">
                  Nenhum produto selecionado
                </h1>
                <p className="text-base-text text-regular-s">
                  Para confirmar seu pedido é necessário adicionar por o menos 1
                  produto ao seu carrinho
                </p>
              </div>
            ) : (
              <div className="h-[30vh] overflow-auto">
                {cartProducts.map((product, index) => {
                  return (
                    <CardProductOnCart
                      key={index}
                      productId={product.id}
                      productName={product.name}
                    />
                  )
                })}
              </div>
            )}

            <div className="flex flex-col gap-3 mt-6">
              <div className="flex items-center justify-between text-base-text">
                <span>Total de itens</span>
                <span>R$ {cartProductsTotalPrice}</span>
              </div>

              <div className="flex items-center justify-between text-base-text">
                <span>Entrega</span>
                <span>R$ {formatNumber(0)}</span>
              </div>

              <div className="flex items-center justify-between text-base-subtitle text-bold-l font-bold">
                <span>Total</span>
                <span>R$ {cartProductsTotalPrice}</span>
              </div>

              <button
                type="submit"
                className="w-full h-[46px] text-center rounded-md font-bold text-components-button-g text-base-white bg-brand-yellow mt-[23px] disabled:cursor-not-allowed enabled:hover:bg-brand-yellow-dark"
                disabled={cartProducts.length === 0}
              >
                CONFIRMAR PEDIDO
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  )
}
