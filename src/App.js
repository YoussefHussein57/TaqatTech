import { Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";

import "./App.css";

// Pages
import Home from "./Pages/Home/Home";
import About from "./Pages/AboutUs/AboutUs";
import Blog from "./Pages/Blog/Blog";
import BlogDetails from "./Pages/BlogDetails/BlogDetails";
import Career from "./Pages/Career/Career";
import AllJobs from "./Pages/AllJobs/AllJobs";
import JobDescription from "./Pages/JobDescription/JobDescription";
import Case from "./Pages/CaseStudy/CaseStudy";
import ContactUs from "./Pages/ContactUs/ContactUs";
import GetStarted from "./Pages/GetStarted/GetStarted";
import Services from "./Pages/Services/Services";
import Header from "./Components/Main/Header";
import Footer from "./Components/Main/Footer";

function App() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  }, [pathname]);

  return (
    <>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:id" element={<BlogDetails />} />
        <Route path="/career" element={<Career />} />
        <Route path="/career/all-jobs" element={<AllJobs />} />
        <Route path="/career/job/:id" element={<JobDescription />} />{" "}
        <Route path="/case" element={<Case />} />
        <Route path="/contactUs" element={<ContactUs />} />
        <Route path="/services" element={<Services />} />
        <Route path="/Get-started" element={<GetStarted />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
