import React from 'react';

const Comment = ({ comment }) => {

  return <div className="comment">
    <h4>{comment.name}</h4>
    <p>{comment.body}</p>
  </div>;
};

const Comments = ({ comments }) => {
  return (
    <>
      {comments.map((comment) => (
        <Comment key={comment.id} {...{ comment }} />
      ))}
    </>
  );
};

export default Comments;
