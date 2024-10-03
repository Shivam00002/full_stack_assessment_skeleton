import React from 'react';

function UserSelector({ users, onUserChange }) {
  return (
    <select
      className="block w-full p-2 border border-gray-300 rounded-md"
      onChange={(e) => onUserChange(e.target.value)}
    >
      <option value="">Select a user</option>
      {users.map((user) => (
        <option key={user.username} value={user.username}>
          {user.username}
        </option>
      ))}
    </select>
  );
}

export default UserSelector;