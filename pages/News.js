import styled, { withTheme } from 'styled-components'
import { useState, useEffect } from 'react'
import * as S from '../components/S'
import axios from 'axios'
import dateHeb from '../utils/dateHeb'


const sourceList = {
  maariv: 'מעריב', 
  ynet: 'YNET',
  israelhayom: 'ישראל היום'
}

const Wrapper = styled.div`
  margin: 0 auto;
  width: 85%;
  direction: rtl;
  @media (max-width: 768px) {
    width: 100%;
    max-width: 100%;
  }
`

const NewsCard = styled.div`
  margin: 8px 12px;
  display: flex;
  flex-direction: row;
  padding: 16px 6px;
  border: 1px solid gray;
  justify-content: space-between;
  @media (max-width: 768px) {
    width: 100%;
    max-width: 100%;
    flex-direction: column;
    padding: 0;
    margin: 0 auto;
  }
`

const NewsBanner = styled.div`
  margin-left: 42px;
  width: 48px;
  height: 48px;
  display: block;
  border: 1px solid gray;
  @media (max-width: 768px) {
    margin: 0;
    visibility: hidden;
  }
`

const Source = styled.h1`
  font-size: 12px;
  font-weight: 700;
  padding-bottom: 8px;
  transform: rotate(-15deg);
  @media (max-width: 768px) {
    transform: rotate(0);
    padding: 0;
  }

`

const showSource = url => sourceList[url.split('.')[1]]


const News = ({ theme, isHeb, news }) => {

  const newsToTemplate = news => {
    return news.map((item, idx) => (
      <NewsCard key={idx}>
        <a style={{textDecoration: 'none'}} href={item.href}>
        <S.Flex mCol>
          <NewsBanner>
            <img width="64" height="64" src={item.image} alt={item.title}></img>
          </NewsBanner>
          <S.Flex column alignItems>
            <S.Heading2 truncate nowrap fontSize='16px'>{item.title}</S.Heading2>
            <S.Paragraph padding='0' noMargin fontSize='12px'>{item.description}</S.Paragraph>
          </S.Flex>
        </S.Flex>
      </a>
      <S.Flex justify='space-evenly' margin='12px 0 0 0'>
        <S.Flex justify='center' alignItems column>
          <a style={{textDecoration: 'none'}} href={item.href} >
            <Source>{showSource(item.href)}</Source>
          </a>
        </S.Flex>
          <S.Flex justify='flex-end' column>
            <S.Heading2>{dateHeb(item.date)}</S.Heading2>
          </S.Flex>
      </S.Flex>

      </NewsCard>
    ))
  }

  return (
    <Wrapper>
      <S.Container>
        <S.Flex column justify='baseline' >

          {newsToTemplate(news)}

        </S.Flex>
      </S.Container>
    </Wrapper>
  )
}

News.getInitialProps = async ctx => {

  const { data } = await axios.get('https://ncorona.live/api/v1/news/heb')
  const news = data.data.sort((a,b) => new Date(b.date) - new Date(a.date))
  return { news }
}

export default News
