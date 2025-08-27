import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { clearAllUserErrors, register } from "../store/slices/userSlice";
import { toast } from "react-toastify";
import { FaAddressBook, FaPencilAlt, FaRegUser } from "react-icons/fa";
import { FaPhoneFlip } from "react-icons/fa6";
import { MdCategory, MdOutlineMailOutline } from "react-icons/md";
import { RiLock2Fill } from "react-icons/ri";

const Register = () => {
  const [role, setRole] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [password, setPassword] = useState("");
  const [firstNiche, setFirstNiche] = useState("");
  const [secondNiche, setSecondNiche] = useState("");
  const [thirdNiche, setThirdNiche] = useState("");
  const [coverLetter, setCoverLetter] = useState("");
  const [resume, setResume] = useState("");

  const nichesArray = [
    "Software Development", "Web Development", "Cybersecurity", "Data Science",
    "Artificial Intelligence", "Cloud Computing", "DevOps", "Mobile App Development",
    "Blockchain", "Database Administration", "Network Administration", "UI/UX Design",
    "Game Development", "IoT (Internet of Things)", "Big Data", "Machine Learning",
    "IT Project Management", "IT Support and Helpdesk", "Systems Administration", "IT Consulting"
  ];

  const resumeHandler = (e) => {
    const file = e.target.files[0];
    setResume(file);
  };

  const { loading, isAuthenticated, error } = useSelector(state => state.user);
  const dispatch = useDispatch();
  const navigateTo = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("role", role);
    formData.append("name", name);
    formData.append("email", email);
    formData.append("phone", phone);
    formData.append("address", address);
    formData.append("password", password);
    if (role === "Job Seeker") {
      formData.append("firstNiche", firstNiche);
      formData.append("secondNiche", secondNiche);
      formData.append("thirdNiche", thirdNiche);
      formData.append("coverLetter", coverLetter);
      formData.append("resume", resume);
    }
    dispatch(register(formData));
  };

  useEffect(() => {
    if (error) {
      toast.error(error);
      dispatch(clearAllUserErrors());
    }
    if (isAuthenticated) {
      navigateTo("/");
    }
  }, [dispatch, error, loading, isAuthenticated]);

  return (
    <section className="authPage">
      <div className="container login-container">
        <div className="header">
          <h3>Create Your Account</h3>
        </div>
        <form onSubmit={handleRegister}>
          <div className="inputTag">
            <label>Register As</label>
            <div>
              <select value={role} onChange={(e) => setRole(e.target.value)}>
                <option value="">Select Role</option>
                <option value="Employer">Employer</option>
                <option value="Job Seeker">Job Seeker</option>
              </select>
              <FaRegUser />
            </div>
          </div>

          <div className="inputTag">
            <label>Name</label>
            <div>
              <input type="text" placeholder="Your Name" value={name} onChange={(e) => setName(e.target.value)} />
              <FaPencilAlt />
            </div>
          </div>

          <div className="inputTag">
            <label>Email</label>
            <div>
              <input type="email" placeholder="youremail@example.com" value={email} onChange={(e) => setEmail(e.target.value)} />
              <MdOutlineMailOutline />
            </div>
          </div>

          <div className="inputTag">
            <label>Phone</label>
            <div>
              <input type="number" placeholder="123-456-7890" value={phone} onChange={(e) => setPhone(e.target.value)} />
              <FaPhoneFlip />
            </div>
          </div>

          <div className="inputTag">
            <label>Address</label>
            <div>
              <input type="text" placeholder="Your Address" value={address} onChange={(e) => setAddress(e.target.value)} />
              <FaAddressBook />
            </div>
          </div>

          <div className="inputTag">
            <label>Password</label>
            <div>
              <input type="password" placeholder="Your Password" value={password} onChange={(e) => setPassword(e.target.value)} />
              <RiLock2Fill />
            </div>
          </div>

          {role === "Job Seeker" && (
            <>
              <div className="inputTag">
                <label>First Niche</label>
                <div>
                  <select value={firstNiche} onChange={(e) => setFirstNiche(e.target.value)}>
                    <option value="">Choose Niche</option>
                    {nichesArray.map((niche, index) => (
                      <option key={index} value={niche}>{niche}</option>
                    ))}
                  </select>
                  <MdCategory />
                </div>
              </div>

              <div className="inputTag">
                <label>Second Niche</label>
                <div>
                  <select value={secondNiche} onChange={(e) => setSecondNiche(e.target.value)}>
                    <option value="">Choose Niche</option>
                    {nichesArray.map((niche, index) => (
                      <option key={index} value={niche}>{niche}</option>
                    ))}
                  </select>
                  <MdCategory />
                </div>
              </div>

              <div className="inputTag">
                <label>Third Niche</label>
                <div>
                  <select value={thirdNiche} onChange={(e) => setThirdNiche(e.target.value)}>
                    <option value="">Choose Niche</option>
                    {nichesArray.map((niche, index) => (
                      <option key={index} value={niche}>{niche}</option>
                    ))}
                  </select>
                  <MdCategory />
                </div>
              </div>

              <div className="inputTag">
                <label>Cover Letter</label>
                <div>
                  <textarea value={coverLetter} onChange={(e) => setCoverLetter(e.target.value)} rows={5} />
                </div>
              </div>

              <div className="inputTag">
                <label>Upload Resume</label>
                <div>
                  <input type="file" onChange={resumeHandler} />
                </div>
              </div>
            </>
          )}

          <button type="submit" disabled={loading}>Register</button>
          <Link to={"/login"}>Already have an account? Login</Link>
        </form>
      </div>
    </section>
  );
};

export default Register;
