import React from 'react';
import { Check, ChevronRight } from 'lucide-react';

const SurveyCard = ({ title, description, completed, onClick, color = 'blue' }) => {
  const colorClasses = {
    blue: 'from-blue-500 to-blue-600',
    green: 'from-green-500 to-green-600',
    purple: 'from-purple-500 to-purple-600',
    indigo: 'from-indigo-500 to-indigo-600',
    teal: 'from-teal-500 to-teal-600'
  };

  return (
    <div
      onClick={onClick}
      className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer border border-gray-100 hover:scale-[1.02] relative overflow-hidden group"
    >
      {completed && (
        <div className="absolute top-4 right-4 bg-green-500 rounded-full p-2">
          <Check size={16} className="text-white" />
        </div>
      )}
      <div
        className={`absolute inset-0 bg-gradient-to-br ${colorClasses[color]} opacity-5 group-hover:opacity-10 transition-opacity`}
      />
      <div className="relative">
        <h3 className="text-xl font-bold text-gray-800 mb-2">{title}</h3>
        <p className="text-gray-600 text-sm mb-4">{description}</p>
        <div className="flex items-center justify-between">
          <span className={`text-sm font-semibold ${completed ? 'text-green-600' : 'text-gray-500'}`}>
            {completed ? 'Completed' : 'Click to start'}
          </span>
          <ChevronRight size={20} className="text-gray-400 group-hover:text-gray-600 transition-colors" />
        </div>
      </div>
    </div>
  );
};

export default SurveyCard;
    