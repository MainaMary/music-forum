import React from 'react'
import styled  from 'styled-components'
import {Link} from "react-router-dom"
const Navbar = () => {
    return (
        <Nav>
         <h1>Music App</h1>
         <Links>
         <Link to='/'>Home</Link>
         <Link to='/create'>New Post</Link>
         </Links>
        </Nav>
            
        
    )
}

export default Navbar

const Nav = styled.nav`
display: flex;
height: 70px;
align-items: center;
justify-content: space-between;
padding: 0 30px;

`
const Links = styled.div`
width: 40%;
    
a{
    text-decoration: none;
    font-size: 1.4em;
    padding: 0 30px;
    color: #000;
    font-weight: bold;
    
}
&:hover{
    color: #f1356d;
}
`