import React, { useState, useEffect } from "react";
import {
  FaCode,
  FaGlobe,
  FaDatabase,
  FaCloud,
  FaCogs,
  FaMobileAlt,
} from "react-icons/fa";

const TopNiches = () => {
  const services = [
    {
      id: 1,
      service: "Software Development",
      icon: <FaCode />,
      description:
        "Build, maintain & upgrade apps with top-quality standards.",
    },
    {
      id: 2,
      service: "Web Development",
      icon: <FaGlobe />,
      description:
        "Front-end & back-end integration for responsive websites.",
    },
    {
      id: 3,
      service: "Data Science",
      icon: <FaDatabase />,
      description:
        "Extract insights from complex data with AI-powered solutions.",
    },
    {
      id: 4,
      service: "Cloud Computing",
      icon: <FaCloud />,
      description:
        "Scalable cloud services to manage and process data efficiently.",
    },
    {
      id: 5,
      service: "DevOps",
      icon: <FaCogs />,
      description:
        "Streamline development & deployment with integrated DevOps.",
    },
    {
      id: 6,
      service: "Mobile App Development",
      icon: <FaMobileAlt />,
      description:
        "Modern mobile apps for iOS & Android with top user experience.",
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  const handleNext = () => {
    setCurrentSlide((prev) => (prev === 1 ? 0 : prev + 1));
  };

  const handlePrev = () => {
    setCurrentSlide((prev) => (prev === 0 ? 1 : prev - 1));
  };

  useEffect(() => {
    const interval = setInterval(() => {
      handleNext(); // Auto-slide
    }, 4000); // every 4 seconds

    return () => clearInterval(interval); // clear on unmount
  }, []);

  const visibleServices = services.slice(currentSlide * 3, currentSlide * 3 + 3);

  return (
    <section className="top-niches-section">
      <h2>Top Niches</h2>

      <div className="niche-carousel-wrapper">
        <button className="nav-arrow left" onClick={handlePrev}>
          &#8592;
        </button>

        <div className="niches-grid slide-animate">
          {visibleServices.map(({ id, service, icon, description }) => (
            <div className="niche-card" key={id}>
              <div className="niche-icon">{icon}</div>
              <h3>{service}</h3>
              <p>{description}</p>
            </div>
          ))}
        </div>

        <button className="nav-arrow right" onClick={handleNext}>
          &#8594;
        </button>
      </div>
    </section>
  );
};

export default TopNiches;
