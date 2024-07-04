import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const withAuth = (WrappedComponent) => {
  return (props) => {
    const navigate = useNavigate();

    useEffect(() => {
      const isAuthenticated = () => {
        return localStorage.getItem('isLoggedIn') === 'true';
      };

      if (!isAuthenticated()) {
        navigate('/login');
        alert('Debes iniciar sesión');
      }
    }, [navigate]);

    return <WrappedComponent {...props} />;
  };
};

export default withAuth;
