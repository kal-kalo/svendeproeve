import React, { useState, useEffect } from 'react';
import { Link, Outlet, useLocation, useParams } from 'react-router-dom';
import useFetch from '../hooks/useFetch';
import ActivitiesList from '../components/ActivitiesList';


function Activities() {
    
  const { data, isPending, error } = useFetch('https://landrup-dans-api-3.onrender.com/api/v1/activities')

  return (
    <div>
      <h1 className='text-white text-2xl m-6'>Aktiviteter</h1>
     {error && <div>{error}</div>}
     {isPending && <div>Loading...</div>}
     {data && <ActivitiesList activities={data} /> }
    </div>

  );
}

export default Activities;
