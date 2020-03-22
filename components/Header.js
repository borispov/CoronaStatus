import styled from 'styled-components'

const Title = styled.span`
  align-self: center;
  color: #e6e6e6;
  font-size: 4rem;
  font-family: monospace;
`

const Wrap = styled.div`
  display: flex;
  justify-content: center;
  position: relative;
  height: 82px;
  width: 100%;
  background: linear-gradient(45deg, #cc0404, #000000d6);
  text-align: center;
  border-bottom: 1px solid darkblue;
  margin-bottom: 48px;
`

export default ({ children }) => (
  <Wrap>
    <Title>{children}</Title>
  </Wrap>
)
