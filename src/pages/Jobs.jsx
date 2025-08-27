import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { clearAllJobErrors, fetchJobs } from "../store/slices/jobSlice";
import Spinner from "../components/Spinner";
import { FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";

const Jobs = () => {
  const [city, setCity] = useState("");
  const [selectedCity, setSelectedCity] = useState("");
  const [niche, setNiche] = useState("");
  const [selectedNiche, setSelectedNiche] = useState("");
  const [searchKeyword, setSearchKeyword] = useState("");

  const { jobs, loading, error } = useSelector((state) => state.jobs);
  const dispatch = useDispatch();

  // Handle city change
  const handleCityChange = (city) => {
    setCity(city);
    setSelectedCity(city);
  };
  

  // Handle niche change
  const handleNicheChange = (niche) => {
    setNiche(niche);
    setSelectedNiche(niche);
  };

  // Fetch jobs
  useEffect(() => {
    if (error) {
      toast.error(error);
      dispatch(clearAllJobErrors());
    }
    dispatch(fetchJobs(city, niche, searchKeyword));
  }, [dispatch, error, city, niche]);

  //Trigger job search
  const handleSearch = () => {
    dispatch(fetchJobs(city, niche, searchKeyword));
  };


  const cities = [
    "All", "Mumbai", "Delhi", "Bangalore", "Chennai", "Kolkata", "pune", "Hyderabad",
    "Ahmedabad", "Jaipur", "Lucknow", "Noida", "Gurgaon", "Bhopal", "Indore",
    "Chandigarh", "Nagpur", "Coimbatore", "Kochi", "Patna", "Surat"
  ];

  const nichesArray = [
    "All", "Software Development", "Web Development", "Cybersecurity", "Data Science",
    "Artificial Intelligence", "Cloud Computing", "DevOps", "Mobile App Development",
    "Blockchain", "Database Administration", "Network Administration", "UI/UX Design",
    "Game Development", "IoT (Internet of Things)", "Big Data", "Machine Learning",
    "IT Project Management", "IT Support and Helpdesk", "Systems Administration",
    "IT Consulting"
  ];

  return (
    <>
      {loading ? (
        <Spinner />
      ) : (
        <section className="jobs">
          {/* Search Bar */}
          <div className="search-tab-wrapper">
            <input
              type="text"
              placeholder="Search jobs (e.g. Developer)"
              value={searchKeyword}
              onChange={(e) => setSearchKeyword(e.target.value)}
            />
            <button className="desktop-search-btn" onClick={handleSearch}>Find Job</button>
            <FaSearch className="mobile-search-icon" onClick={handleSearch} />

          </div>

          {/* Filter and Results */}
          <div className="wrapper">
            {/* Left Side Filters */}
            <div className="filter-bar">
              <div className="cities">
                <h2>Filter Job By City</h2>
                {cities.map((city, index) => (
                  <div key={index}>
                    <input
                      type="radio"
                      id={city}
                      name="city"
                      value={city}
                      checked={selectedCity === city}
                      onChange={() => handleCityChange(city)}
                    />
                    <label htmlFor={city}>{city}</label>
                  </div>
                ))}
              </div>

              <div className="cities">
                <h2>Filter Job By Niche</h2>
                {nichesArray.map((niche, index) => (
                  <div key={index}>
                    <input
                      type="radio"
                      id={niche}
                      name="niche"
                      value={niche}
                      checked={selectedNiche === niche}
                      onChange={() => handleNicheChange(niche)}
                    />
                    <label htmlFor={niche}>{niche}</label>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Side Jobs */}
            <div className="container">
              {/* Mobile Dropdown Filters */}
              <div className="mobile-filter">
                <select value={city} onChange={(e) => setCity(e.target.value)}>
                  <option value="">Filter By City</option>
                  {cities.map((city, index) => (
                    <option value={city} key={index}>{city}</option>
                  ))}
                </select>

                <select value={niche} onChange={(e) => setNiche(e.target.value)}>
                  <option value="">Filter By Niche</option>
                  {nichesArray.map((niche, index) => (
                    <option value={niche} key={index}>{niche}</option>
                  ))}
                </select>
              </div>

              {/* Job Cards */}
              <div className="jobs_container">
                {Array.isArray(jobs) && jobs.length > 0 ? (
                  jobs.map((element) => (
                    <div className="card" key={element._id}>
                      {element.hiringMultipleCandidates === "Yes" ? (
                        <p className="hiring-multiple">Hiring Multiple Candidates</p>
                      ) : (
                        <p className="hiring">Hiring</p>
                      )}

                      <p className="title">{element.title}</p>
                      <p className="company">{element.companyName}</p>
                      <p className="location">{element.location}</p>
                      <p className="salary">
                        <span>Salary:</span> ₹ {element.salary}
                      </p>
                      <p className="posted">
                        <span>Posted On:</span> {(element.jobPostedOn || "").substring(0, 10)}
                      </p>

                      <div className="btn-wrapper">
                        <Link className="btn" to={`/post/application/${element._id}`}>
                          Apply Now
                        </Link>
                      </div>
                    </div>
                  ))
                ) : (
                  <div style={{ textAlign: "center", marginTop: "2rem" }}>
                    <img
                      src="/notfound.png"
                      alt="No jobs found"
                      style={{ width: "250px", maxWidth: "100%" }}
                    />
                    <p style={{ fontSize: "1.2rem", color: "#555" }}>
                      No jobs found for selected filters.
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>
      )}
    </>
  );
};

export default Jobs;
