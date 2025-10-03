import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import anuj from "@/assets/anuj.jpg";
import sheetal from "@/assets/Rao_Sheetal.jpg";
// import tejaswi from "@/assets/tejaswi.png";
import gavin from "@/assets/gavin-shaddick.avif";
import gillard from "@/assets/gillard125.jpg";
// import rupa from "@/assets/Rupa.jpeg";
// import karyn from "@/assets/karyn.jpeg";
// import david from "@/assets/david_topping.jpg";
// import graham from "@/assets/graham.jpeg";

const teamMembers = [
  {
    name: "Anuj Tiwari",
    role: "Geospatial Analytics Lead",
    quote: "iHEATRISK transforms how we map and interpret heat exposure using geospatial insights tailored to individuals.",
    image: anuj,
  },
  {
    name: "Sheetal Khedkar Rao",
    role: "Clinical Integration Lead",
    quote: "Blending personalized health data with technology helps us proactively protect the most heat-vulnerable individuals.",
    image: sheetal,
  },
  {
    name: "Gavin Shaddick",
    role: "ML Research Lead",
    quote: "Machine learning enables us to deliver accurate, personalized heat risk predictions grounded in real-world data.",
    image: gavin,
  },
  {
    name: "Jonathan Gillard",
    role: "Data Science Advisor",
    quote: "Real-world, multi-source data drives the precision behind iHEATRISK’s heat vulnerability predictions.",
    image: gillard,
  },
];


const TestimonialCard = ({ member, isActive }: { member: any; isActive: boolean }) => {
  return (
    <motion.div
      className={`bg-white shadow-lg rounded-xl p-6 transition-all duration-500 ease-in-out flex flex-col items-center text-center ${
        isActive ? "scale-105 opacity-100 z-20" : "scale-90 opacity-40 z-10"
      }`}
    >
      <img
        src={member.image}
        alt={member.name}
        className="w-20 h-20 rounded-full object-cover border-4 border-primary/20 mb-4"
      />
      <h4 className="font-bold text-lg">{member.name}</h4>
      <p className="text-sm text-neutral-500">{member.role}</p>
      <div className="w-16 h-1 bg-primary/60 rounded my-3"></div>
      <p className="text-neutral-700 font-accent italic text-sm max-w-xs">
        "{member.quote}"
      </p>
    </motion.div>
  );
};

export default function TestimonialsSection() {
  const [current, setCurrent] = useState(0);
  const total = teamMembers.length;
  const getIndex = (i: number) => (i + total) % total;

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % total);
    }, 4000); // autoplay every 4 seconds
    return () => clearInterval(interval);
  }, [total]);

  return (
    <section className="py-20 bg-neutral-100 text-center">
      <h2 className="text-3xl font-bold mb-4">Experts Perspective</h2>
      <p className="text-lg text-neutral-600 mb-12 max-w- 3xl mx-auto">
        Hear from the experts behind iHEATRISK about the platform’s vision and impact.
      </p>

      <div className="flex justify-center items-center gap-6 transition-all">
        <TestimonialCard member={teamMembers[getIndex(current - 1)]} isActive={false} />
        <TestimonialCard member={teamMembers[current]} isActive={true} />
        <TestimonialCard member={teamMembers[getIndex(current + 1)]} isActive={false} />
      </div>

      <div className="mt-8 flex justify-center gap-3">
        {teamMembers.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`w-3 h-3 rounded-full ${
              i === current ? "bg-primary" : "bg-gray-300"
            }`}
          />
        ))}
      </div>
    </section>
  );
}
