import styled from "styled-components"

function Input({ index }: { index: number }) {
  return (
    <Label>
      <Name>Имя</Name>
      <InputStyled type="text" placeholder={`Игрок ${index}`} />
    </Label>
  )
}

const Label = styled.label`
  display: flex;
  align-items: center;
  justify-content: space-between;
`

const Name = styled.span`
  font-size: 12px;
`

const InputStyled = styled.input`
  width: 350px;
  height: 40px;
  border: 1px solid ${(props) => props.theme.black};
  background-color: ${(props) => props.theme.input};
  padding: 10px 14px;
  font-size: 16px;

  &:hover,
  :focus,
  :active {
    box-shadow: 0 0 0 2px rgba(135, 135, 133, 0.6);
  }
`

export default Input
