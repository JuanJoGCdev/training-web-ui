import React from 'react';
import { render, screen } from '@testing-library/react';
import SignInForm from './SignInForm';




test('renders Sign In form elements', () => {
  render(<SignInForm />);

  // Comprobación del título Sign In
  expect(screen.getByRole('heading', { name: /sign in/i })).toBeInTheDocument();
  // Comprobación del campo de entrada del nombre de usuario
  expect(screen.getByLabelText('Username')).toBeInTheDocument();
  // Comprobación del campo de entrada de la contraseña
  expect(screen.getByLabelText('Password')).toBeInTheDocument();
  // Comprobación del botón de inicio de sesión
  expect(screen.getByRole('button', { name: /sign in/i })).toBeInTheDocument();
  // Comprobación del enlace Forgot Password
  expect(screen.getByText('Forgot Password')).toBeInTheDocument();
  // Comprobación del título New User
  expect(screen.getByRole('heading', { name: /new user/i })).toBeInTheDocument();
  // Comprobación del botón Sign Up
  expect(screen.getByRole('button', { name: /sign up/i })).toBeInTheDocument();
});

