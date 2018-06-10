import React from "react";
import { withRouteData, Link } from "react-static";

export default withRouteData(({ posts }) => (
  <div>
    <h1>Blog</h1>
    <br />
    All Posts:
    <ul>
      {posts.map(post => (
        <li key={post.id}>
          <Link to={`/blog/post/${post.id}/`}>{post.title}</Link>
        </li>
      ))}
    </ul>
  </div>
));
