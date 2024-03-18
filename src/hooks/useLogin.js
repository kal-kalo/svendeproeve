import { useState } from 'react'
import { useAuthContext } from './useAuthContext'
import { useNavigate } from "react-router-dom";

export const useLogin = () => {
  const [error, setError] = useState(null)
  const [isLoading, setIsLoading] = useState(null)
  const { dispatch } = useAuthContext()
const navigate = useNavigate()
  const login = async (username, password) => {
    setIsLoading(true)
    setError(null)

    try {
      const response = await fetch('https://landrup-dans-api-3.onrender.com/auth/token', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password })
      })

      if (!response.ok) {
        const errorMessage = await response.text(); // Read the response body as text
        setIsLoading(false);

        if (response.status === 401) {
          setError("Incorrect credentials");
        } else if (response.status === 500) {
          setError('Server error - try again');
        } else {
          setError(`An error occurred: ${errorMessage}`);
        }
        return; // Exit the function early
      }

      const json = await response.json();

      // save the user to local storage
      localStorage.setItem('user', JSON.stringify(json));

      // update the auth context
      dispatch({ type: 'LOGIN', payload: json });

      // update loading state
      setIsLoading(false);
      
      navigate("/activities")
    } catch (error) {
      setIsLoading(false);
      setError('An error occurred. Please try again later.');
      console.error('Error during login:', error);
    }
  }


  return { login, isLoading, error }
}

/////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////
