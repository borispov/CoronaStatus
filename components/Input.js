import styled from 'styled-components'

const Input = styled.input`
  outline: none;
  max-width: 420px;
  width: ${props => props.btn ? '62px' : '85%'};
  margin: ${props => props.btn ? '0 8px' : 0};
  text-align: center;
  border-radius: 6px;
  background: ${props => props.theme.categoryColor};
  font-size: 1.1rem;
  padding: 8px 4px;
`
export default (props) => (
    <Input {...props}/>
)
