import { IconProp } from "@fortawesome/fontawesome-svg-core"

export const enum FieldTypes {
  STREET = "street",
  ICON = "icon",
  CORNER = "corner",
}

export const enum BarColors {
  GREEN = "green",
  YELLOW = "yellow",
  RED = "red",
  ORANGE = "orange",
  PURPLE = "purple",
  DARK_PURPLE = "darkPurple",
  DARK_BLUE = "darkBlue",
  LIGHT_BLUE = "lightBlue",
}

export interface PropsStreet {
  id: number
  type: FieldTypes.STREET
  cardName: string
  price: number
  barColor: BarColors
  area: string
}

export interface PropsWithIcon {
  id: number
  type: FieldTypes.ICON
  cardName: string
  icon: IconProp
  iconColor: string
  price?: number
  area: string
}

export type Field = PropsStreet | PropsWithIcon
