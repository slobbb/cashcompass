import React, { useState } from 'react';
import { toast } from 'react-toastify';

const LoginModal = ({ closeModal, onLogin }) => {
    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('http://localhost:3000/api/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ username: login, password }),
            });

            const data = await response.json();
            if (response.ok) {
                // Сохраните токен в localStorage
                toast.success('You successfully logged in!');
                localStorage.setItem('token', data.token);
                onLogin({ username: login }); // Передаем данные пользователя в родительский компонент
                closeModal(); // Закрываем модальное окно
            } else {
                toast.error('Incorrect login or password!');
            }
        } catch (error) {
            console.error('Ошибка при логине:', error);
            toast.error('An error occurred. Please try again later.');
        }
    };

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50">
            <div className="bg-gray-800 p-6 rounded shadow-md w-96">
                <h2 className="text-xl mb-4">Login</h2>
                <form onSubmit={handleLogin}>
                    <div className="mb-4">
                        <label className="block mb-2" htmlFor="login">Login</label>
                        <input
                            type="text"
                            id="login"
                            value={login}
                            onChange={(e) => setLogin(e.target.value)}
                            className="border text-black rounded w-full p-2"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block mb-2" htmlFor="password">Password</label>
                        <input
                            type="password"
                            id="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="border text-black rounded w-full p-2"
                            required
                        />
                    </div>
                    <div className="flex justify-between items-center">
                        <button type="submit" className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded">
                            Login
                        </button>
                        <button type="button" onClick={closeModal} className="text-gray-500 hover:text-gray-700">
                            Cancel
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default LoginModal;