import { useState } from "react";
import HeatRiskDisplay from "@/components/HeatRiskDisplay";
import PersonalDetails from "@/components/PersonalDetails";
import Location from "@/components/LocationDetails";
import LifestyleBehavior from "@/components/LifestyleAndBehavior";
import MedicalHistory from "@/components/MedicalHistory";
import Socioeconomic from "@/components/Socioeconomic";

const Calculator = () => {
  const [completedSections, setCompletedSections] = useState<string[]>([]);
  const [answers, setAnswers] = useState<{ [key: string]: string }>({});
  const [selectedSection, setSelectedSection] = useState<string | null>(null);

  const handleDownloadPDF = () => {
    alert("PDF generation logic goes here");
  };

  const handleBack = () => {
    setSelectedSection(null);
  };

  const handleComplete = (sectionKey: string, summary: string) => {
    if (!completedSections.includes(sectionKey)) {
      setCompletedSections((prev) => [...prev, sectionKey]);
    }
    setAnswers((prev) => ({ ...prev, [sectionKey]: summary }));
    setSelectedSection(null);
  };

  const sectionComponents = {
    "Personal Details": (
      <PersonalDetails onComplete={(summary) => handleComplete("Personal Details", summary)} />
    ),
    "Location": (
      <Location onComplete={(summary) => handleComplete("Location", summary)} />
    ),
    "Lifestyle & Behavior": (
      <LifestyleBehavior onComplete={(summary) => handleComplete("Lifestyle & Behavior", summary)} />
    ),
    "Medical History": (
      <MedicalHistory onComplete={(summary) => handleComplete("Medical History", summary)} />
    ),
    "Socioeconomic": (
      <Socioeconomic onComplete={(summary) => handleComplete("Socioeconomic", summary)} />
    )
  };

  if (selectedSection) {
    return (
      <div className="p-6 max-w-4xl mx-auto">
        <button onClick={handleBack} className="text-indigo-600 underline mb-4">
          ← Back to all sections
        </button>
        <h2 className="text-2xl font-bold text-gray-800 mb-4">{selectedSection}</h2>
        {sectionComponents[selectedSection]}
      </div>
    );
  }

  return (
    <div className="w-full py-10 px-4 bg-gradient-to-b from-[#f9fafe] to-[#f6f7fb] min-h-screen">
      <HeatRiskDisplay
        completed={completedSections.length}
        total={5}
        onDownload={handleDownloadPDF}
        onSectionClick={setSelectedSection}
        answers={answers}
        completedSections={completedSections}
      />
    </div>
  );
};

export default Calculator;
