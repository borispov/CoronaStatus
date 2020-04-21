import styled from 'styled-components'

const Wrapper = styled.div`
  clear: both;
  position: fixed;
  bottom: 0;
  // height: 3.5rem;
  height: auto;
  width: 100%;
  background: #202124;
  color: #6BA5ED;
  margin-top: -3.5rem;
  @media (max-width: 660px) {
    height: auto;
  }
`

const Content = styled.div`
  text-align: center;
`

// <h1>DO THE FIVE. <small>Help stop coronavirus</small></h1>

export default () => (
  <Wrapper>
    <Content>
      <h1>DO THE FIVE: &nbsp;&nbsp; <small><span className="letter">STAY</span> <i>home</i> &nbsp;&nbsp; <span className="letter">KEEP</span> <i>distance</i> &nbsp;&nbsp;  <span className="letter">WASH</span> <i>hands often</i> &nbsp;&nbsp; <span className="letter"> COVER</span> <i>your cough</i> &nbsp;&nbsp;   <span className='letter'>SICK?</span> <i>call ahead!</i></small></h1>
    </Content>
  <style jsx>{`
    div {
      padding: .25em;
    }
    h1 {
      font-size: 1rem;
    }
    .letter {
      color: rgba(180, 80, 20, 1);
    }
    small {
      font-size: 10px;
    }
  `}</style>
  </Wrapper>
)
