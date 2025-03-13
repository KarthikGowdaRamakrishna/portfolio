"use client";

import About from "@/components/About";
import Education from "@/components/Education";
import Footer from "@/components/Footer";
import LandingSections from "@/components/LandingSections";
import Profile from "@/components/Profile";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Subscribe from "@/components/Subscribe";
import WorkExperience from "@/components/WorkExperience";

export default function Chat() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* <LandingSections /> */}
      <Profile/>
      <About/>
      <Projects/>
      <Skills/>
      <WorkExperience/>
      <Education/>
      <Subscribe/>
      <Footer/> 
    </div>
  );
}
