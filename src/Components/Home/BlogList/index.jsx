import React from 'react'
// import Blog from '../../../pages/Blog/Index'
import BlogItem from './BlogItem'
import './style.css';

const BlogList = ({blogs}) => {
  return (
    <div className='blogList-wrap'>
      {blogs.map(blog=> (
      <BlogItem blog={blog} key={blog.id} />
      ))}
    </div>
  )
}

export default BlogList
