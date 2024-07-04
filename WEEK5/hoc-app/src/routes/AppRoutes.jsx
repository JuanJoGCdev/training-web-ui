import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginPage from '../page/LoginPage';
import WelcomePage from '../page/WelcomePage';
import withAuth from '../hoc/withAuth';

const AppRoutes = () => {
  const WelcomeWithAuth = withAuth(WelcomePage);

  return (
    <Router>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/welcome" element={<WelcomeWithAuth />} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;
