import useSWR from 'swr';
import { useParams } from 'react-router-dom';
import { BASE_URL, fetcher } from '../Utils';
import Card from './Card';
import Container from './Container';
import Loader from './Loader';
import { useMemo, useState } from 'react';

const FilteredPost = ({ data }) => {
  const [value, setValue] = useState('');
  const filteredData = useMemo(() => {
    if (!value) return data;
    return data.filter((post) => {
      return post.title.toLowerCase().includes(value);
    });
  }, [value, data]);

  return (
    <>
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        className="search"
        placeholder="search posts"
      />
      <div className="posts">
        {filteredData.map((post) => (
          <Card key={post.id} post={post} />
        ))}
      </div>
    </>
  );
};

const Posts = () => {
  const { id } = useParams();
  const { data } = useSWR(`${BASE_URL}/posts?userId=${id}`, fetcher);

  return (
    <Container>{!data ? <Loader /> : <FilteredPost {...{ data }} />}</Container>
  );
};

export default Posts;
