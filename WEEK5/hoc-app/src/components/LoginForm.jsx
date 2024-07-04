import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';

const LoginForm = () => {
  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setCredentials({
      ...credentials,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const credentialsTest = {
      email: "test@test.com",
      password: "test",
    };

    if (
      credentials.email !== credentialsTest.email ||
      credentials.password !== credentialsTest.password
    ) {
      alert("Correo y/o contraseña incorrectos");
    } else {
      localStorage.setItem('isLoggedIn', true);
      navigate('/welcome');
    }
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gray-700 p-10">
      <form onSubmit={handleSubmit}>
        <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-white">Login</h1>
        <section className="max-w-sm space-y-3">
          <input
            type="text"
            name="email"
            className="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
            placeholder="Email"
            onChange={handleChange}
          />
          <input
            type="password"
            name="password"
            className="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
            placeholder="Password"
            onChange={handleChange}
          />
        </section>
        <section className="flex justify-center">
          <button
            type="submit"
            className="inline-block rounded bg-primary m-4 px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-primary-3 transition duration-150 ease-in-out hover:bg-primary-accent-300 hover:shadow-primary-2 focus:bg-primary-accent-300 focus:shadow-primary-2 focus:outline-none focus:ring-0 active:bg-primary-600 active:shadow-primary-2 motion-reduce:transition-none bg-teal-600 hover:bg-teal-700"
          >
            Ingresar
          </button>
        </section>
      </form>
    </div>
  );
};

export default LoginForm;
