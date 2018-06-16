import React from 'react'
import Link from 'gatsby-link'

export default ({ article }) => (
  <div>
    <img src={`${article.heroImage.file.url}?fit=scale&w=350&h=196`} alt="" />
    <h3>
      <Link to={`/projects/${article.slug}`}>{article.title}</Link>
    </h3>
    <small>{article.publishDate}</small>
  </div>
)
