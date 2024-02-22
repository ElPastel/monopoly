import { useState } from "react"
import styled from "styled-components"
import Input from "../ui/Input"

// interface PropsCorner {
//   area: string
// }

function UsersForm() {
  const [playersCount, setPlayersCount] = useState<number>(2)

  function handleChange(e: React.ChangeEvent<HTMLSelectElement>) {
    setPlayersCount(+e.target.value)
  }

  const inputArray = Array.from({ length: playersCount }, (_, index) => index)

  return (
    <Container>
      <Background />
      <Form>
        <Wrapper>
          <Label htmlFor="players-count">Выберите количество игроков</Label>
          <Select
            onChange={(e) => handleChange(e)}
            name="players"
            id="players-count"
          >
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
          </Select>
        </Wrapper>
        {inputArray.map((index) => (
          <Input key={index} index={index + 1} />
        ))}
        <Button type="submit">Начать игру</Button>
      </Form>
    </Container>
  )
}

const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  z-index: 5;
`
const Background = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: ${(props) => props.theme.black};
  opacity: 0.6;
`

const Form = styled.form`
  padding: 30px 50px 50px;
  width: 500px;
  background-color: ${(props) => props.theme.bg};
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 20px;
  margin: 0 auto;
  z-index: 5;
  border-top: 20px solid ${(props) => props.theme.red};
`
const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const Label = styled.label`
  font-size: 12px;
`

const Select = styled.select`
  width: 100px;
  height: 40px;
  border: 1px solid ${(props) => props.theme.black};
  background-color: ${(props) => props.theme.input};
  padding: 10px 14px;
  font-size: 16px;
  color: ${(props) => props.theme.black};

  &:hover,
  :focus,
  :active {
    box-shadow: 0 0 0 2px rgba(135, 135, 133, 0.6);
  }
`

const Button = styled.button`
  margin-top: 20px;
  text-transform: uppercase;
  height: 40px;
  border: none;
  background-color: ${(props) => props.theme.red};
  padding: 10px 14px;
  font-size: 16px;
  font-weight: 600;
  letter-spacing: 2px;
  color: ${(props) => props.theme.white};
  cursor: pointer;

  &:hover {
    background-color: ${(props) => props.theme.darkRed};
  }
`
export default UsersForm
