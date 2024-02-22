import { faCar } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import styled from "styled-components"
import theme from "../../assets/styles/theme"

interface PropsCorner {
  area: string
}

function FreeParkingField(props: PropsCorner) {
  return (
    <Corner $area={props.area}>
      <Content>
        <p>Бесплатная</p>
        <FontAwesomeIcon size="5x" color={theme.red} icon={faCar} />
        <p>Стоянка</p>
      </Content>
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
  justify-content: center;
  transform: rotate(135deg);
  display: flex;
  gap: 4px;
  flex-direction: column;
  height: 100%;
  width: 100%;
  font-size: 10px;
  padding-top: 4px;
`

export default FreeParkingField
