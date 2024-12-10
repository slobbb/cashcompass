import React, { useState, useEffect } from "react";
import '../App.css';
import { Link } from "react-router-dom"; 
import LoginModal from './LoginModal';
import RegisterModal from "./RegisterModal";

function Header({ onLogout, onLogin, userData }) {
    const [user, setUser ] = useState(userData);
    const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
    const [isRegisterModalOpen, setIsRegisterModalOpen] = useState(false);
    
    useEffect(() => {
        setUser (userData);
    }, [userData]);

    const openLoginModal = () => {
        setIsLoginModalOpen(true);
        setIsRegisterModalOpen(false);
    };

    const openRegisterModal = () => {
        setIsRegisterModalOpen(true);
        setIsLoginModalOpen(false);
    };

    const closeModal = () => {
        setIsLoginModalOpen(false);
        setIsRegisterModalOpen(false);
    };

    const handleLogin = (userData) => {
        setUser (userData);
        onLogin(userData); // Передаем данные пользователя в родительский компонент
        closeModal();
    };

    const handleLogout = () => {
        localStorage.removeItem('token');
        setUser (null);
        onLogout(); // Вызываем функцию выхода из родительского компонента
    };

    return (
        <header className="bg-gray-800 text-white">
            <div className="container mx-auto flex justify-between items-center p-4">
                <div className="text-2xl font-bold">
                    <Link to="/">CashCompass</Link>
                </div>
                <nav className="space-x-4">
                    <Link to="/" className="hover:text-gray-400">Home</Link> 
                    <Link to="/" className="hover:text-gray-400">About</Link> 
                    <Link to="" className="hover:text-gray-400">Services</Link>
                    <Link to="" className="hover:text-gray-400">Contact</Link>
                </nav>
                <div className="space-x-2">
                    {user ? (
                        <>
                            <span>Welcome, {user.username}!</span>
                            <button onClick={handleLogout} className="bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-4 rounded">
                                Logout
                            </button>
                        </>
                    ) : (
                        <>
                            <button onClick={openLoginModal} className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded">
                                Login
                            </button>
                            <button onClick={openRegisterModal} className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded">
                                Sign up
                            </button>
                        </>
                    )}
                </div>
            </div>
            {isLoginModalOpen && <LoginModal closeModal={closeModal} onLogin={handleLogin} />}
            {isRegisterModalOpen && <RegisterModal closeModal={closeModal} />}
        </header>
    );
}

export default Header;