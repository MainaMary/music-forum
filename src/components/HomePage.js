import React, { useState, useEffect } from 'react'
import axios from "axios"
import PostList from './PostList'
const HomePage = () => {
    const [posts, setPosts] = useState(null)
    const [isLoading , setIsLoading] = useState(true)
    
    const handleDelete = (id) => {
        const newPosts = posts.filter(p => p.id !== id)
        setPosts(newPosts)
    }
    useEffect(()=>{
      const fetchPosts = async  () =>{
          const {data} = await axios.get("http://localhost/5000/postsData")
          .catch(err =>{
              console.log(err.message)
          })

          setPosts(data)
          setIsLoading(!true)
      } 
       fetchPosts()
    }, [])
    return (
        <div>
            {isLoading  && <div>Loading....</div>}
            {posts &&  <PostList posts={posts} handleDelete={handleDelete} />
            }
           
        </div>
    )
}

export default HomePage


