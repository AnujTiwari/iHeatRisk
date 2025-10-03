import { Cpu, MapPin, NotebookPen, LayoutGrid } from "lucide-react";

const features = [
  // {
  //   icon: <LayoutGrid size={28} className="text-primary" />,
  //   title: "User-Friendly Web Portal",
  //   description:
  //     "Our platform is crafted for ease of use, offering smooth navigation whether you're a first-time visitor or returning user.",
  // },
  {
    icon: <Cpu size={28} className="text-primary" />,
    title: "AI-Driven Risk Modeling",
    description:
      "We use advanced AI to process health and environmental data, delivering accurate and timely heat risk evaluations.",
  },
  {
    icon: <MapPin size={28} className="text-primary" />,
    title: "Personalized Risk Insights",
    description:
      "Receive tailored risk scores based on your age, activity, and medical profile to better understand your heat exposure.",
  },
  {
    icon: <NotebookPen size={28} className="text-primary" />,
    title: "Actionable Recommendations",
    description:
      "Get proactive tips like hydration alerts and safe-time scheduling to help you prevent heat-related health risks.",
  },
];

const FeaturesSection = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-neutral-50 to-white">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-4xl font-heading font-bold mb-4">Key Features</h2>
        <p className="text-neutral-600 text-lg max-w-2xl mx-auto mb-12">
          
        </p>

        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <div
              key={index}
              className="rounded-3xl p-6 backdrop-blur-sm bg-white/80 shadow-xl hover:shadow-2xl transition-all duration-300 border border-neutral-200 group hover:scale-105"
            >
              <div className="w-14 h-14 mx-auto flex items-center justify-center rounded-full bg-gradient-to-br from-primary/10 to-primary/20 mb-4 group-hover:ring-4 group-hover:ring-primary/10 transition-all">
                {feature.icon}
              </div>
              <h3 className="text-lg font-semibold text-neutral-800 mb-2">{feature.title}</h3>
              <p className="text-sm text-neutral-600 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
