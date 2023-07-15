import { useFormContext } from 'react-hook-form'
import { addressFormData } from '../pages/Checkout'

export function AddressForm() {
  const {
    register,
    formState: { errors },
  } = useFormContext<addressFormData>()

  return (
    <form>
      <div className="mt-8 flex flex-col gap-4">
        <div className="flex flex-col gap-4">
          <div className="flex flex-col pl-1 text-red-400">
            <input
              className="text-regular-s p-3 bg-base-input text-base-text rounded-[4px] w-[200px] h-[42px] outline-base-text"
              type="text"
              placeholder="CEP"
              {...register('cep')}
            />
            {errors.cep && (
              <span className="text-components-button-s pl-3">
                {errors.cep.message}
              </span>
            )}
          </div>

          <input
            className="text-regular-s p-3 bg-base-input text-base-text rounded-[4px] w-full h-[42px] outline-base-text"
            type="text"
            placeholder="Endereço"
            {...register('address')}
          />
        </div>
        <div className="flex items-center gap-4">
          <input
            className="text-regular-s p-3 bg-base-input text-base-text rounded-[4px] w-[200px] h-[42px] outline-base-text"
            type="text"
            placeholder="Número"
            {...register('addressNumber')}
          />
          <input
            className="text-regular-s p-3 bg-base-input text-base-text rounded-[4px] w-[348px] h-[42px] outline-base-text"
            type="text"
            placeholder="Complemento"
            {...register('complement')}
          />
        </div>
        <div className="flex items-center gap-4">
          <input
            className="text-regular-s p-3 bg-base-input text-base-text rounded-[4px] w-[200px] h-[42px] outline-base-text"
            type="text"
            placeholder="Bairro"
            {...register('neighborhood')}
          />
          <input
            className="text-regular-s p-3 bg-base-input text-base-text rounded-[4px] w-[276px] h-[42px] outline-base-text"
            type="text"
            placeholder="Cidade"
            {...register('city')}
          />
          <input
            className="text-regular-s p-3 bg-base-input text-base-text rounded-[4px] w-[60px] h-[42px] outline-base-text"
            type="text"
            placeholder="MA"
            {...register('state')}
          />
        </div>
      </div>
    </form>
  )
}
