import React, { useState } from 'react';

const LifestyleAndBehavior = ({ onComplete }) => {
  const [form, setForm] = useState({
    alcohol: '',
    tobacco: '',
    physicalActivity: '',
    sleep: '',
    medicationSensitivity: ''
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
      <label className="block text-sm font-semibold text-gray-700 mb-1">
        {label}
      </label>
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
        {options.map((option) => (
          <button
            key={option}
            type="button"
            onClick={() => handleChange(field, option)}
            className={`p-3 rounded-xl border text-sm font-medium transition-all text-center ${
              form[field] === option
                ? 'bg-green-600 text-white border-green-600'
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
    const summary = `Alcohol: ${form.alcohol}, Tobacco: ${form.tobacco}, Activity: ${form.physicalActivity}, Sleep: ${form.sleep}, Meds: ${form.medicationSensitivity}`;
    onComplete(summary);
  };

  return (
    <div className="space-y-6 px-2 sm:px-4 max-w-3xl mx-auto">
      

      {makeButtonGroup(
        'How often do you consume alcohol?',
        'alcohol',
        ['Daily', 'Weekly', 'Occasionally', 'Rarely/Never']
      )}

      {makeButtonGroup(
        'Do you currently smoke or use tobacco products?',
        'tobacco',
        ['Yes', 'No', 'Former smoker', 'Never']
      )}

      {makeButtonGroup(
        'How frequently do you engage in physical activity (30+ min)?',
        'physicalActivity',
        ['Everyday', '3–4 times/week', 'Rarely', 'Never']
      )}

      {makeButtonGroup(
        'How would you describe your regular sleep pattern?',
        'sleep',
        ['6–8 hrs daily', '<6 hrs', 'Irregular', 'Poor']
      )}

      {makeButtonGroup(
        'Do you take medications that increase heat sensitivity?',
        'medicationSensitivity',
        ['Yes', 'No', 'Not sure']
      )}

      <button
        disabled={!isValid}
        onClick={handleSubmit}
        className="w-full bg-gradient-to-r from-green-600 to-emerald-600 text-white py-3 rounded-xl font-semibold hover:from-green-700 hover:to-emerald-700 transition-all disabled:opacity-50 disabled:cursor-not-allowed mt-6"
      >
        Complete Section
      </button>
    </div>
  );
};

export default LifestyleAndBehavior;
