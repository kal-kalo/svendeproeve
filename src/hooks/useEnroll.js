import { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";
import { useAuthContext } from "../hooks/useAuthContext";

const useEnroll = () => {

    const [joined, setJoined] = useState(null);
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    const [isPending, setIsPending] = useState(true);
    const { classID } = useParams();
    const [enrollError, setEnrollError] = useState(null);

    const { user } = useAuthContext()

    useEffect(() => {

        fetch('https://landrup-dans-api-3.onrender.com/api/v1/activities/' + classID)
            .then(res => {
                if (!res.ok) { // error coming back from server
                    throw Error('could not fetch the data for that resource');
                }
                return res.json();
            })
            .then(data => {
                console.log(`enroll staus for user${user.userId} fetched successfully. user is joined: ${data.users.some(item => item.id === user.userId)}`)
                setIsPending(false);
                setData(data);
                setError(null);

                data.users.some(item => item.id === user.userId) ? setJoined(true) : setJoined(false)
            })
            .catch(err => {
                // auto catches network / connection error
                setIsPending(false);
                setError(err.message);
                console.log("catch block,",err.message)

            })

    }, [classID, user])

    const togleEnroll = async () => {

        try {
            const response = await fetch(`https://landrup-dans-api-3.onrender.com/api/v1/users/${user.userId}/activities/${classID}`, {
                method: joined ? 'DELETE' : 'POST',
                headers: { 'Authorization': `Bearer ${user.token}` },
            });

            if (response.ok) {
                setJoined(!joined);
                setEnrollError(null)
            } else if (response.status === 401) {
                
                setEnrollError('not authorized')
            } else if(response.status === 500) {
               
                setEnrollError('Server error - try later')
            }
        } catch (error) {
          
            setEnrollError(error)
        }
    };

    return { joined, error, enrollError, togleEnroll, isPending, data };
};

export default useEnroll