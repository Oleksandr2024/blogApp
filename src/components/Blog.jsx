import { useEffect, useState } from "react"
import { Link, useSearchParams } from "react-router-dom"
import {BlogFilter} from "./BlogFilter"

const Blog = () => {

    const [posts, setPosts] = useState([])
    const [searchParams, setSearchParams] = useSearchParams()

    const postQuery = searchParams.get('post') || ''
    const latest = searchParams.has('latest');

    const startsFrom = latest ? 80 : 1 //if checkbox is checked, search last 20 (80-100)
    
    useEffect(()=>{
        fetch("https://jsonplaceholder.typicode.com/posts")
         .then(res => res.json())
         .then(data => setPosts(data))
    }, [])

    return (
        <div className="blog">
            <h1>Our news</h1>
            <BlogFilter
                 postQuery={postQuery} 
                 latest={latest} 
                 setSearchParams={setSearchParams}/>
            <Link className="new-blog-a" to="/blogs/new">Add new post</Link>
            <br /><br />
            {
                posts.filter(
                    post => post.title.includes(postQuery) && post.id >= startsFrom
                    ).map(post => (
                     <Link key={post.id} to={`/blogs/${post.id}`}>
                        <p>{post.title}</p>
                    </Link>
                ))
            }
        </div>
    )
}

export default Blog