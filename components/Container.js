import styled from 'styled-components'

const Container = styled.div`
  max-width: 992px;
  margin: 0 auto;
  text-align: center;
`

export default (props) => <Container>{props.children}</Container>
