import { Link, useParams } from "react-router-dom";
import React, { useState, useEffect } from 'react';
import useFetch from '../hooks/useFetch';
//import { useAuthContext } from "../hooks/useAuthContext";

export default function MyScheduleDetails() {
  const { activityId } = useParams();
  const user = JSON.parse(localStorage.getItem('user')) || {};


  const { data, isPending, error } = useFetch( `https://landrup-dans-api-3.onrender.com/api/v1/users/${user.userId}/roster/${activityId}`, { headers: {'Authorization': `Bearer ${user.token}`} } )

  return (
    <div className="activity-details m-4 text-white">
      {data&&<h1 className="text-3xl mb-4">{data[0]? data[0].activity : "Not assigned yet"}</h1>}
      {error && <div>{error}</div>}
      {isPending && <div>Loading...</div>}
      {data&&data.map((item,index)=>(
        <div key={index}>
          <p>{item.firstname} {item.lastname}</p>
        </div>
      ))}
    </div>
  );
}


