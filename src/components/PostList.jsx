import React, { useEffect } from 'react'
import usePostStore from '../store/postStore';
import{
    Container,
    Loading,
    Error,
    ButtonContainer
} from './styled/PostList.styled'

const PostList = () => {
    const {posts,error,loading,getPosts} = usePostStore();

    useEffect(()=>{
        getPosts();
    },[getPosts]);

    if(loading) return <Loading>로딩중....</Loading>
    if(error) return <Error>dpfj qkftod</Error>
  return (
    <Container>
        {posts.map((post)=>(
            <div>
            <h1>{post.title}</h1>
            <Contant>{post.body}</Contant>
            
            <ButtonContainer>
                <Button>수정</Button>
                <Button>삭제</Button>
            </ButtonContainer>
            </div>
        ))}
    </Container>
  )
}

export default PostList