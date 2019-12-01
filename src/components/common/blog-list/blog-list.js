import React, {useContext, useEffect} from 'react'
import {Link} from "react-router-dom"
import BlogContext from '../../../context/blog/blog-context'
import './blog-list.scss'

const BlogList = ({postCount}) => {
  const blogContext = useContext(BlogContext)

  useEffect(() => {
    blogContext.getBlogPosts()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const {posts, loading} = blogContext

  if (loading) return <p>Loading...</p>

  let postsToDisplay = posts.slice(0, postCount)

  const renderPost = (post) => {
    const {id, title, date, text, imgUrl} = post
    return (
      <Link key={id} to="/post" className="row align-items-center mb-5 mb-md-7 b-link">
        <div className="col-lg-5 order-lg-0 order-1">
          <h3 className="h2 mb-2">{title}</h3>
          <div className="text-uppercase text-muted mb-4">{date}</div>
          <div className="mb-4">
            {text}
          </div>

          <span className="h2">...</span>
        </div>
        <div className="col-lg-7 order-0 order-lg-1 mb-4">
          <img src={imgUrl} alt="" className="img-fluid"/>
        </div>
      </Link>
    )
  }

  return (
    <React.Fragment>
      {
        postsToDisplay.map(post => renderPost(post))
      }
    </React.Fragment>
  )
}

export default BlogList