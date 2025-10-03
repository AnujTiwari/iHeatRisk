import React, { useState } from 'react';

const Socioeconomic = ({ onComplete }) => {
  const [form, setForm] = useState({
    income: '',
    insurance: '',
    cooling: '',
    housing: '',
    greenery: ''
  });

  const handleChange = (field, value) => {
    setForm(prev => ({ ...prev, [field]: value }));
  };

  const isValid = Object.values(form).every(Boolean);

  const makeButtonGroup = (label, field, options) => (
    <div>
      <label className="block text-sm font-semibold text-gray-700 mb-2">{label}</label>
      <div className="grid grid-cols-2 gap-3">
        {options.map(option => (
          <button
            key={option}
            onClick={() => handleChange(field, option)}
            className={`p-3 rounded-xl border-2 text-sm font-medium transition-all ${
              form[field] === option
                ? 'border-teal-500 bg-teal-50 text-teal-700'
                : 'border-gray-200 hover:border-gray-300'
            }`}
          >
            {option}
          </button>
        ))}
      </div>
    </div>
  );

  return (
    <div className="space-y-6">
      {makeButtonGroup(
        'What is your monthly income level?',
        'income',
        ['<$1,000', '$1,000–$3,000', '$3,000–$5,000', '$5,000+']
      )}

      {makeButtonGroup(
        'Do you currently have health insurance?',
        'insurance',
        ['Yes', 'No', 'Not sure']
      )}

      {makeButtonGroup(
        'Do you have access to air conditioning or a cooling system?',
        'cooling',
        ['Yes, always', 'Sometimes', 'No']
      )}

      {makeButtonGroup(
        'What type of housing do you live in?',
        'housing',
        ['Apartment', 'Detached house', 'Shared housing', 'Assisted facility']
      )}

      {makeButtonGroup(
        'Is your residence surrounded by trees or greenery?',
        'greenery',
        ['Yes', 'Somewhat', 'No', 'Not sure']
      )}

      <button
        disabled={!isValid}
        onClick={() => onComplete(form)}
        className="w-full bg-gradient-to-r from-teal-600 to-green-600 text-white p-4 rounded-xl font-semibold hover:from-teal-700 hover:to-green-700 disabled:opacity-50"
      >
        Complete Section
      </button>
    </div>
  );
};

export default Socioeconomic;
