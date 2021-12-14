import React from 'react'
import styled from 'styled-components'

const PostList = ({posts, handleDelete}) => {
    
    return (
        <div>
            <h2>Hello World</h2>
            {
                posts.map((post, index)=>(
                    <Wrapper key={index}>
                        <h2>{post.title}</h2>
                        <p>{post.text}</p>
                        <h2>{post.author}</h2>
 <button onClick={() =>handleDelete(post.id)}>Delete blog</button>
                    </Wrapper>
                ))
            }
        </div>
    )
}

export default PostList
const Wrapper = styled.div``