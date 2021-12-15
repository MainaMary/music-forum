import axios from 'axios'
import React, { useState } from 'react'
import styled from 'styled-components'
const CreatePost = () => {
    const url = "http://localhost/5000/postsData";
    const [title, setTitle] = useState("")
    const [forum, setForum] = useState("")
    const [author, setAuthor] = useState("")
    
   
    const handleSubmit = (e) => {
        e.preventDefault();
        const post = { title, forum, author }
        console.log(post)
        const createPosts = () => {
            axios({
                method: 'POST',
                url,
                headers: { "Content-Type": "application/json" },
                
                body: JSON.stringify(post)
            })
        }
        createPosts()
        

    }

    return (
        <>
            <Title>Add blog Post</Title>
            <FormWrapper>
                <Form onSubmit={handleSubmit}>
                    <Wrap>
                        <label>Song Title</label>
                        <input type="text" value={title} name="title" required onChange={(e) => { setTitle(e.target.value) }} />
                    </Wrap>
                    <Wrap>
                        <label>Song Author </label>
                        <input type="text" value={author} name="author" required onChange={(e) => { setAuthor(e.target.value) }} />
                    </Wrap>
                    <Wrap>
                        <label>Song </label>
                        <textarea required value={forum} onChange={(e) => { setForum(e.target.value) }}>

                        </textarea>

                    </Wrap>
                    <wrap>
                        <Button>Create post</Button>
                    </wrap>
                </Form>
            </FormWrapper>
            <p>{title}</p>
            <p>{forum}</p>
            <p>{author}</p>
        </>
    )
}

export default CreatePost

const Form = styled.form`
box-shadow: 0 0 3px #000;
width: 400px;
padding: 10px 20px;
border-radius: 10px;
`

const Title= styled.h2`
text-align: center;
`
const Wrap = styled.div`

margin: 20px auto;
label{
    display: block;
}
input, textarea{
    width: 80%;
}
`
const FormWrapper = styled.div`
display: flex;
justify-content: center;
`

const Button = styled.button`
 outline: none;
 border: none;
 text-align: center;
 padding: 10px 14px;
`

