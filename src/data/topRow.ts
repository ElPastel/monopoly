import {
  faFaucetDrip,
  faQuestion,
  faTrain,
} from "@fortawesome/free-solid-svg-icons"
import theme from "../assets/styles/theme"
import { BarColors, Field, FieldTypes } from "../field/GameField/types"

const topRow: Field[] = [
  {
    id: 1,
    type: FieldTypes.STREET,
    cardName: "Ул. Тверская",
    price: 220,
    barColor: BarColors.RED,
    area: "v",
  },
  {
    id: 2,
    type: FieldTypes.ICON,
    cardName: "Шанс",
    icon: faQuestion,
    iconColor: theme.darkBlue,
    area: "w",
  },
  {
    id: 3,
    area: "x",
    type: FieldTypes.STREET,
    cardName: "Пушкинская ул.",
    price: 220,
    barColor: BarColors.RED,
  },
  {
    id: 4,
    area: "y",
    type: FieldTypes.STREET,
    cardName: "Площадь маяковского",
    price: 240,
    barColor: BarColors.RED,
  },
  {
    id: 5,
    type: FieldTypes.ICON,
    cardName: "Казанская железная дорога",
    icon: faTrain,
    iconColor: theme.black,
    price: 200,
    area: "z",
  },
  {
    id: 6,
    type: FieldTypes.STREET,
    cardName: "Ул. Грузинский вал",
    price: 260,
    barColor: BarColors.YELLOW,
    area: "A",
  },
  {
    id: 7,
    type: FieldTypes.STREET,
    cardName: "Ул. Вавилова",
    price: 180,
    barColor: BarColors.YELLOW,
    area: "B",
  },
  {
    id: 8,
    type: FieldTypes.ICON,
    cardName: "Водопровод",
    price: 150,
    icon: faFaucetDrip,
    area: "C",
    iconColor: theme.darkBlue,
  },
  {
    id: 9,
    type: FieldTypes.STREET,
    cardName: "Рублевское шоссе",
    price: 200,
    barColor: BarColors.YELLOW,
    area: "D",
  },
]

export default topRow
