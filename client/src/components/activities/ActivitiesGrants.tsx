
import { useState } from "react";
import { Calendar, HandCoins, BookOpen } from "lucide-react";
import { motion } from "framer-motion";

const tabs = ["Activities", "Grants", "Publications"];

const data = {
  Activities: [
    {
      title: "Community Heat Risk Workshops",
      description: "Monthly workshops to educate vulnerable communities about heat health risks and prevention strategies.",
      note: "Next Workshop: August 15, 2023",
      icon: <Calendar className="text-primary" size={24} />,
    },
    {
      title: "Healthcare Provider Training",
      description: "Training sessions for medical professionals on identifying and managing heat-related health conditions.",
      note: "Available online and in-person",
      icon: <Calendar className="text-primary" size={24} />,
    },
  ],
  Grants: [
    {
      title: "Community Heat Resilience Grants",
      description: "Funding for organizations to implement local heat adaptation projects.",
      note: "Deadline: September 30, 2023",
      icon: <HandCoins className="text-secondary" size={24} />,
    },
    {
      title: "Heat Health Innovation Fund",
      description: "Seed funding for startups working on heat-related health solutions.",
      note: "Rolling applications",
      icon: <HandCoins className="text-secondary" size={24} />,
    },
  ],
  Publications: [
    {
      title: "Urban Heat Vulnerability Mapping (2023)",
      description: "Study on environmental heat exposure in urban settings.",
      note: "Journal of Climate Health",
      icon: <BookOpen className="text-accent" size={24} />,
    },
    {
      title: "Bayesian Modeling for Personalized Heat Risk",
      description: "Innovative AI methods for individualized heat health risk.",
      note: "Published in AI & Health 2024",
      icon: <BookOpen className="text-accent" size={24} />,
    },
  ],
};

const TabbedGrantsPage = () => {
  const [activeTab, setActiveTab] = useState("Activities");

  return (
    <section className="pt-32 pb-20 bg-neutral-50">
      <div className="max-w-6xl mx-auto px-4 md:px-6">
        <h2 className="text-4xl font-heading font-bold text-center mb-8 text-neutral-800">
          Our Impact
        </h2>

        <div className="flex justify-center mb-10 space-x-4">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
                activeTab === tab
                  ? "bg-primary text-white shadow-md"
                  : "bg-neutral-200 text-neutral-700 hover:bg-neutral-300"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {data[activeTab].map((item, idx) => (
            <div
              key={idx}
              className="bg-white rounded-xl shadow hover:shadow-lg transition-all p-6 border border-neutral-200"
            >
              <div className="flex items-center space-x-3 mb-4">
                {item.icon}
                <h4 className="text-lg font-semibold text-neutral-800">
                  {item.title}
                </h4>
              </div>
              <p className="text-neutral-600 text-sm mb-2">{item.description}</p>
              <p className="text-primary font-medium text-sm">{item.note}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default TabbedGrantsPage;
