import { FaExternalLinkAlt } from "react-icons/fa";
import { motion } from "framer-motion";
import person1 from "@/assets/Anuj.jpg";
import person2 from "@/assets/Rao_Sheetal.jpg";
import person3 from "@/assets/tejaswi.png";
import person4 from "@/assets/gavin-shaddick.avif";
import person5 from "@/assets/gillard125.jpg";
import placeholder from "@/assets/tejodhbhav.jpeg";
import person6 from "@/assets/ishanth.png";
import person7 from "@/assets/ashwin.jpg";

const usTeam = [
  {
    name: "Anuj Tiwari",
    role: "Geospatial Analytics Lead",
    piStatus: "Principal Investigator",
    university: "Discovery Partners Institute",
    image: person1,
    link: "https://dpi.uillinois.edu/team/anuj-tiwari/",
  },
  {
    name: "Sheetal Khedkar Rao",
    role: "Clinical Integration Lead",
    piStatus: "Co-Principal Investigator",
    university:
      "Department of Academic Internal Medicine, College of Medicine, University of Illinois at Chicago",
    image: person2,
    link: "https://today.uic.edu/experts/sheetal-khedkar-rao/",
  },
  {
    name: "Tejaswi Velaga",
    role: "Full Stack ML Engineer",
    piStatus: "",
    university: "University of Illinois at Chicago",
    image: person3,
    link: "https://www.linkedin.com/in/tejaswi-velaga/?originalSubdomain=in",
  },
    {
    name: "Ishaant Majumdar",
    role: " Climate Data Analyst",
    university: "Centennial High School, Frisco, Texas",
    image: person6,
    link: "https://www.linkedin.com/in/ishaant-majumdar-461944311/",
  },

];

const ukTeam = [
  {
    name: "Gavin Shaddick",
    role: "ML Research Lead",
    piStatus: "Principal Investigator",
    university: "College of Physical Sciences and Engineering, Cardiff University",
    image: person4,
    link: "https://profiles.cardiff.ac.uk/staff/shaddickg",
  },
  {
    name: "Jonathan Gillard",
    role: "Data Science Advisor",
    piStatus: "Co-Principal Investigator",
    university: "School of Mathematics, Cardiff University",
    image: person5,
    link: "https://mathsdemo.cf.ac.uk/maths/contactsandpeople/old/gillardjw.html",
  },
];

const ackTeam = [
    {
    name: "Ashwin Sunderraj",
    role: "Vulnerability Concept Advisor",
    university: "University of Texas Southwestern",
    image: person7,
    link: "https://sites.northwestern.edu/danethan/ashwin-sunderraj-bio/",
  },
  {
  
    name: "Tejodbhav Koduru",
    role: "UI Developer",
    university: "University of Illinois at Chicago",
    image: placeholder,
    link: "https://www.linkedin.com/in/tejkodur/",
  }
];


const AboutContent = () => {
  const renderCard = (person: any, index: number) => {
    const shortPI =
      person.piStatus === "Principal Investigator"
        ? " (PI)"
        : person.piStatus === "Co-Principal Investigator"
        ? " (Co-PI)"
        : "";

    return (
      <motion.a
        key={index}
        href={person.link}
        target="_blank"
        rel="noopener noreferrer"
        whileHover={{ scale: 1.02 }}
        className="w-64 bg-white rounded-2xl p-6 text-center shadow-sm transition-all hover:shadow-md border border-gray-200"
      >
        <img
          src={person.image}
          alt={person.name}
          className="w-20 h-20 mx-auto mb-4 rounded-full object-cover border-2 border-neutral-200"
        />

        <h4 className="text-base font-semibold text-neutral-900">
          {person.name}
          <span className="text-xs text-neutral-500 font-normal">{shortPI}</span>
        </h4>

        <p className="text-sm text-neutral-700 mt-2">{person.role}</p>
        <p className="text-xs text-neutral-500 mt-2 italic leading-snug">{person.university}</p>

        <span className="text-sm mt-4 inline-flex items-center gap-1 font-medium text-orange-600">
          View Profile <FaExternalLinkAlt className="text-xs" />
        </span>
      </motion.a>
    );
  };

  return (
    <section className="pt-28 pb-20 bg-neutral-50">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <h2 className="text-3xl font-bold text-center mb-3 text-neutral-800">
          Project Contributors
        </h2>
        <p className="text-lg text-center text-neutral-600 mb-14 max-w-3xl mx-auto">
          Meet the dedicated team behind iHEATRISK.
        </p>

        {/* US & UK Teams */}
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-semibold text-primary mb-6 text-left">
              United States Team
            </h3>
            <div className="flex flex-wrap justify-left gap-6">
              {usTeam.map((person, index) => renderCard(person, index))}
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-semibold text-primary mb-6 text-left">
              United Kingdom Team
            </h3>
            <div className="flex flex-wrap justify-left gap-6">
              {ukTeam.map((person, index) => renderCard(person, index))}
            </div>
          </div>
        </div>

        {/* Acknowledgements */}
        <div className="mt-20">
          <h3 className="text-2xl font-semibold text-primary mb-6 text-left">
            Acknowledgements
          </h3>
          <div className="flex flex-wrap justify-left gap-6">
            {ackTeam.map((person, index) => renderCard(person, index))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutContent;
