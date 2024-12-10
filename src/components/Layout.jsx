import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function Layout({ children }) {
  const [user, setUser ] = useState(null);

  const handleLogin = (userData) => {
    setUser (userData);
  };

  const handleLogout = () => {
    setUser (null);
  };

  return (
    <>
      <Header user={user} onLogout={handleLogout} onLogin={handleLogin} />
      <main>{children}</main>
      <Footer />
    </>
  );
}