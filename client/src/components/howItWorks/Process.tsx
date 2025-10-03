import React from "react";
import { motion } from "framer-motion";
import { UserPlus, Cpu, CheckCircle2 } from "lucide-react";
import Image2 from "@/assets/img2.png";

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const StepsFlow = () => (
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto mt-8 px-4">
    {[
      {
        num: 1,
        title: "Share",
        desc: "Sign up and provide your health and lifestyle details to power your personalized heat-risk profile.",
        color: "bg-blue-100 text-blue-800",
        Icon: UserPlus,
      },
      {
        num: 2,
        title: "Discover",
        desc: "Discover how our AI model interprets your answers to reveal your unique heat-risk score.",
        color: "bg-green-100 text-green-800",
        Icon: Cpu,
      },
      {
        num: 3,
        title: "Act",
        desc: "Receive personalized, actionable recommendations to lower your heat risk and stay healthy.",
        color: "bg-orange-100 text-orange-800",
        Icon: CheckCircle2,
      },
    ].map((step) => (
      <motion.div
        key={step.num}
        className="flex flex-col items-center text-center bg-white border border-gray-200 rounded-xl shadow-sm p-6 min-h-[200px] transition transform hover:shadow-md hover:border-primary"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeIn}
        whileHover={{ scale: 1.03 }}
      >
        <div
          className={`w-12 h-12 rounded-full flex items-center justify-center mb-4 ${step.color}`}
        >
          <step.Icon size={20} />
        </div>
        <h4 className="text-lg font-semibold text-gray-900 mb-2 uppercase tracking-wide">
          {step.title}
        </h4>
        <p className="text-gray-700 text-sm leading-snug">{step.desc}</p>
      </motion.div>
    ))}
  </div>
);

const TechnicalOverview = () => (
  <section className="bg-white pt-28 pb-16 px-4 sm:px-6 md:px-10 lg:px-24 text-gray-800">
    <div className="w-full max-w-7xl mx-auto">
      {/* Intro Text */}
      <motion.div
        className="pt-4"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeIn}
      >
        <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center sm:text-left">
          Take Control of Your Personal Heat Risk
        </h2>
        <p className="text-base text-neutral-700 leading-relaxed text-justify">
          iHEATRISK is a personalized digital toolkit designed to help individuals and communities stay safe during
          extreme heat events. By combining health information you provide with local weather and environmental data,
          the platform gives you customized risk insights and simple actions to protect your health. Whether you're
          a senior, an outdoor worker, or someone with health conditions, iHEATRISK helps you understand your
          vulnerability to heat and provides recommendations that are easy to follow.
        </p>
        <p className="text-base text-neutral-700 leading-relaxed mt-4 text-justify">
          Our mission is to make heat safety accessible to everyone. With an easy-to-use web interface, powerful
          AI-driven analysis, and personalized feedback, iHEATRISK empowers users to make smart decisions when
          temperatures rise. It’s not just about data , it’s about protecting lives with timely, meaningful
          information.
        </p>
      </motion.div>

      {/* Steps Section */}
      <motion.div
        className="pt-16"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeIn}
      >
        <h3 className="text-2xl font-bold text-gray-900 mb-2 text-center sm:text-left">
          Three Steps to Own Your Heat Health
        </h3>
        <p className="text-base text-gray-700 mb-6 text-center sm:text-left">
          Follow this simple daily routine to stay ahead of the heat: share your details, let our AI assess your heat
          risk, and act on personalized guidance to keep you safe.
        </p>
        <StepsFlow />
      </motion.div>

      {/* How It Works */}
      <motion.div
        className="pt-20"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeIn}
      >
        <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center sm:text-left">
          How i<span className="font-bold text-primary">HEAT</span>RISK Works
        </h3>
        <p className="text-base text-gray-700 leading-relaxed mb-6 text-justify">
          After you log in, iHEATRISK gathers five categories of
          your data, demographics, medical history & physiology, lifestyle behaviors, socioeconomic & housing context,
          and your ZIP code, to enrich local weather and community heat-stress indices. Our machine-learning model
          fuses these inputs to compute a personalized heat-risk score (with a five-day forecast) and instantly
          generates tailored guidance, hydration targets, optimal activity windows, home cooling strategies,
          behavior adjustments, and care-alert prompts, so you can manage heat exposure with confidence.
        </p>
        <img
          src={Image2}
          alt="Heat Risk Workflow Diagram"
          className="w-3/4 rounded-lg shadow-lg mx-auto"
        />
      </motion.div>

      {/* Why iHEATRISK is Unique */}
      <motion.div
        className="pt-20 pb-10"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeIn}
      >
        <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center sm:text-left">
          Why i<span className="font-bold text-primary">HEAT</span>RISK Is Unique
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 text-sm">
          {[
            {
              title: "Truly Individualized",
              text: "Beyond ZIP-level forecasts, combines your health profile with local weather for a unique heat-risk score.",
              color: "border-blue-200 bg-blue-50",
            },
            {
              title: "Data-Driven ML Engine",
              text: "Expert-tuned machine-learning fuses personal, behavioral, and environmental inputs for precise risk predictions.",
              color: "border-green-200 bg-green-50",
            },
            {
              title: "Dynamic 5-Day Forecasts",
              text: "Today’s risk assessment plus a rolling five-day outlook to plan with foresight.",
              color: "border-orange-200 bg-orange-50",
            },
            {
              title: "Actionable Guidance",
              text: "Instantly converts your risk score into hydration goals, timing, cooling tips, and care alerts.",
              color: "border-red-200 bg-red-50",
            },
            {
              title: "Seamless Care Integration",
              text: "Supports individuals and providers with shared, secure heat-risk profiles for proactive care.",
              color: "border-purple-200 bg-purple-50",
            },
          ].map((f, i) => (
            <motion.div
              key={i}
              className={`p-4 rounded-lg shadow-sm border-l-4 ${f.color}`}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={fadeIn}
              transition={{ delay: 0.1 * i }}
            >
              <h4 className="text-lg font-semibold text-gray-900 mb-2">{f.title}</h4>
              <p className="text-sm text-gray-800 leading-relaxed">{f.text}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  </section>
);

export default TechnicalOverview;
