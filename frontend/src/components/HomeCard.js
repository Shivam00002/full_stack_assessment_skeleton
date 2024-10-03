import React, { useState } from 'react';
import EditUserModal from './EditUserModal';

function HomeCard({ home }) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="border p-4 rounded-md shadow-md">
      <h2 className="text-xl font-semibold">{home.street_address}</h2>
      <p>State: {home.state}</p>
      <p>Zip: {home.zip}</p>
      <p>SQFT: {home.sqft}</p>
      <p>Beds: {home.beds}</p>
      <p>Baths: {home.baths}</p>
      <p>List Price: ${home.list_price}</p>
      <button
        className="mt-2 bg-blue-500 text-white px-4 py-2 rounded"
        onClick={() => setIsModalOpen(true)}
      >
        Edit Users
      </button>
      {isModalOpen && (
        <EditUserModal
          home={home}
          onClose={() => setIsModalOpen(false)}
        />
      )}
    </div>
  );
}

export default HomeCard;