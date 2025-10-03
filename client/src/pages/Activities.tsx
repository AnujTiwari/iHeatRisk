import { CalendarDays, FileDown, HandCoins } from "lucide-react";

const SectionBox = ({ icon, title, items }: {
  icon: JSX.Element;
  title: string;
  items: Array<{ title: string; description: string; link?: string }>;
}) => (
  <div className="bg-white shadow-lg rounded-xl p-6 mb-10">
    <div className="flex items-center mb-4">
      <div className="bg-primary/10 text-primary p-3 rounded-full mr-4">
        {icon}
      </div>
      <h3 className="text-xl font-semibold text-neutral-800">{title}</h3>
    </div>
    <ul className="space-y-6">
      {items.map((item, idx) => (
        <li key={idx}>
          <h4 className="text-lg font-medium text-neutral-700">{item.title}</h4>
          <p className="text-sm text-neutral-600 mb-2">{item.description}</p>
          {item.link && (
            <a
              href={item.link}
              className="inline-block text-sm font-medium text-primary hover:underline transition"
              target="_blank"
              rel="noopener noreferrer"
            >
              Learn More →
            </a>
          )}
        </li>
      ))}
    </ul>
  </div>
);

const HighlightsPage = () => {
  const activities = [
    {
      title: "Community Heat Awareness Drives",
      description: "Monthly drives educating local communities about heat risk and preparedness.",
      link: "#"
    },
    {
      title: "Workshops for Elderly Care",
      description: "Partnering with local NGOs to run summer heat prevention workshops.",
      link: "#"
    },
  ];

  const grants = [
    {
      title: "Heat Safety Grant 2024",
      description: "Funding for schools to implement cooling infrastructure and awareness.",
      link: "#"
    },
    {
      title: "Urban Heat Resilience Fund",
      description: "Supports community leaders with up to $15,000 in funding.",
      link: "#"
    },
  ];

  const publications = [
    {
      title: "Evaluating Heat Risk Across U.S. Cities",
      description: "Research paper analyzing urban temperature trends and public health.",
      link: "/downloads/heat-risk-study.pdf"
    },
    {
      title: "Bayesian Modeling for Climate-Driven Risk",
      description: "Technical white paper on AI-driven heat vulnerability prediction.",
      link: "/downloads/bayesian-modeling.pdf"
    },
  ];

  return (
    <section className="pt-28 pb-20 bg-neutral-50 min-h-screen">
      <div className="max-w-5xl mx-auto px-4">
        <h2 className="text-4xl font-bold font-heading text-center mb-10 text-neutral-800">
          Highlights
        </h2>
        <p className="text-center text-neutral-600 mb-12 max-w-3xl mx-auto text-lg">
          Discover our latest community initiatives, grant opportunities, and cutting-edge publications.
        </p>

        <SectionBox icon={<CalendarDays size={24} />} title="Activities" items={activities} />
        <SectionBox icon={<HandCoins size={24} />} title="Grants" items={grants} />
        <SectionBox icon={<FileDown size={24} />} title="Publications" items={publications} />
      </div>
    </section>
  );
};

export default HighlightsPage;
