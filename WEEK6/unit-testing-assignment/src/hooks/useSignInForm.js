import { useState } from 'react';

export const useSignInForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);

    if (!username || !password) {
      setError('Please fill in all fields');
      return;
    }

    setLoading(true);

    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));

      if (username === 'validUser' && password === 'validPass') {
        setError(null);
        // lógica de inicio de sesión exitoso
      } else {
        setError('Invalid username or password');
      }
    } catch (error) {
      setError('Something went wrong. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

  return {
    username,
    password,
    error,
    loading,
    handleUsernameChange,
    handlePasswordChange,
    handleSubmit
  };
};
