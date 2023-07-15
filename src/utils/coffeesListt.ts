import TradicionalExpressImage from '../assets/expresso-tradicional.svg'
import AmericanExpressImage from '../assets/expresso-americano.svg'
import CreamyExpressImage from '../assets/expresso-cremoso.svg'
import IceExpressImage from '../assets/expresso-gelado.svg'
import CoffeeWithMilkImage from '../assets/cafe-com-leite.svg'
import LatteImage from '../assets/latte.svg'
import CapuccinoImage from '../assets/capuccino.svg'
import MacchiatoImage from '../assets/macchiato.svg'
import MocaccinoImage from '../assets/mocaccino.svg'
import HotCoffeeImage from '../assets/chocolate-quente.svg'
import CubanCoffeeImage from '../assets/cubano.svg'
import HawaiianCoffeeImage from '../assets/havaiano.svg'
import ArabianCoffeeImage from '../assets/arabe.svg'
import IrishCoffeeImage from '../assets/irlandes.svg'
import { Coffee } from '../contexts/Cart'

export const coffessList: Coffee[] = [
  {
    id: '1',
    name: 'Expresso Tradicional',
    description: 'O tradicional café feito com água quente e grãos moídos',
    price: 9.9,
    tags: ['tradicional'],
    image: TradicionalExpressImage,
  },
  {
    id: '2',
    name: 'Expresso Americano',
    description: 'Expresso diluído, menos intenso que o tradicional',
    price: 8.9,
    tags: ['tradicional'],
    image: AmericanExpressImage,
  },
  {
    id: '3',
    name: 'Expresso Cremoso',
    description: 'Café expresso tradicional com espuma cremosa',
    price: 12.9,
    tags: ['tradicional'],
    image: CreamyExpressImage,
  },
  {
    id: '4',
    name: 'Expresso Gelado',
    description: 'Bebida preparada com café expresso e cubos de gelo',
    price: 10.9,
    tags: ['tradicional', 'gelado'],
    image: IceExpressImage,
  },
  {
    id: '5',
    name: 'Café com Leite',
    description: 'Meio a meio de expresso tradicional com leite vaporizado',
    price: 10.9,
    tags: ['tradicional', 'com leite'],
    image: CoffeeWithMilkImage,
  },
  {
    id: '6',
    name: 'Latte',
    description:
      'Uma dose de café expresso com o dobro de leite e espuma cremosa',
    price: 13.9,
    tags: ['tradicional', 'com leite'],
    image: LatteImage,
  },
  {
    id: '7',
    name: 'Capuccino',
    description:
      'Bebida com canela feita de doses iguais de café, leite e espuma',
    price: 15.9,
    tags: ['tradicional', 'com leite'],
    image: CapuccinoImage,
  },
  {
    id: '8',
    name: 'Macchiato',
    description:
      'Café expresso misturado com um pouco de leite quente e espuma',
    price: 14.9,
    tags: ['tradicional', 'com leite'],
    image: MacchiatoImage,
  },
  {
    id: '9',
    name: 'Mocaccino',
    description: 'Café expresso com calda de chocolate, pouco leite e espuma',
    price: 17.9,
    tags: ['tradicional', 'com leite'],
    image: MocaccinoImage,
  },
  {
    id: '9',
    name: 'Chocolate Quente',
    description: 'Bebida feita com chocolate dissolvido no leite quente e café',
    price: 10.9,
    tags: ['especial', 'com leite'],
    image: HotCoffeeImage,
  },
  {
    id: '10',
    name: 'Cubano',
    description:
      'Drink gelado de café expresso com rum, creme de leite e hortelã',
    price: 13.9,
    tags: ['especial', 'alcoólico', 'gelado'],
    image: CubanCoffeeImage,
  },
  {
    id: '11',
    name: 'Havaiano',
    description: `Bebida 'a'docicada preparada com café e leite de coco`,
    price: 19.9,
    tags: ['especial'],
    image: HawaiianCoffeeImage,
  },
  {
    id: '12',
    name: 'Árabe',
    description: 'Bebida preparada com grãos de café árabe e especiarias',
    price: 25.9,
    tags: ['especial'],
    image: ArabianCoffeeImage,
  },
  {
    id: '13',
    name: 'Irlandês',
    description: 'Bebida a base de café, uísque irlandês, açúcar e chantilly',
    price: 22.9,
    tags: ['especial', 'alcoólico'],
    image: IrishCoffeeImage,
  },
]
