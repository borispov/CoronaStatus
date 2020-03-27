import styled from 'styled-components'

const Wrapper = styled.div`
  clear: both;
  position: relative;
  bottom: 0;
  height: 3.5rem;
  width: 100%;
  background: ${props => props.theme.color};
  color: ${props => props.theme.bgColor};
  margin-top: -3.5rem;
`

const Content = styled.div`
  text-align: center;
`

export default () => (
  <Wrapper>
    <Content>
      <h1>Coronavirus status</h1>
    </Content>
  </Wrapper>
)
