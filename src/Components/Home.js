import { useMemo } from 'react';
import useSWR from 'swr';
import { BASE_URL, fetcher } from '../Utils';
import Users from './Users';
import Loader from './Loader';
import Container from './Container';

const Home = () => {
  const { data } = useSWR(`${BASE_URL}/users`, fetcher);
  const userData = useMemo(() => data, [data]);

  return (
    <Container>{!data ? <Loader /> : <Users data={userData} />}</Container>
  );
};

export default Home;
