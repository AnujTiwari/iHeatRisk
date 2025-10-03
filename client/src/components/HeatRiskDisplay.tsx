import React, { useState } from 'react';
import { Download, CheckCircle, ArrowRightCircle } from 'lucide-react';
import Modal from './SurveyModal';

const sections = [
  {
    title: 'Personal Details',
    description: 'Basic info like name, age, gender',
    gradient: 'bg-gradient-to-br from-indigo-50 to-purple-50',
  },
  {
    title: 'Location',
    description: 'Where you currently live',
    gradient: 'bg-gradient-to-br from-purple-50 to-pink-50',
  },
  {
    title: 'Lifestyle & Behavior',
    description: 'Your daily habits',
    gradient: 'bg-gradient-to-br from-green-50 to-emerald-50',
  },
  {
    title: 'Medical History',
    description: 'Your health history',
    gradient: 'bg-gradient-to-br from-orange-50 to-red-50',
  },
  {
    title: 'Socioeconomic',
    description: 'Housing, income, greenery access',
    gradient: 'bg-gradient-to-br from-yellow-50 to-yellow-100',
  },
];

const HeatRiskDisplay = ({ onDownload }) => {
  const [modalOpen, setModalOpen] = useState(false);
  const [activeSection, setActiveSection] = useState(null);
  const [completedSections, setCompletedSections] = useState([]);
  const [answers, setAnswers] = useState({});

  const allCompleted = completedSections.length === sections.length;

  const handleOpen = (section) => {
    setActiveSection(section);
    setModalOpen(true);
  };

  const handleComplete = (sectionTitle, answerSummary) => {
    setCompletedSections((prev) => [...new Set([...prev, sectionTitle])]);
    setAnswers((prev) => ({ ...prev, [sectionTitle]: answerSummary }));
    setModalOpen(false);
  };

  return (
    <div className="w-full flex flex-col items-center bg-white min-h-screen pb-16">
      {/* Page Heading */}
      <div className="w-full max-w-6xl mx-auto text-center py-12 px-6">
        <h1 className="text-3xl font-bold text-gray-900 mb-2 leading-tight tracking-tight">
          iHeatRisk Calculator
        </h1>
        <p className="text-lg text-gray-600 font-medium">
          Complete all sections to get your personalized heat risk profile.
        </p>
      </div>

      {/* Progress */}
      <section className="w-full max-w-5xl px-6 mb-14">
        <div className="rounded-2xl backdrop-blur-md bg-gradient-to-br from-white via-blue-50 to-purple-50 px-8 py-10 text-center shadow-2xl border border-gray-200">
          <div className="relative w-full h-4 bg-gray-100 rounded-full overflow-hidden mb-4">
            <div
              className="absolute top-0 left-0 h-4 bg-gradient-to-r from-blue-300 to-purple-300 transition-all duration-500 ease-in-out"
              style={{ width: `${(completedSections.length / sections.length) * 100}%` }}
            ></div>
          </div>

          <p className="text-base text-gray-800 mb-3 font-semibold">
            {completedSections.length} of {sections.length} sections completed
          </p>

          {!allCompleted ? (
            <div className="text-sm text-orange-800 bg-orange-50 border border-orange-200 rounded-lg p-3 mb-4">
              ⚠️ Complete all sections to access your risk score
            </div>
          ) : (
            <div className="text-sm text-green-800 bg-green-50 border border-green-200 rounded-lg p-3 mb-4">
              ✅ All sections completed! Risk score available below.
            </div>
          )}

          {allCompleted && (
            <button
              onClick={onDownload}
              className="mt-2 w-32 text-sm flex items-center justify-center gap-2 bg-gradient-to-r from-indigo-300 to-purple-300 hover:from-indigo-400 hover:to-purple-400 text-white font-medium py-2 rounded-xl shadow-md transition-all duration-300 hover:scale-105"
            >
              <Download size={16} /> PDF
            </button>
          )}
        </div>
      </section>

      {/* Section Cards */}
      <section className="w-full max-w-4xl space-y-6 px-6">
        {sections.map((section) => (
          <div
            key={section.title}
            onClick={() => handleOpen(section)}
            className={`cursor-pointer rounded-2xl px-6 py-6 ${section.gradient} bg-opacity-60 hover:bg-opacity-80 shadow-md hover:shadow-lg border border-gray-100 hover:border-gray-200 flex justify-between items-center transition-all duration-300 hover:scale-105`}
          >
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-1">
                {section.title}
              </h3>

              {/* ✅ Handle string vs object answer summaries */}
              {answers[section.title] ? (
                <div className="bg-white bg-opacity-60 border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-700 space-y-1">
                  {typeof answers[section.title] === 'string'
                    ? answers[section.title]
                        .split(',')
                        .map((line, idx) => (
                          <div key={idx} className="flex items-start gap-2">
                            <span>{line.trim()}</span>
                          </div>
                        ))
                    : Object.entries(answers[section.title]).map(
                        ([key, value], idx) => (
                          <div key={idx} className="flex items-start gap-2">
                            <span className="font-medium text-gray-700">{key}:</span>
                            <span>{value}</span>
                          </div>
                        )
                      )}
                </div>
              ) : (
                <p className="text-sm text-gray-800">{section.description}</p>
              )}
            </div>

            <div className="flex items-center gap-2">
              {completedSections.includes(section.title) ? (
                <>
                  <CheckCircle className="text-green-500" size={24} />
                  <span className="text-xs text-green-700 bg-green-100 px-2 py-1 rounded-full">
                    Completed
                  </span>
                </>
              ) : (
                <ArrowRightCircle className="text-indigo-500" size={24} />
              )}
            </div>
          </div>
        ))}
      </section>

      {/* Modal */}
      {modalOpen && activeSection && (
        <Modal
          section={activeSection}
          onClose={() => setModalOpen(false)}
          onComplete={handleComplete}
        />
      )}
    </div>
  );
};

export default HeatRiskDisplay;
