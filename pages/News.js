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
  transition: all .6s ease-in-out;
  @media (max-width: 768px) {
    width: 100%;
    max-width: 100%;
  }
`

const NewsCard = styled.div`
  display: flex;

  border-radius: 6px;
  border: 1px solid ${props => props.theme.menuBorder};
  border-top: 4px solid ${props => props.theme.menuBorder};

  flex-direction: column;
  width: 100%;
  max-width: 100%;
  justify-content: space-between;
  margin: 16px auto;
  height: auto;
  @media (max-width: 568px) {
    border: 1px solid ${props => props.theme.blueTheme};
    border-top: 6px solid ${props => props.theme.blueTheme};
  }
`

const NewsBanner = styled.div`
  display: block;
  margin-left: 8px;
  width: 124px;
  height: auto;
  border: 0;
  // flex: 0 0 20%;
  img {
    width: 124px;
    height: 100%;
  }
`

const Source = styled.h1`
  margin-right: 24px;
  width: 100%;
  display: block;
  text-align: center;
  font-size: 12px;
  font-weight: 700;
  color: ${props => props.theme.test};
  @media (max-width: 768px) {
    padding: 0;
  }
`

const Title = styled(S.Heading2)`
  font-weight: 700;
  font-family: 'Roboto';
  color: ${props => props.theme.color};
  @media (max-width: 768px) {
    max-width: fit-content;
  }
`

const shortenSnippet = text => text.split(' ').slice(0, 40).join(' ') + '. . .';


const showSource = url => sourceList[url.split('.')[1]]


const News = ({ theme, isHeb, news }) => {

  const newsToTemplate = news => {
    return news.map((item, idx) => (
      <NewsCard key={idx}>
        <a style={{textDecoration: 'none'}} href={item.href}>
          <S.Flex justify='flex-start' margin='0'>
            <NewsBanner>
              <img src={item.image} alt={item.title}></img>
            </NewsBanner>
            <S.Flex column flex='0 1 80%' margin='12px 0px 18px 6px'>
              <Title fontSize='16px' color='#111'>{item.title}</Title>
             <S.Paragraph padding='0' noMargin fontSize='12px'>{shortenSnippet(item.description)}</S.Paragraph>
            </S.Flex>
          </S.Flex>
        </a>
        <S.Flex justify='space-between' bgColor='inverse' margin='0' padding='0 12px'>
          <S.Flex justify='center' alignItems='middle' column>
            <a style={{textDecoration: 'none', textAlign: 'center', color: 'white'}} href={item.href} >
              <Source>{showSource(item.href)}</Source>
            </a>
          </S.Flex>
          <S.Flex justify='flex-end' column alignItems='middle'>
            <S.Heading2 color="white">{dateHeb(item.date)}</S.Heading2>
          </S.Flex>
        </S.Flex>

      </NewsCard>
    ))
  }

  return (
    <Wrapper>
      <S.Container>
        <S.Flex column justify='baseline' >

          <S.FadeIn duration="1.8s" delay="0.1s">

            {newsToTemplate(news)}
          </S.FadeIn>

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
