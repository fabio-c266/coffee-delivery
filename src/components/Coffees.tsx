import { coffessList } from '../utils/coffeesListt'
import { CoffeeCard } from './CoffeeCard'

export function Coffess() {
  return (
    <div className="mt-8">
      <div>
        <h2 className="text-title-l font-serif font-extrabold">Nossos Cafés</h2>
      </div>

      <div className="mt-[54px] mb-[80px] flex flex-wrap max-w-[1130px] gap-8">
        {coffessList.map((coffee) => {
          return (
            <CoffeeCard
              key={coffee.id}
              id={coffee.id}
              name={coffee.name}
              description={coffee.description}
              image={coffee.image}
              tags={coffee.tags}
              price={coffee.price}
            />
          )
        })}
      </div>
    </div>
  )
}
