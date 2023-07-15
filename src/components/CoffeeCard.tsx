import { Tag } from './Tag'
import { formatNumber } from '../utils/formatNumber'
import { CoffeeCounter } from './CoffeeCounter'

interface CoffeeCardProps {
  id: string
  name: string
  description: string
  image: string
  tags: string[]
  price: number
}

export function CoffeeCard({
  id,
  name,
  description,
  image,
  tags,
  price,
}: CoffeeCardProps) {
  const priceFormatted = formatNumber(price)

  return (
    <div className="flex items-center flex-col h-[310px] w-[256px] rounded-tr-[36px] rounded-bl-[36px] bg-base-card">
      <img className="-mt-5 w-[120px] h-[120px] block" src={image} alt="" />
      <div className="flex items-center gap-1 my-6">
        {tags.map((tag, index) => {
          return <Tag key={index} name={tag} />
        })}
      </div>
      <div className="flex flex-col px-5">
        <div className="text-center">
          <h3 className="text-base-subtitle text-title-s font-bold">{name}</h3>
          <p className="text-base-label text-regular-s">{description}</p>
        </div>

        <div className="flex pt-8 justify-between items-center h-9">
          <span className="text-regular-s text-base-text font-normal text-center">
            R$&nbsp;
            <strong className="font-serif text-title-m font-extrabold">
              {priceFormatted}
            </strong>
          </span>
          <div className="flex gap-2 items-center">
            <CoffeeCounter productId={id} productName={name} />
          </div>
        </div>
      </div>
    </div>
  )
}
