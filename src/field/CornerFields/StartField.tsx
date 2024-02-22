import { faArrowLeftLong } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import styled from "styled-components"

interface PropsCorner {
  area: string
}

function StartField(props: PropsCorner) {
  return (
    <Corner $area={props.area}>
      <Content>
        Получите
        <br />
        зарплату
        <br />
        200₽, когда вы проходите это поле
        <br />
        <Go>Вперед</Go>
      </Content>
      <Arrow size="4x" icon={faArrowLeftLong} />
    </Corner>
  )
}

const Corner = styled.div<{ $area: string }>`
  background: ${(props) => props.theme.bg};
  text-align: center;
  justify-content: flex-start;
  height: 125px;
  width: 125px;
  grid-area: ${(props) => props.$area};
`

const Content = styled.div`
  transform: rotate(315deg) translateX(-10%);
  white-space: pre-wrap;
`

const Go = styled.span`
  font-size: 24px;
  line-height: 30px;
`

const Arrow = styled(FontAwesomeIcon)`
  margin-top: 5px;
  margin-left: 60px;
  color: ${(props) => props.theme.red};
`

export default StartField
