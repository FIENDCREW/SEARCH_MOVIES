import React, { FC, useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';

interface IProps {
  Title: string;
}

const Search: FC<IProps> = ({ Title }) => {
  const dispatch = useDispatch();
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <div>
      <input
        type="text"
        placeholder="Search..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        name="movie"
        id=""
      />
      <button type="button">Поиск</button>
    </div>
  );
};

export default Search;
