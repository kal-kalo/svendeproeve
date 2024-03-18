
import { useParams } from "react-router-dom";
import React, { useState } from 'react';
import Popup from "../components/Popup";
import useFetch from '../hooks/useFetch';
import { useAuthContext } from "../hooks/useAuthContext";
import useEnroll from "../hooks/useEnroll";


export default function ClassDetails() {
  const { classID } = useParams();
  const { user } = useAuthContext()
  const { joined, togleEnroll, isPending, data, error, enrollError } = useEnroll();
  const [showPopup, setShowPopup] = useState(false);

  const handleEnroll = async () => {

    if (!user) {
      setShowPopup(true);
      return;
    }
    togleEnroll()
  }

  return (
    <div className="class-details">


      {isPending && <div>Loading...</div>}
      {data && (
        <div >
          <div>
            <div style={{ position: 'relative', minWidth:"100px", minHeight:"300px", backgroundColor:"gray",}}>
              <img style={{ width: '100vw' }} src={data.asset.url/* .replace("http://localhost:4000","https://landrup-dans-api-3.onrender.com") */ } alt="class logo" />
              <button className="primary-btn" style={{ position: 'absolute', bottom: '10px', right: '10px' }} onClick={handleEnroll}>
                {joined ? 'Framed' : 'Tilmed'}
              </button>
            </div>
            {enrollError && <div className="error">{enrollError}</div>}
          </div>
          <article style={{ color: 'white' }}>
            <h2>{data.name}</h2>
            <p>{data.minAge}-{data.maxAge} år</p>
            <p>{data.description}</p>
          </article>
        </div>)}

      {showPopup && <Popup onClose={() => setShowPopup(false)} />}
      {error && <div> error : {error} </div>}
    </div>


  );



}


