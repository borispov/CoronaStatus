import styled from 'styled-components'

const Title = styled.h1`
  align-self: center;
  color: #e6e6e6;
  font-size: 4rem;
  font-family: monospace;
  text-align: center;
  text-shadow: 0 1px 35px rgba(5, 35, 10, 0.2);
`

const Wrap = styled.div`
  display: flex;
  justify-content: center;
  position: relative;
  height: 82px;
  width: 100%;
  background: linear-gradient(45deg, #5c0434, #000000d6);
  border-bottom: 1px solid darkblue;
  margin: 0 auto;
  margin-bottom: 48px;
`

export default ({ title }) => (
  <Wrap>
    <Title>{title}</Title>
  </Wrap>
)
