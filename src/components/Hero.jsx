import React from "react";
import { FaSearch, FaBriefcase, FaRocket } from "react-icons/fa";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="hero">
      <h1>Find Your Dream Job Today</h1>
      <h4>
        Connecting Talent with Opportunities Across the Nation for Every Skill Level
      </h4>

      <div className="features">
        <div className="feature-card">
          <FaSearch size={30} />
          <h3>Smart Search</h3>
          <p>Search across 100+ job listings with smart filters and location tags.</p>
        </div>
        <div className="feature-card">
          <FaBriefcase size={30} />
          <h3>Verified Employers</h3>
          <p>All job posts come from verified companies and recruiters only.</p>
        </div>
        <div className="feature-card">
          <FaRocket size={30} />
          <h3>Fast Apply</h3>
          <p>Apply with a single click and track your application status easily.</p>
        </div>
      </div>

      <Link to="/jobs">
   <button className="hero-btn">Explore Jobs</button>
   </Link>

    </section>
  );
};

export default Hero;
