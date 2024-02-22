import styled from "styled-components"
import Board from "./board/Board"
import GameField from "./field/GameField/GameField"
import StartField from "./field/CornerFields/StartField"
import JailField from "./field/CornerFields/JailField"
import leftRow from "./data/leftRow"
import bottomRow from "./data/bottomRow"
import topRow from "./data/topRow"
import rightRow from "./data/rightRow"
import FreeParkingField from "./field/CornerFields/FreeParkingField"
import GoToJailField from "./field/CornerFields/GoToJailField"
import FieldCenter from "./field/FieldCenter"
// import { useState } from "react"
import { createPortal } from "react-dom"
import UsersForm from "./user/UsersForm"

function App() {
  // const [showModal, setShowModal] = useState<boolean>(false)
  return (
    <>
      <Container>
        <Board>
          <StartField area="a" />
          {bottomRow.map((field) => (
            <GameField key={field.id} field={field} />
          ))}
          <JailField area="k" />
          {leftRow.map((field) => (
            <GameField direction="left-row" key={field.id} field={field} />
          ))}
          <FreeParkingField area="u" />
          {topRow.map((field) => (
            <GameField direction="top-row" key={field.id} field={field} />
          ))}
          <GoToJailField area="E" />
          {rightRow.map((field) => (
            <GameField direction="right-row" key={field.id} field={field} />
          ))}
          <FieldCenter area="O" />
        </Board>
      </Container>
      {createPortal(<UsersForm />, document.body)}
    </>
  )
}

const Container = styled.main`
  margin: 0 auto;
`

export default App
