import styled from "styled-components"

interface PropsCorner {
  area: string
}

function FieldCenter(props: PropsCorner) {
  return (
    <Container $area={props.area}>
      <Title>Монополия</Title>
    </Container>
  )
}

const Container = styled.div<{ $area: string }>`
  background: ${(props) => props.theme.bg};
  text-align: center;
  grid-area: ${(props) => props.$area};
  display: flex;
  align-items: center;
  justify-content: center;
`

const Title = styled.h1`
  font-size: 80px;
  letter-spacing: 10px;
  color: rgba(0 0 0 / 0.2);
  transform: rotate(-45deg);
`

export default FieldCenter
