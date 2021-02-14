import axios from 'axios';
import { Link } from 'react-router-dom';

const BASE_URL = 'https://jsonplaceholder.typicode.com';

const fetcher = async (...args) => {
  try {
    const { data } = await axios.get(...args);
    return data;
  } catch (err) {
    throw new Error('An error occurred while fetching the data.');
  }
};

const DefaultColumnFilter = ({
  column: { filterValue, preFilteredRows, setFilter },
}) => {
  const count = preFilteredRows.length;

  return (
    <input
      value={filterValue || ''}
      onChange={(e) => {
        setFilter(e.target.value || undefined); // Set undefined to remove the filter entirely
      }}
      placeholder={`Search ${count} records...`}
    />
  );
};

const Columns = [
  {
    Header: 'S No',
    accessor: 'id',
    disableFilters: true,
    width: 20,
  },
  {
    Header: 'Name',
    accessor: 'name',
  },
  {
    Header: 'Company',
    accessor: 'company.name',
  },
  {
    Header: 'Posts',
    accessor: 'posts',
    Cell: ({ row }) => <Link to={`/posts/${row.values.id}`}>View Posts</Link>,
    disableFilters: true,
  },
];

export { Columns, fetcher, BASE_URL, DefaultColumnFilter };
