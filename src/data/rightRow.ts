import {
  faCube,
  faGem,
  faQuestion,
  faTrain,
} from "@fortawesome/free-solid-svg-icons"
import theme from "../assets/styles/theme"
import { BarColors, Field, FieldTypes } from "../field/GameField/types"

const rightRow: Field[] = [
  {
    id: 1,
    type: FieldTypes.STREET,
    cardName: "Ул. Щусева",
    price: 300,
    barColor: BarColors.GREEN,
    area: "F",
  },
  {
    id: 2,
    type: FieldTypes.STREET,
    cardName: "Гоголевский бульвар",
    price: 300,
    barColor: BarColors.GREEN,
    area: "G",
  },
  {
    id: 3,
    area: "H",
    type: FieldTypes.ICON,
    cardName: "Общественная казна",
    icon: faCube,
    iconColor: theme.lightBlue,
  },
  {
    id: 4,
    area: "I",
    type: FieldTypes.STREET,
    cardName: "Кутузовский проспект",
    price: 160,
    barColor: BarColors.GREEN,
  },
  {
    id: 5,
    type: FieldTypes.ICON,
    cardName: "Ленинградская железная дорога",
    icon: faTrain,
    iconColor: theme.black,
    price: 200,
    area: "J",
  },
  {
    id: 6,
    type: FieldTypes.ICON,
    cardName: "Шанс",
    icon: faQuestion,
    iconColor: theme.orange,
    area: "K",
  },
  {
    id: 7,
    type: FieldTypes.STREET,
    cardName: "Ул. Малая бронная",
    price: 350,
    barColor: BarColors.DARK_BLUE,
    area: "L",
  },
  {
    id: 8,
    type: FieldTypes.ICON,
    cardName: "Сверхналог",
    icon: faGem,
    price: 100,
    iconColor: theme.lightBlue,
    area: "M",
  },
  {
    id: 9,
    type: FieldTypes.STREET,
    cardName: "Ул. Арбат",
    price: 400,
    barColor: BarColors.DARK_BLUE,
    area: "N",
  },
]

export default rightRow
