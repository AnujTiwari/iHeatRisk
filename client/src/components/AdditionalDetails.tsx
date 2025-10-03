import React, { useState } from 'react';
import { Activity, Heart, Users, ChevronDown, ChevronUp, Save } from 'lucide-react';

interface AdditionalDetailsProps {
  onDataChange?: (data: AdditionalDetailsData) => void;
  onSave?: (data: AdditionalDetailsData) => void;
}

export interface AdditionalDetailsData {
  lifestyle: {
    activityLevel: string;
    outdoorTime: string;
    hydrationHabits: string;
    sleepQuality: string;
  };
  medical: {
    chronicConditions: string[];
    medications: string;
    previousHeatIllness: string;
    physicalFitness: string;
  };
  socioeconomic: {
    housingType: string;
    coolingAccess: string;
    transportationMode: string;
    workEnvironment: string;
  };
}

const AdditionalDetails: React.FC<AdditionalDetailsProps> = ({ onDataChange, onSave }) => {
  const [formData, setFormData] = useState<AdditionalDetailsData>({
    lifestyle: {
      activityLevel: '',
      outdoorTime: '',
      hydrationHabits: '',
      sleepQuality: ''
    },
    medical: {
      chronicConditions: [],
      medications: '',
      previousHeatIllness: '',
      physicalFitness: ''
    },
    socioeconomic: {
      housingType: '',
      coolingAccess: '',
      transportationMode: '',
      workEnvironment: ''
    }
  });

  const [isExpanded, setIsExpanded] = useState(false);
  const [isSaved, setIsSaved] = useState(false);

  const handleInputChange = (
    category: keyof AdditionalDetailsData,
    field: string,
    value: string | string[]
  ) => {
    const updatedData = {
      ...formData,
      [category]: {
        ...formData[category],
        [field]: value
      }
    };
    setFormData(updatedData);
    onDataChange?.(updatedData);
    setIsSaved(false);
  };

  const handleCheckboxChange = (condition: string, checked: boolean) => {
    const currentConditions = formData.medical.chronicConditions;
    const updatedConditions = checked
      ? [...currentConditions, condition]
      : currentConditions.filter(c => c !== condition);
    
    handleInputChange('medical', 'chronicConditions', updatedConditions);
  };

  const handleSave = () => {
    onSave?.(formData);
    setIsSaved(true);
    setTimeout(() => setIsSaved(false), 2000);
  };

  const DetailCard: React.FC<{
    title: string;
    icon: React.ReactNode;
    children: React.ReactNode;
  }> = ({ title, icon, children }) => (
    <div className="bg-green-50 border-2 border-green-200 rounded-lg p-4 flex-1">
      <div className="flex items-center gap-2 mb-3">
        {icon}
        <h4 className="font-medium text-gray-800">{title}</h4>
      </div>
      <div className="space-y-3">
        {children}
      </div>
    </div>
  );

  return (
    <div className="bg-white border-2 border-gray-200 rounded-lg p-4">
      <div 
        className="flex items-center justify-between cursor-pointer"
        onClick={() => setIsExpanded(!isExpanded)}
      >
        <div className="flex items-center gap-2">
          <Activity className="text-blue-600" size={20} />
          <h3 className="font-semibold text-gray-800">Additional Details</h3>
        </div>
        <div className="flex items-center gap-2">
          {isSaved &&import React, { useState } from 'react';
import { Activity, Heart, Users } from 'lucide-react';

interface AdditionalDetailsProps {
  onDataChange?: (data: AdditionalDetailsData) => void;
}

export interface AdditionalDetailsData {
  lifestyle: {
    activityLevel: string;
    outdoorTime: string;
    hydrationHabits: string;
    sleepQuality: string;
  };
  medical: {
    chronicConditions: string[];
    medications: string;
    previousHeatIllness: string;
    physicalFitness: string;
  };
  socioeconomic: {
    housingType: string;
    coolingAccess: string;
    transportationMode: string;
    workEnvironment: string;
  };
}

const AdditionalDetails: React.FC<AdditionalDetailsProps> = ({ onDataChange }) => {
  const [formData, setFormData] = useState<AdditionalDetailsData>({
    lifestyle: {
      activityLevel: '',
      outdoorTime: '',
      hydrationHabits: '',
      sleepQuality: ''
    },
    medical: {
      chronicConditions: [],
      medications: '',
      previousHeatIllness: '',
      physicalFitness: ''
    },
    socioeconomic: {
      housingType: '',
      coolingAccess: '',
      transportationMode: '',
      workEnvironment: ''
    }
  });

  const handleInputChange = (
    category: keyof AdditionalDetailsData,
    field: string,
    value: string | string[]
  ) => {
    const updatedData = {
      ...formData,
      [category]: {
        ...formData[category],
        [field]: value
      }
    };
    setFormData(updatedData);
    onDataChange?.(updatedData);
  };

  const handleCheckboxChange = (condition: string, checked: boolean) => {
    const currentConditions = formData.medical.chronicConditions;
    const updatedConditions = checked
      ? [...currentConditions, condition]
      : currentConditions.filter(c => c !== condition);
    
    handleInputChange('medical', 'chronicConditions', updatedConditions);
  };

  const DetailCard: React.FC<{
    title: string;
    icon: React.ReactNode;
    children: React.ReactNode;
  }> = ({ title, icon, children }) => (
    <div className="bg-green-50 border-2 border-green-200 rounded-lg p-4 flex-1">
      <div className="flex items-center gap-2 mb-3">
        {icon}
        <h4 className="font-medium text-gray-800">{title}</h4>
      </div>
      <div className="space-y-3">
        {children}
      </div>
    </div>
  );

  return (
    <div className="bg-white border-2 border-gray-200 rounded-lg p-4">
      <h3 className="font-semibold text-gray-800 mb-4">Additional Details</h3>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        <DetailCard
          title="Lifestyle and Behavior"
          icon={<Activity className="text-green-600" size={18} />}
        >
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Activity Level
            </label>
            <select
              value={formData.lifestyle.activityLevel}
              onChange={(e) => handleInputChange('lifestyle', 'activityLevel', e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
            >
              <option value="">Select level</option>
              <option value="sedentary">Sedentary</option>
              <option value="light">Light</option>
              <option value="moderate">Moderate</option>
              <option value="active">Active</option>
              <option value="very-active">Very Active</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Daily Outdoor Time
            </label>
            <select
              value={formData.lifestyle.outdoorTime}
              onChange={(e) => handleInputChange('lifestyle', 'outdoorTime', e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
            >
              <option value="">Select time</option>
              <option value="minimal">Less than 1 hour</option>
              <option value="moderate">1-3 hours</option>
              <option value="high">3-6 hours</option>
              <option value="extensive">More than 6 hours</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Hydration Habits
            </label>
            <select
              value={formData.lifestyle.hydrationHabits}
              onChange={(e) => handleInputChange('lifestyle', 'hydrationHabits', e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
            >
              <option value="">Select habit</option>
              <option value="poor">Poor (less than 4 glasses)</option>
              <option value="adequate">Adequate (4-6 glasses)</option>
              <option value="good">Good (6-8 glasses)</option>
              <option value="excellent">Excellent (8+ glasses)</option>
            </select>
          </div>
        </DetailCard>

        <DetailCard
          title="Medical History"
          icon={<Heart className="text-green-600" size={18} />}
        >
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Chronic Conditions
            </label>
            <div className="space-y-2">
              {['Diabetes', 'Heart Disease', 'Hypertension', 'Kidney Disease', 'Respiratory Issues'].map(condition => (
                <label key={condition} className="flex items-center">
                  <input
                    type="checkbox"
                    checked={formData.medical.chronicConditions.includes(condition)}
                    onChange={(e) => handleCheckboxChange(condition, e.target.checked)}
                    className="mr-2 rounded focus:ring-blue-500"
                  />
                  <span className="text-sm text-gray-700">{condition}</span>
                </label>
              ))}
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Current Medications
            </label>
            <textarea
              value={formData.medical.medications}
              onChange={(e) => handleInputChange('medical', 'medications', e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
              placeholder="List medications"
              rows={2}
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Previous Heat Illness
            </label>
            <select
              value={formData.medical.previousHeatIllness}
              onChange={(e) => handleInputChange('medical', 'previousHeatIllness', e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
            >
              <option value="">Select history</option>
              <option value="none">No history</option>
              <option value="heat-exhaustion">Heat exhaustion</option>
              <option value="heat-stroke">Heat stroke</option>
              <option value="multiple">Multiple episodes</option>
            </select>
          </div>
        </DetailCard>

        <DetailCard
          title="Socioeconomic and Other"
          icon={<Users className="text-green-600" size={18} />}
        >
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Housing Type
            </label>
            <select
              value={formData.socioeconomic.housingType}
              onChange={(e) => handleInputChange('socioeconomic', 'housingType', e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
            >
              <option value="">Select type</option>
              <option value="apartment">Apartment</option>
              <option value="house">House</option>
              <option value="mobile-home">Mobile home</option>
              <option value="shared">Shared housing</option>
              <option value="temporary">Temporary housing</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Cooling Access
            </label>
            <select
              value={formData.socioeconomic.coolingAccess}
              onChange={(e) => handleInputChange('socioeconomic', 'coolingAccess', e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
            >
              <option value="">Select access</option>
              <option value="central-ac">Central A/C</option>
              <option value="window-ac">Window A/C</option>
              <option value="fans-only">Fans only</option>
              <option value="limited">Limited cooling</option>
              <option value="none">No cooling</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Primary Transportation
            </label>
            <select
              value={formData.socioeconomic.transportationMode}
              onChange={(e) => handleInputChange('socioeconomic', 'transportationMode', e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
            >
              <option value="">Select mode</option>
              <option value="car-ac">Car with A/C</option>
              <option value="car-no-ac">Car without A/C</option>
              <option value="public-transport">Public transport</option>
              <option value="walking-cycling">Walking/Cycling</option>
              <option value="mixed">Mixed modes</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Work Environment
            </label>
            <select
              value={formData.socioeconomic.workEnvironment}
              onChange={(e) => handleInputChange('socioeconomic', 'workEnvironment', e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
            >
              <option value="">Select environment</option>
              <option value="indoor-ac">Indoor with A/C</option>
              <option value="indoor-no-ac">Indoor without A/C</option>
              <option value="outdoor">Outdoor work</option>
              <option value="mixed">Mixed indoor/outdoor</option>
              <option value="remote">Remote work</option>
            </select>
          </div>
        </DetailCard>
      </div>
    </div>
  );
};

export default AdditionalDetails;