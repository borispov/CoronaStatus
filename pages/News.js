import styled, { withTheme } from 'styled-components'
import Container from '../components/Container'
import { useState, useEffect } from 'react'

const Wrapper = styled.div`
  margin: 0 auto;
  width: 100%;
  direction: ltr;
`

const Flex = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
`

const NewsCard = styled.div`
  margin: 8px 12px;
  display: flex;
  flex-direction: row;
  padding: 16px 6px;
  border: 1px solid gray;
  justify-content: space-between;
`

const LeftWing = styled.div`
  display: flex;
`

const RightWing = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
`

const NewsTime = styled.p`
  font-weight: 700;
`

const NewsDescription = styled.p`
  font-weight: 400;
  font-size: 13px;
  padding: 2px 6px 8px;
`

const NewsTitle = styled.h2`
  font-size: 18px;
  padding: 2px 8px;
`

const NewsBanner = styled.div`
  width: 48px;
  height: 48px;
  display: block;
  border: 1px solid gray;
`

const Col = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
`

export default ({ theme, isHeb }) => {
  return (
    <Wrapper>
      <Container>
        <Flex>

          <NewsCard>
            <LeftWing>
              <NewsBanner />
              <Col>
                <NewsTitle>Breaking News</NewsTitle>
                <NewsDescription>Coronavirus has affectd millions of families leaving mothers and fathers unemployed having to feed their kids mouths</NewsDescription>
            </Col>
            </LeftWing>
            <RightWing>
              <NewsTitle> 9 days ago </NewsTitle>
            </RightWing>
          </NewsCard>

          <NewsCard>

            <LeftWing>
              <NewsBanner />
              <Col>
              <NewsTitle>Breaking News</NewsTitle>
              <NewsDescription>Coronavirus has affectd millions of families leaving mothers and fathers unemployed having to feed their kids mouths</NewsDescription>
            </Col>
            </LeftWing>
            <RightWing>
              <NewsTitle> 9 days ago </NewsTitle>
            </RightWing>

          </NewsCard>

        </Flex>
      </Container>
    </Wrapper>
  )
}
