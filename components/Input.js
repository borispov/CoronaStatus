import styled from 'styled-components'

const Input = styled.input`
  margin: 0 auto;
margin: 12px;
  outline: none;
  max-width: 720px;
  width: 100%;
  text-align: center;
  border-radius: 6px;
  background: #f1f1f1;
  font-size: 1.1rem;
  padding: 8px 4px;
`
export default (props) => (
  <div>
    <Input {...props}/>
  </div>
)
