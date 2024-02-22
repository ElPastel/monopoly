import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import styled from "styled-components"
import { PropsStreet, PropsWithIcon } from "./types"

function GameField({
  field,
  direction = "",
}: {
  field: PropsStreet | PropsWithIcon
  direction?: string
}) {
  return (
    <Wrapper className={direction} $area={field.area}>
      {field.type === "street" && <Bar $barcolor={field.barColor} />}
      <p>{field.cardName}</p>

      {field.type === "icon" && field.icon && (
        <FontAwesomeIcon
          size={field.price ? "4x" : "6x"}
          icon={field.icon}
          color={field.iconColor}
        />
      )}
      {field.price && <Price>₽{field.price}</Price>}
    </Wrapper>
  )
}

const Wrapper = styled.div<{ $area: string }>`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  grid-area: ${(props) => props.$area};
  height: 125px;
  width: 90px;
  position: relative;
  transform-origin: center;
  background: ${(props) => props.theme.bg};
  text-align: center;
  font-size: 10px;

  p:first-child {
    padding-top: 15px;
  }
  svg:last-child {
    padding-bottom: 15px;
  }
`

const Bar = styled.div<{ $barcolor: string }>`
  height: 25px;
  border-bottom: 2px solid ${(props) => props.theme.black};
  background-color: ${(props) => props.theme[`${props.$barcolor}`]};
`

const Price = styled.div`
  font-weight: 400;
  padding-bottom: 5px;
`

export default GameField
