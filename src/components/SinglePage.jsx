import { useParams, Link, useNavigate } from "react-router-dom"
import { useState, useEffect } from "react"

const SinglePage = () => {
    
    const {id} = useParams()

    const [post, setPost] = useState(null)

    const navigate = useNavigate()

    const goBack = () => navigate(-1)

    useEffect(()=>{
        fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
         .then(res => res.json())
         .then(data => setPost(data))
    }, [id])
    
    return(
        <div>
            {
              post && (
                <>
                    <p>{post.title}</p>
                    <p>{post.body}</p>
                    <Link to={`/blogs/${id}/edit`}>Edit post</Link>
                    <button onClick={goBack}>Go back</button>
                </>
              )
            }
        </div>
    )
}

export default SinglePage
