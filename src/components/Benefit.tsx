import { ShoppingCart, Package, Timer, Coffee } from 'phosphor-react'

interface BenefitProps {
  iconName: 'ShoppingCart' | 'Package' | 'Timer' | 'Coffee'
  text: string
}

const icons = {
  ShoppingCart: <ShoppingCart className="text-base-background" size={16} />,
  Package: <Package className="text-base-background" size={16} />,
  Timer: <Timer className="text-base-background" size={16} />,
  Coffee: <Coffee className="text-base-background" size={16} />,
}

export function Benefit({ iconName, text }: BenefitProps) {
  return (
    <div className="flex items-center gap-3">
      <div
        className={`flex items-center justify-center w-8 h-8 rounded-full 
        ${iconName === 'ShoppingCart' && 'bg-brand-yellow-dark'}
        ${iconName === 'Package' && 'bg-base-text'}
        ${iconName === 'Timer' && 'bg-brand-yellow'}
        ${iconName === 'Coffee' && 'bg-brand-purple'}
      `}
      >
        {icons[iconName]}
      </div>
      <span className="text-base-text text-regular-m">{text}</span>
    </div>
  )
}
