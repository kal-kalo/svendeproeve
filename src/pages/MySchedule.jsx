import { useState, useEffect } from 'react';
import { useAuthContext } from "../hooks/useAuthContext";
import useFetch from '../hooks/useFetch';
import { Link } from 'react-router-dom';

export default function MySchedule() {

  const user = JSON.parse(localStorage.getItem('user')) || {};

  const { data, isPending, error } = useFetch('https://landrup-dans-api-3.onrender.com/api/v1/users/' + user.userId, {
    headers: {
      'Authorization': `Bearer ${user.token}`
    }
  })



  return (
    <div>
      <h1 className='pl-2 text-xl'>Kalander</h1>
      {error && <div>{error}</div>}
      {isPending && <div>Loading...</div>}
      {data && data['activities'].length > 0 ? (
        data['activities'].map(item => (
          <Link to={`/my-sechdule/` + item.id} key={item.id}>
            <div className='card'>
              <p>{item.name}</p>
              <p>{item.weekday} {item.time}</p>
            </div>
          </Link>
        ))
      ) : (
        <p>No activities yet</p>
      )}
    </div>
  );
}
