import axios from 'axios';
import React, { useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import useSWR from 'swr';
import { BASE_URL, fetcher } from '../Utils';
import Container from './Container';
import Loader from './Loader';
import Comments from './Comments';
import Delete from './Delete';

const Post = () => {
  const { postid, id } = useParams();
  const history = useHistory();
  const { data, error } = useSWR(`${BASE_URL}/posts/${postid}`, fetcher);
  const [comments, setComments] = useState([]);
  const [loading, setLoading] = useState(false);

  if (error) {
    return (
      <Container>
        <button onClick={() => history.goBack()} className="btn">
          Back
        </button>
        <h4>Error Occured</h4>
      </Container>
    );
  }

  const fetchComments = async () => {
    try {
      setLoading(true);
      const { data: commentsData } = await axios.get(
        `${BASE_URL}/posts/${postid}/comments`
      );
      setComments(commentsData);
      setLoading(false);
    } catch (err) {
      setLoading(false);
      console.error(err);
    }
  };

  const deletePost = async () => {
    try {
      await axios.delete(`${BASE_URL}/posts/${postid}`);
      history.push(`/posts/${id}`);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <Container>
      <button onClick={() => history.goBack()} className="btn">
        Back
      </button>
      {!data ? (
        <Loader />
      ) : (
        <div className="posts">
          <div className="card">
            <button className="delete" onClick={deletePost}>
              <Delete />
            </button>
            <h4>{data.title}</h4>
            <p>{data.body}</p>

            {comments.length > 0 ? (
              <>
                <h3
                  style={{
                    color: 'var(--button)',
                  }}
                >
                  Comments
                </h3>
                <Comments {...{ comments }} />
              </>
            ) : (
              <button
                className="btn"
                onClick={fetchComments}
                disabled={loading}
              >
                Show Comments
              </button>
            )}

            {loading && <Loader />}
          </div>
        </div>
      )}
    </Container>
  );
};

export default Post;
