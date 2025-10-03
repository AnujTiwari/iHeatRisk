import React, { useState } from 'react';

const PersonalDetails = ({ onComplete }) => {
  const [form, setForm] = useState({
    name: '',
    age: '',
    gender: ''
  });

  const handleChange = (field: string, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
  };

  const isValid = form.name.trim() !== '' && form.age.trim() !== '' && form.gender.trim() !== '';

  const handleSubmit = () => {
    const summary = `${form.name}, Age: ${form.age}, Gender: ${form.gender}`;
    onComplete(summary);
  };

  return (
    <div className="space-y-6 px-4">
      {/* Full Name */}
      <div>
        <label className="block text-sm font-semibold text-gray-700 mb-2">Full Name</label>
        <input
          type="text"
          value={form.name}
          onChange={(e) => handleChange('name', e.target.value)}
          placeholder="Enter your full name"
          className="w-full p-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-300"
        />
      </div>

      {/* Age */}
      <div>
        <label className="block text-sm font-semibold text-gray-700 mb-2">Age</label>
        <input
          type="number"
          min="0"
          value={form.age}
          onChange={(e) => handleChange('age', e.target.value)}
          placeholder="Enter your age"
          className="w-full p-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-300"
        />
      </div>

      {/* Gender */}
      <div>
        <label className="block text-sm font-semibold text-gray-700 mb-2">Gender</label>
        <div className="grid grid-cols-3 gap-3">
          {['Male', 'Female', 'Other'].map((option) => (
            <button
              key={option}
              type="button"
              onClick={() => handleChange('gender', option)}
              className={`p-3 rounded-xl border text-sm font-medium transition-all ${
                form.gender === option
                  ? 'bg-blue-600 text-white border-blue-600'
                  : 'bg-white text-gray-700 border-gray-300 hover:bg-gray-100'
              }`}
            >
              {option}
            </button>
          ))}
        </div>
      </div>

      {/* Submit */}
      <button
        disabled={!isValid}
        onClick={handleSubmit}
        className="w-full bg-gradient-to-r from-blue-500 to-purple-500 text-white py-3 rounded-xl font-semibold hover:from-blue-600 hover:to-purple-600 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
      >
        Complete Section
      </button>
    </div>
  );
};

export default PersonalDetails;
