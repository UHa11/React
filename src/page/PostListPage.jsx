import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { Container } from '../components/styled/common'

const Header = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`
const NewPostButton = styled(Link)`
    display: inline-block;
    background-color: #63b6ff;
    color: white;
    padding: 12px 24px;
    text-decoration: none;
    margin: 12px;NewPostButton

    &:hover{
        opacity: 0.9;
        color: white;
    }
`
const PostListPage = () => {
  return (
    <Container>
        <Header>
            <h1>게시글 목록</h1>
            <NewPostButton>게시글 작성</NewPostButton>
        </Header>
    </Container>
  )
}

export default PostListPage