import React from 'react'
import { Link } from 'react-router-dom'

const Post = ({post, key}) => {
  return (
    <article className="post">
        <Link to={`/post/${post.id}`}>
              <h2>{post.title}</h2>
              <p className="postDate">{post.datetime}</p>
        </Link>
    <p className='postBody'>{
        (post.body) <= 25 ?
        post.body
        : `${post.body.slice(0,25)}...`
    }
    </p>
    </article>
  )
}

export default Post