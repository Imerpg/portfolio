'use client'

import { useEffect } from "react";
import Profile from "./components/profile";
import Projects from "./components/projects";

export default function Home() {

  return (
    <div className="flex flex-col snap-y snap-mandatory" >
      <Profile/>
      <Projects/>
    </div>
    
  );
}
