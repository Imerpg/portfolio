'use client'

import Profile from "./components/profile";
import Projects from "./components/projects";
import SkillsMatrix from "./components/skillsMatrix";
import Footer from "./components/footer";
import Education from "./components/education";

export default function Home() {

  return (
    <div className="flex flex-col snap-y snap-mandatory" >
      <Profile/>
      <SkillsMatrix/>
      <Projects/>
      <Education/>
      <Footer/>
    </div>
  );
}
