import coffeeImage from '../assets/coffee-hero.svg'
import { Benefit } from './Benefit'

export function Hero() {
  return (
    <div className="flex items-center justify-between py-[80px]">
      <div className="flex flex-col">
        <div className="flex flex-col gap-4">
          <h1 className="font-serif font-extrabold text-title-xl max-w-[90%]">
            Encontre o café perfeito para qualquer hora do dia
          </h1>
          <p className="text-regular-l max-w-[80%]">
            Com o Coffee Delivery você recebe seu café onde estiver, a qualquer
            hora
          </p>
        </div>

        <div className="mt-16 max-w-[567px] flex flex-row items-center gap-10">
          <div className="flex flex-col gap-5">
            <Benefit iconName="ShoppingCart" text="Compra simples e segura" />
            <Benefit iconName="Timer" text="Entrega rápida e rastreada" />
          </div>

          <div className="flex flex-col gap-5">
            <Benefit
              iconName="Package"
              text="Embalagem mantém o café intacto"
            />
            <Benefit
              iconName="Coffee"
              text="O café chega fresquinho até você"
            />
          </div>
        </div>
      </div>
      <img className="h-auto w-auto" src={coffeeImage} alt="" />
    </div>
  )
}
