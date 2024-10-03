import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { updateHomeUsers } from '../slices/homeSlice';

function EditUserModal({ home, onClose }) {
    const dispatch = useDispatch();
    const [selectedUsers, setSelectedUsers] = useState([]);
    const [allUsers, setAllUsers] = useState([]);

    useEffect(() => {

        const fetchUsers = async () => {
            const response = await fetch(`/api/user/find-by-home?homeId=${home.id}`);
            const users = await response.json();
            setAllUsers(users);
            setSelectedUsers(users.map(user => user.username));
        };
        fetchUsers();
    }, [home.id]);

    const handleUserToggle = (username) => {
        setSelectedUsers(prev =>
            prev.includes(username)
                ? prev.filter(u => u !== username)
                : [...prev, username]
        );
    };

    const handleSave = () => {
        dispatch(updateHomeUsers({ homeId: home.id, users: selectedUsers }));
        onClose();
    };

    return (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full">
            <div className="relative top-20 mx-auto p-5 border w-96 shadow-lg rounded-md bg-white">
                <h3 className="text-lg font-semibold mb-4">Edit Users for {home.street_address}</h3>
                {allUsers.map(user => (
                    <div key={user.username} className="mb-2">
                        <label className="flex items-center">
                            <input
                                type="checkbox"
                                checked={selectedUsers.includes(user.username)}
                                onChange={() => handleUserToggle(user.username)}
                                className="mr-2"
                            />
                            {user.username}
                        </label>
                    </div>
                ))}
                <div className="mt-4 flex justify-end">
                    <button
                        onClick={onClose}
                        className="px-4 py-2 bg-gray-300 text-gray-800 rounded mr-2"
                    >
                        Cancel
                    </button>
                    <button
                        onClick={handleSave}
                        className="px-4 py-2 bg-blue-500 text-white rounded"
                        disabled={selectedUsers.length === 0}
                    >
                        Save
                    </button>
                </div>
            </div>
        </div>
    );
}

export default EditUserModal;