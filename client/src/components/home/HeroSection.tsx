import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { useCallback, useState, useEffect } from "react";
import useEmblaCarousel from "embla-carousel-react";

import constructionImg from "@/assets/construction worker.png";
import boyImg from "@/assets/girlPlaying.jpg";
import deliveryImg from "@/assets/deliverymaninsun.jpg";
import oldImg from "@/assets/old man in sun.png";


const HeroSection = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
  const [selectedIndex, setSelectedIndex] = useState(0);

  const images = [
    
    {
      src: boyImg,
      alt: "kid in sun",
      title: "Heat Risk for Agricultural Workers",
    },
    
    {
      src: oldImg,
      alt: "Utility worker fixing lines",
      title: "Heat Risk for Utility Workers",
    },
    {
      src: constructionImg,
      alt: "Construction worker in hot weather",
      title: "Heat Risk for Construction Workers",
    },
    {
      src: deliveryImg,
      alt: "Delivery person on a hot day",
      title: "Heat Risk for Delivery Workers",
    }
  ];
  
  const scrollTo = useCallback(
    (index: number) => {
      if (emblaApi) emblaApi.scrollTo(index);
    },
    [emblaApi]
  );

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);

    const autoplayInterval = setInterval(() => {
      emblaApi.scrollNext();
    }, 5000);

    return () => {
      emblaApi.off("select", onSelect);
      clearInterval(autoplayInterval);
    };
  }, [emblaApi, onSelect]);

  return (
    <section className="mt-12 pt-12 pb-10 px-2 sm:px-2">
      <div className="w-full max-w-screen-xl mx-auto px-2 sm:px-4">
        <div className="relative">
          <div className="flex flex-col lg:flex-row items-center gap-6 lg:gap-10">
            {/* Text Content */}
            <div className="w-full lg:w-1/2 text-center lg:text-left">
              <h1 className="text-4xl md:text-5xl font-heading font-bold mb-6 leading-tight">
                Your Personal<br></br><span className="block text-primary mt-1">Heat Risk Calculator</span>
              </h1>
              <p className="text-xl text-neutral-600 mb-8">
                Personalized heat risk assessments and actionable recommendations to protect your health in a warming world.
              </p>
              <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4">
                <Link href="/calculator">
                  <Button size="lg" className="px-8 py-3 bg-primary hover:bg-primary-dark text-white font-medium rounded-lg transition-colors shadow-lg hover:shadow-xl">
                    Try Risk Calculator
                  </Button>
                </Link>
                <Link href="/how-it-works">
                  <Button size="lg" variant="outline" className="px-8 py-3 bg-white hover:bg-neutral-100 text-primary border border-primary font-medium rounded-lg transition-colors shadow-md hover:shadow-lg">
                    Learn More
                  </Button>
                </Link>
              </div>
            </div>

            {/* Carousel */}
            <div className="w-full lg:w-1/2 mt-8 lg:mt-0">
              <div className="overflow-hidden rounded-xl shadow-md bg-white" ref={emblaRef}>
                <div className="flex">
                  {images.map((image, index) => (
                    <div className="relative flex-[0_0_100%] min-w-0" key={index}>
                      <div className="overflow-hidden h-64">
                        <img
                          src={image.src}
                          alt={image.alt}
                          className="w-full h-full object-cover transition-all duration-700 ease-in-out"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Dots */}
              <div className="flex justify-center gap-1.5 mt-2">
                {images.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => scrollTo(index)}
                    className={`w-2.5 h-2.5 rounded-full transition-all ${
                      index === selectedIndex
                        ? "bg-primary"
                        : "bg-neutral-300 hover:bg-primary/60"
                    }`}
                    aria-label={`Go to slide ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
