import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { Container } from '../components/styled/common'

const Title = styled.h1`
    color: black;
    margin-bottom: 24px;
`

const Button = styled(Link)`
    display: inline-block;
    background-color: #63b6ff;
    color: white;
    padding: 12px 24px;
    text-decoration: none;
    margin: 12px;

    &:hover{
        opacity: 0.9;
    }
`
const HomePage = () => {
  return (
    <Container>
        <Title>게시판 관리</Title>
        <Button to="/posts">게시글 목록</Button>
        <Button to="/posts/new">게시글 작성</Button>
    </Container>
  )

}

export default HomePage