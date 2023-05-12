import { useRouter } from 'next/router';
import { useEffect } from 'react';

const withAuth = (Component) => {
  const Auth = () => {
    const router = useRouter() ; 
    useEffect(() => {
      // Check if the user is authenticated, redirect to login if not
      const isAuthenticated = localStorage.getItem("login") ;  // replace this with your actual authentication logic
      if (!isAuthenticated) {
        router.push('/login')
      }
    }, []);

    // If the user is authenticated, render the protected component
    return <Component/>
  }

  return Auth
}

export default withAuth