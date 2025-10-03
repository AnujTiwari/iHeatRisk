// components/LocationDetails.tsx
import React, { useState } from 'react';

const LocationDetails = ({ type = 'home', onComplete }) => {
  const [address, setAddress] = useState('');

  const label = type === 'work' ? 'Work Address (ZIP / City)' : 'Home Address (ZIP / City)';
  const placeholder = type === 'work' ? 'Enter your work ZIP or city' : 'Enter your home ZIP or city';

  return (
    <div className="space-y-6">
      <label className="block text-sm font-semibold text-gray-700">{label}</label>
      <input
        type="text"
        value={address}
        onChange={(e) => setAddress(e.target.value)}
        className="w-full p-3 border border-gray-200 rounded-xl"
        placeholder={placeholder}
      />
      <button
        onClick={() => address && onComplete({ type, address })}
        disabled={!address}
        className="w-full bg-gradient-to-r from-amber-500 to-orange-500 text-white p-4 rounded-xl font-semibold disabled:opacity-50"
      >
        Complete Section
      </button>
    </div>
  );
};

export default LocationDetails;
