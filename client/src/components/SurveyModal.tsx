import React from 'react';
import PersonalDetails from './PersonalDetails';
import LifestyleAndBehavior from './LifestyleAndBehavior';
import Location from './LocationDetails'; // Create this if not yet done
import MedicalHistory from './MedicalHistory'; // Stubbed below
import Socioeconomic from './Socioeconomic'; // Stubbed below

const SurveyModal = ({ section, onClose, onComplete }) => {
  if (!section) return null;

  const renderForm = () => {
    switch (section.title) {
      case 'Personal Details':
        return (
          <PersonalDetails
            onComplete={(summary) => onComplete(section.title, summary)}
          />
        );
      case 'Location':
        return (
          <Location
            onComplete={(summary) => onComplete(section.title, summary)}
          />
        );
      case 'Lifestyle & Behavior':
        return (
          <LifestyleAndBehavior
            onComplete={(summary) => onComplete(section.title, summary)}
          />
        );
      case 'Medical History':
        return (
          <MedicalHistory
            onComplete={(summary) => onComplete(section.title, summary)}
          />
        );
      case 'Socioeconomic':
        return (
          <Socioeconomic
            onComplete={(summary) => onComplete(section.title, summary)}
          />
        );
      default:
        return (
          <p className="text-gray-500 text-sm">
            No form available for this section yet.
          </p>
        );
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-40 flex justify-center items-center z-50">
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-4xl p-8 sm:p-10 relative animate-fade-in max-h-[90vh] overflow-y-auto">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-600 hover:text-black text-xl"
        >
          ×
        </button>

        {/* Modal Title */}
        <h2 className="text-2xl font-bold text-gray-800 mb-6">
          {section.title}
        </h2>

        {/* Render dynamic form */}
        {renderForm()}
      </div>
    </div>
  );
};

export default SurveyModal;
