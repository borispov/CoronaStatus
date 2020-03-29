import Head from 'next/head'
import Link from 'next/link'
import styled from 'styled-components'
import Footer from './Footer'


const Layout = styled.div`
  margin: 0 auto;
`

const Content = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`

export default (props) => (
  <Layout>

    <Head>
      <title>{props.title}</title>
    </Head>

    <Header title={props.title} theme={props.theme} isHeb={isHeb} />

    <main>
      {props.children}
    </main>

    <Footer />

  </Layout>
)
