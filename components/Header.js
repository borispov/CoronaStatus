import styled from 'styled-components'

const Title = styled.h1`
  align-self: center;
  padding-top: 6px;
  color: #e6e6e6;
`

const Wrap = styled.div`
  position: relative;
  height: 64px;
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
