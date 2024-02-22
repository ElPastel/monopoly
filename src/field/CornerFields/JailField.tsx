import { faUserSecret } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import styled from "styled-components"

interface PropsCorner {
  area: string
}

function JailField(props: PropsCorner) {
  return (
    <Corner $area={props.area}>
      <Just>Просто</Just>
      <JailContainer>
        <Wrapper>
          <p>В</p>
          <Grid>
            <Bar />
            <Bar />
            <Bar />
          </Grid>
          <p>Тюрьме</p>
          <Person icon={faUserSecret} />
        </Wrapper>
      </JailContainer>
      <Visiting>Посетили</Visiting>
    </Corner>
  )
}

const Corner = styled.div<{ $area: string }>`
  background: ${(props) => props.theme.bg};
  justify-content: flex-start;
  height: 125px;
  width: 125px;
  grid-area: ${(props) => props.$area};
  display: grid;
  grid-template-columns: 35px 90px;
  grid-template-rows: 90px 35px;
`

const Just = styled.div`
  writing-mode: vertical-rl;
  padding: 25px 5px;
`

const Visiting = styled.div`
  padding: 5px 50px;
`

const JailContainer = styled.div`
  background-color: ${(props) => props.theme.orange};
  border-left: 2px solid ${(props) => props.theme.black};
  border-bottom: 2px solid ${(props) => props.theme.black};
`
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  transform-origin: center;
  align-items: center;
  transform: rotate(45deg);
  justify-content: space-around;
  height: 100%;
  width: 100%;
`

const Grid = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  position: relative;
  width: 55px;
  height: 55px;
  background: ${(props) => props.theme.bg};
  border: 2px solid ${(props) => props.theme.black};
`

const Bar = styled.div`
  height: 55px;
  width: 2px;
  background: ${(props) => props.theme.black};
`

const Person = styled(FontAwesomeIcon)`
  position: absolute;
  transform: translate(-50%, -50%);
  top: 50%;
  left: 50%;
  font-size: 40px;
`

export default JailField
