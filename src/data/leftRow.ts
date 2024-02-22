import { faCube, faLightbulb, faTrain } from "@fortawesome/free-solid-svg-icons"
import theme from "../assets/styles/theme"
import { BarColors, Field, FieldTypes } from "../field/GameField/types"

const leftRow: Field[] = [
  {
    id: 1,
    type: FieldTypes.STREET,
    cardName: "Ул. Полянка",
    price: 140,
    barColor: BarColors.PURPLE,
    area: "l",
  },
  {
    id: 2,
    type: FieldTypes.ICON,
    cardName: "Электро-\nстанция",
    price: 150,
    icon: faLightbulb,
    area: "m",
    iconColor: theme.yellow,
  },
  {
    id: 3,
    area: "n",
    type: FieldTypes.STREET,
    cardName: "Ул. Сретенка",
    price: 140,
    barColor: BarColors.PURPLE,
  },
  {
    id: 4,
    area: "o",
    type: FieldTypes.STREET,
    cardName: "Ростовская набережная",
    price: 160,
    barColor: BarColors.PURPLE,
  },
  {
    id: 5,
    type: FieldTypes.ICON,
    cardName: "Курская железная дорога",
    icon: faTrain,
    iconColor: theme.black,
    price: 200,
    area: "p",
  },
  {
    id: 6,
    type: FieldTypes.STREET,
    cardName: "Рязанский проспект",
    price: 180,
    barColor: BarColors.ORANGE,
    area: "q",
  },
  {
    id: 7,
    type: FieldTypes.ICON,
    cardName: "Общественная казна",
    icon: faCube,
    iconColor: theme.lightBlue,
    area: "r",
  },
  {
    id: 8,
    type: FieldTypes.STREET,
    cardName: "Ул. Вавилова",
    price: 180,
    barColor: BarColors.ORANGE,
    area: "s",
  },
  {
    id: 9,
    type: FieldTypes.STREET,
    cardName: "Рублевское шоссе",
    price: 200,
    barColor: BarColors.ORANGE,
    area: "t",
  },
]

export default leftRow
