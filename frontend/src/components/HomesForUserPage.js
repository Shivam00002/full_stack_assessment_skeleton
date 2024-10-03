import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUsers } from '../slices/userSlice';
import { fetchHomesByUser } from '../slices/homeSlice';
import HomeCard from './HomeCard';
import UserSelector from './UserSelector';

function HomesForUserPage() {
  const dispatch = useDispatch();
  const { users } = useSelector((state) => state.user);
  const { homes, status, error } = useSelector((state) => state.home);
  const [selectedUser, setSelectedUser] = useState('');

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  useEffect(() => {
    if (selectedUser) {
      dispatch(fetchHomesByUser(selectedUser));
    }
  }, [dispatch, selectedUser]);

  const handleUserChange = (username) => {
    setSelectedUser(username);
  };

  if (status === 'loading') {
    return <div>Loading...</div>;
  }

  if (status === 'failed') {
    return <div>Error: {error}</div>;
  }

  return (
    <div className='border w-full  mx-auto'>
    <h1>ok ok ok ok ok ok ok ok ok ok ok ok </h1>
      <h1 className="text-2xl font-bold mb-4">Homes for User</h1>
      <UserSelector users={users} onUserChange={handleUserChange} />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
        {homes.map((home) => (
          <HomeCard key={home.id} home={home} />
        ))}
      </div>
    </div>
  );
}

export default HomesForUserPage;
