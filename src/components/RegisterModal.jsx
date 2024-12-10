import React, { useState } from 'react';
import { toast } from 'react-toastify';
const RegisterModal = ({ closeModal }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleRegister = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('http://localhost:3000/api/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ username, password }),
            });

            const data = await response.json();
            if (response.ok) {
                toast.success('Вы успешно зарегистрировались!');
                closeModal(); // Закрываем модальное окно
            } else {
                alert(data.message);
            }
        } catch (error) {
            console.error('Ошибка при регистрации:', error);
        }
    };

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50">
            <div className="bg-gray-800 p-6 rounded shadow-md w-96">
                <h2 className="text-xl mb-4">Register</h2>
                <form onSubmit={handleRegister}>
                    <div className="mb-4">
                        <label className="block mb-2" htmlFor="username">Username</label>
                        <input
                            type="text"
                            id="username"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            className="border rounded text-black w-full p-2"
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
                            className="border rounded text-black w-full p-2"
                            required
                        />
                    </div>
                    <div className="flex justify-between items-center">
                        <button type="submit" className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded">
                            Register
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

export default RegisterModal;