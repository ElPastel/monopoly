import {
  faCube,
  faDiamond,
  faQuestion,
  faTrain,
} from "@fortawesome/free-solid-svg-icons"
import theme from "../assets/styles/theme"
import { BarColors, Field, FieldTypes } from "../field/GameField/types"

const bottomRow: Field[] = [
  {
    id: 1,
    type: FieldTypes.STREET,
    cardName: "Житная ул.",
    price: 60,
    barColor: BarColors.DARK_PURPLE,
    area: "b",
  },
  {
    id: 2,
    type: FieldTypes.ICON,
    cardName: "Общественная казна",
    icon: faCube,
    area: "c",
    iconColor: theme.lightBlue,
  },
  {
    id: 3,
    area: "d",
    type: FieldTypes.STREET,
    cardName: "Нагатинская ул.",
    price: 60,
    barColor: BarColors.DARK_PURPLE,
  },
  {
    id: 4,
    type: FieldTypes.ICON,
    cardName: "Подоходный налог",
    icon: faDiamond,
    iconColor: theme.orange,
    price: 200,
    area: "e",
  },
  {
    id: 5,
    type: FieldTypes.ICON,
    cardName: "Рижская железная дорога",
    icon: faTrain,
    iconColor: theme.black,
    price: 200,
    area: "f",
  },
  {
    id: 6,
    type: FieldTypes.STREET,
    cardName: "Варшавское шоссе",
    price: 100,
    barColor: BarColors.LIGHT_BLUE,
    area: "g",
  },
  {
    id: 7,
    type: FieldTypes.ICON,
    cardName: "Шанс",
    icon: faQuestion,
    iconColor: theme.red,
    area: "h",
  },
  {
    id: 8,
    type: FieldTypes.STREET,
    cardName: "Ул. Огарева",
    price: 100,
    barColor: BarColors.LIGHT_BLUE,
    area: "i",
  },
  {
    id: 9,
    type: FieldTypes.STREET,
    cardName: "Первая парковая ул.",
    price: 120,
    barColor: BarColors.LIGHT_BLUE,
    area: "j",
  },
]

export default bottomRow
