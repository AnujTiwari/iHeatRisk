import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

const faqSections = [
  {
    title: "General Questions",
    items: [
      {
        question: "What is iHEATRISK?",
        answer:
          "iHEATRISK is an AI-powered web platform that delivers personalized heat risk scores and tailored recommendations. It combines user health data with real-time weather conditions to help individuals and healthcare providers manage heat-related health risks.",
      },
      {
        question: "Why was iHEATRISK created?",
        answer:
          "Heatwaves are increasing in intensity and frequency due to climate change. While existing tools assess risk at the community level, iHEATRISK was designed to provide individual-level insights, empowering users to take control of their heat health.",
      },
      {
        question: "Who developed iHEATRISK?",
        answer:
          "iHEATRISK was developed by experts at the Discovery Partners Institute, University of Illinois Chicago, and Cardiff University with support from public health professionals and climate scientists.",
      },
    ],
  },
  {
    title: "How It Works",
    items: [
      {
        question: "How does iHEATRISK generate my heat risk score?",
        answer:
          "After signing up, users provide basic health and lifestyle information. iHEATRISK uses a machine-learning model to combine this with live and forecasted weather and community heat data to produce a personalized heat-risk score.",
      },
      {
        question: "What kind of information do I need to provide?",
        answer:
          "You can start with just your ZIP code. For a more refined score, you may add: Health details (e.g., chronic conditions), Daily routines and hydration habits, Home environment and socioeconomic factors.",
      },
      {
        question: "How long does it take to get results?",
        answer:
          "The platform provides results within seconds of submitting your information.",
      },
    ],
  },
  {
    title: "Features & Recommendations",
    items: [
      {
        question: "What information will I see on the dashboard?",
        answer:
          "Your dashboard will display: Today’s and 5-day heat-risk forecast, Care alerts based on your health profile.",
      },
      {
        question: "Is this tool meant only for individuals?",
        answer:
          "No. Healthcare providers can also use iHEATRISK to support patient care by generating personalized heat vulnerability profiles for patients.",
      },
      {
        question: "Can I use it for trip planning or outdoor activities?",
        answer:
          "Yes. You can check heat risk scores for any ZIP code in the U.S., helping you plan your day, travels, or outdoor tasks with confidence.",
      },
    ],
  },
  {
    title: "Data, Privacy & Security",
    items: [
      {
        question: "How is my personal information used?",
        answer:
          "Personal data is used solely to generate your risk profile and is not shared externally. Only anonymized and encrypted information is stored.",
      },
      {
        question: "Will my location be tracked?",
        answer:
          "No. You only need to provide your ZIP code or address voluntarily,there is no GPS-based tracking.",
      },
      {
        question: "Can I request to delete my data?",
        answer:
          "Yes. Email info@iheatrisk.com to request data deletion at any time.",
      },
    ],
  },
  {
    title: "Getting Support",
    items: [
      {
        question: "I need help using the platform. What should I do?",
        answer:
          "Visit our Contact Us page to send us a message directly. We’ll get back to you within 1–2 business days.",
      },
      {
        question: "I’d like to provide feedback or collaborate. How can I reach you?",
        answer:
          "We welcome feedback and potential partnerships. Please email us at info@iheatrisk.com or use the contact form on our website.",
      },
      {
        question: "Where is iHEATRISK located?",
        answer:
          "iHeatRisk Cardiff–DPI Grant, 200 S. Wacker Dr., 20th Floor, Chicago, IL 60606, United States.",
      },
    ],
  },
];

const FAQPage = () => {
  const [activeIndex, setActiveIndex] = useState<{ section: number; question: number } | null>(null);

  const toggle = (sectionIndex: number, questionIndex: number) => {
    if (
      activeIndex &&
      activeIndex.section === sectionIndex &&
      activeIndex.question === questionIndex
    ) {
      setActiveIndex(null);
    } else {
      setActiveIndex({ section: sectionIndex, question: questionIndex });
    }
  };

  return (
    <section className="min-h-screen pt-28 bg-gradient-to-b from-white to-neutral-50 py-20">
      <div className="max-w-5xl mx-auto px-6">
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold text-black mb-4">Frequently Asked Questions</h1>
          <p className="text-lg text-neutral-600 max-w-3xl mx-auto">
            Everything you need to know about iHEATRISK. Still have questions? Reach out to us directly!
          </p>
        </div>

        {faqSections.map((section, sectionIndex) => (
          <div key={sectionIndex} className="mb-10">
            <h2 className="text-2xl font-semibold text-orange-600 mb-4">{section.title}</h2>
            <div className="space-y-4">
              {section.items.map((item, questionIndex) => (
                <div
                  key={questionIndex}
                  className="bg-white border border-neutral-200 shadow-md rounded-xl transition-all"
                >
                  <button
                    onClick={() => toggle(sectionIndex, questionIndex)}
                    className="w-full flex items-center justify-between px-6 py-5 text-left hover:bg-orange-50 transition-colors"
                  >
                    <span className="text-base font-medium text-neutral-800">{item.question}</span>
                    <span className="text-orange-600">
                      {activeIndex?.section === sectionIndex && activeIndex?.question === questionIndex ? (
                        <ChevronUp size={20} />
                      ) : (
                        <ChevronDown size={20} />
                      )}
                    </span>
                  </button>
                  <div
                    className={`overflow-hidden transition-all duration-300 px-6 ${
                      activeIndex?.section === sectionIndex && activeIndex?.question === questionIndex
                        ? "max-h-60 py-3"
                        : "max-h-0"
                    }`}
                  >
                    <p className="text-sm text-neutral-700 leading-relaxed">{item.answer}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQPage;
