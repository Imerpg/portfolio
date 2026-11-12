"use client";

import Education from "./components/education";
import Footer from "./components/footer";
import Profile from "./components/profile";
import Projects from "./components/projects";
import SkillsMatrix from "./components/skillsMatrix";

export default function Home() {
    return (
        <div className="flex flex-col snap-y snap-mandatory">
            <Profile />
            <Projects />
            <SkillsMatrix />
            <Education />
            <Footer />
        </div>
    );
}
