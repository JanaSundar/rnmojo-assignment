import React from 'react';
import { Link, useParams } from 'react-router-dom';

const Card = ({ post }) => {
  const { id } = useParams();
  return (
    <div className="card">
      <h4>{post.title}</h4>
      <p>{post.body.substr(0, 100)}...</p>
      <Link
        to={{
          pathname: `/posts/${id}/${post.id}`,
          state: post,
        }}
        className="btn"
      >
        View Post
      </Link>
    </div>
  );
};

export default Card;
