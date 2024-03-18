import React, { useState } from 'react';
import useFetch from '../hooks/useFetch';
import ActivitiesList from '../components/ActivitiesList';
import SearchForm from '../components/SearchForm';

export default function Search() {
  const { data, isPending, error } = useFetch('https://landrup-dans-api-3.onrender.com/api/v1/activities');
  const [searching, setSearching] = useState(false);
  const [userInput, setUserInput] = useState('');

  return (
    <>
      <SearchForm setSearching={setSearching} setUserInput={setUserInput} />
      {error && <div>{error}</div>}
      {isPending && <div>Loading...</div>}
      {data && <ActivitiesList activities={!searching ? data : data.filter(item => item.name.toLowerCase().includes(userInput))} />}
    </>
  )
}