import React from 'react';
import '../index.css';
import { useParams , Link } from 'react-router-dom';

const PostPage = ({ posts, handleDelete}) => {
  const { id } = useParams();
  const post = posts.find(post => (post.id).toString() === id )
  return (
    
    <main className='PostPage'>
      <article className='post'>
        {post &&
          <>
            <h2>{post.title}</h2>
            <p className='postDate'>{post.dateTime}</p>
            <p className='postBody'>{post.body}</p>
            <button onClick={() => {handleDelete(post.id)}}>
              Delete Post
            </button>

          </>
        }

        {!post && 
        <>
          <h2>Post Not Found</h2>
          <Link to="/">Return To Home Page</Link>
        </>}
      </article>
    </main>
  )
}

export default PostPage