import React, { useState } from 'react';

const MedicalHistory = ({ onComplete }) => {
  const [form, setForm] = useState({
    heatIllness: '',
    chronicConditions: '',
    dementia: '',
    pregnancy: '',
    bloodPressure: '',
    bmi: ''
  });

  const handleChange = (field: string, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
  };

  const isValid = Object.values(form).every(Boolean);

  const makeButtonGroup = (
    label: string,
    field: keyof typeof form,
    options: string[]
  ) => (
    <div className="space-y-2">
      <label className="block text-sm font-semibold text-gray-700 mb-1">{label}</label>
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
        {options.map((option) => (
          <button
            key={option}
            type="button"
            onClick={() => handleChange(field, option)}
            className={`p-3 rounded-xl border text-sm font-medium transition-all ${
              form[field] === option
                ? 'bg-indigo-600 text-white border-indigo-600'
                : 'bg-white text-gray-700 border-gray-300 hover:bg-gray-100'
            }`}
          >
            {option}
          </button>
        ))}
      </div>
    </div>
  );

  const handleSubmit = () => {
    const summary = {
      'Heat-related Illness': form.heatIllness,
      'Chronic Conditions': form.chronicConditions,
      'Dementia/Cognitive Issues': form.dementia,
      'Pregnancy Status': form.pregnancy,
      'Blood Pressure': form.bloodPressure,
      'BMI': form.bmi
    };

    onComplete(summary);
  };

  return (
    <div className="space-y-6 px-4 max-w-3xl mx-auto">
      <h2 className="text-xl font-bold text-gray-800 mb-4 text-center">
        Medical History
      </h2>

      {makeButtonGroup(
        'Do you have a history of heat-related illness (e.g., heat stroke, exhaustion)?',
        'heatIllness',
        ['Yes', 'No', 'Not sure']
      )}

      {makeButtonGroup(
        'Do you have any chronic medical conditions?',
        'chronicConditions',
        ['Yes', 'No', 'Multiple conditions', 'Not sure']
      )}

      {makeButtonGroup(
        'Have you been diagnosed with dementia or cognitive impairment?',
        'dementia',
        ['Yes', 'No', 'Not sure']
      )}

      {makeButtonGroup(
        'Are you currently pregnant?',
        'pregnancy',
        ['Yes', 'No', 'Not applicable', 'Prefer not to say']
      )}

      {makeButtonGroup(
        'What is your average blood pressure reading?',
        'bloodPressure',
        ['Normal', 'High', 'Not sure']
      )}

      {makeButtonGroup(
        'What is your BMI category?',
        'bmi',
        ['Under 18.5 (Underweight)', '18.5–24.9 (Normal)', '25–29.9 (Overweight)', '30+ (Obese)']
      )}

      <button
        disabled={!isValid}
        onClick={handleSubmit}
        className="w-full bg-gradient-to-r from-indigo-600 to-blue-600 text-white py-3 rounded-xl font-semibold hover:from-indigo-700 hover:to-blue-700 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
      >
        Complete Section
      </button>
    </div>
  );
};

export default MedicalHistory;
