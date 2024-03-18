import { useEffect } from 'react';
import { Navigate } from 'react-router-dom';

const Logout = () => {
    useEffect(() => {
        // Remove token and user data from localStorage
        localStorage.removeItem('user'); 
        // Reload the page after a brief delay to ensure localStorage changes take effect
        setTimeout(() => {
            window.location.reload();
        }, 1000); 
    }, []);

    // Navigate the user to the "/activities" page immediately
    return <Navigate to="/activities" replace={true} />;
}

export default Logout;
