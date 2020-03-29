import styled from 'styled-components'

const Wrapper = styled.div`
  clear: both;
  position: fixed;
  bottom: 0;
  height: 3.5rem;
  width: 50%;
  background: #202124;
  color: #6BA5ED;
  margin-top: -3.5rem;
`

const Content = styled.div`
  text-align: center;
`

export default () => (
  <Wrapper>
    <Content>
      <h1>DO THE FIVE. <small>Help stop coronavirus</small></h1>
    </Content>
  </Wrapper>
)
