import { FC, PropsWithChildren } from "react"
import styled from "styled-components"

const Board: FC<PropsWithChildren> = ({ children }) => {
  return <Layout>{children}</Layout>
}

const Layout = styled.div`
  display: grid;
  grid-template-rows: 125px repeat(9, 90px) 125px;
  grid-template-columns: 125px repeat(9, 90px) 125px;
  grid-template-areas:
    "u v w x y z A B C D E"
    "t O O O O O O O O O F"
    "s O O O O O O O O O G"
    "r O O O O O O O O O H"
    "q O O O O O O O O O I"
    "p O O O O O O O O O J"
    "o O O O O O O O O O K"
    "n O O O O O O O O O L"
    "m O O O O O O O O O M"
    "l O O O O O O O O O N"
    "k j i h g f e d c b a";
  grid-gap: 2px;
  margin: 50px auto;
  width: 1084px;
  height: 1084px;
  background: ${(props) => props.theme.black};
  border: 2px solid ${(props) => props.theme.black};
`

export default Board
