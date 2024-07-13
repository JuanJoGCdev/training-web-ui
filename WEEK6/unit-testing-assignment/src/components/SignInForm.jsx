import React from 'react';
import { useSignInForm } from '../hooks/useSignInForm';

const SignInForm = () => {
  const {
    username,
    password,
    error,
    handleUsernameChange,
    handlePasswordChange,
    handleSubmit
  } = useSignInForm();

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-lg shadow-md">
      <h1 className="text-2xl font-bold mb-4">Sign In</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="username" className="block text-gray-700">Username</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={handleUsernameChange}
            className="mt-1 p-2 w-full border rounded-lg"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="password" className="block text-gray-700">Password</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={handlePasswordChange}
            className="mt-1 p-2 w-full border rounded-lg"
          />
        </div>
        {error && <p className="text-red-500 mb-4">{error}</p>}
        <button
          type="submit"
          className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600"
        >
          Sign In
        </button>
      </form>
      <a href="/forgot-password" className="text-blue-500 hover:underline mt-4 inline-block">Forgot Password</a>
      <h2 className="text-xl font-bold mt-6">New User</h2>
      <button className="bg-green-500 text-white py-2 px-4 rounded-lg hover:bg-green-600 mt-2">
        Sign Up
      </button>
    </div>
  );
};

export default SignInForm;
