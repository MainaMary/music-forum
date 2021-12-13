import React,{useState} from 'react'
import styled from 'styled-components'

const HomePage = () => {
    const [posts, setPosts] = useState(
        [
            {title: "Destiny", author:'Banky W', text: 'detiny'},
            {title: "Destiny", author:'Banky W', text: 'detiny'},
            {title: "Destiny", author:'Banky W', text: 'detiny'},
        ]
    )
    return (
        <Wrapper>
            
        </Wrapper>
    )
}

export default HomePage


const Wrapper = styled.div``