import React from "react";
import { LuUserPlus } from "react-icons/lu";
import { VscTasklist } from "react-icons/vsc";
import { BiSolidLike } from "react-icons/bi";

const HowItWorks = () => {
  const steps = [
    {
      icon: <LuUserPlus />,
      title: "Create an Account",
      description:
        "Sign up for a free account as a job seeker or employer. Set up your profile in minutes to start posting or applying for jobs.",
    },
    {
      icon: <VscTasklist />,
      title: "Post or Browse Jobs",
      description:
        "Employers can post job descriptions, and seekers can browse jobs using filters to match their skills and preferences.",
    },
    {
      icon: <BiSolidLike />,
      title: "Hire or Get Hired",
      description:
        "Employers can shortlist and hire, while job seekers can review and accept offers that align with their goals.",
    },
  ];

  return (
    <section className="howItWorksSection">
      <h2>How Does It Work?</h2>
      <div className="how-grid">
        {steps.map((step, index) => (
          <div className="how-card" key={index}>
            <div className="icon">{step.icon}</div>
            <h3>{step.title}</h3>
            <p>{step.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HowItWorks;
