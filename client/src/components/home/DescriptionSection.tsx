import { useEffect, useRef } from "react";
import Typed from "typed.js";

const DescriptionSection = () => {
  const el = useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: [
        `Discover i<span class="text-orange-500">HEAT</span>RISK`
      ],
      typeSpeed: 60,
      showCursor: false,
      contentType: "html", // Allow HTML inside the string
    });

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <h2 className="text-4xl font-bold text-center mb-6 text-black">
          <span ref={el} />
        </h2>

        <p className="text-lg text-neutral-700 leading-relaxed text-justify">
          Feeling the summer heat and unsure how it impacts you,whether you’re heading to work, planning a getaway,
          or simply stepping outside? <strong>iHEATRISK</strong> delivers a truly personalized heat risk assessment
          in seconds. Just sign up and share a few details about your health, habits, home environment, and location,
          our AI-driven model then fuses these with live and forecasted weather plus community heat data. You’ll get
          your own heat-risk score, targeted hydration and cooling tips, optimal activity windows, and care alerts,
          all presented on an interactive dashboard with a 5-day outlook. Log in anytime to stay one step ahead of the heat.
        </p>

        <p className="text-lg text-neutral-700 leading-relaxed mt-4 text-justify">
          Developed by experts at the Discovery Partners Institute, University of Illinois Chicago, and Cardiff University,
          this interactive toolkit will assess your individualized vulnerability to extreme heat and provide clear,
          actionable steps you can take to stay safe and healthy during heat events.
        </p>
      </div>
    </section>
  );
};

export default DescriptionSection;
