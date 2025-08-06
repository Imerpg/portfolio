import { projectData } from "@/data/project.json";
import { FaAngleRight } from "react-icons/fa";
import Image from "next/image";

export default function Projects() {

  return (
    <div id="project" className="flex flex-col min-h-screen text-white p-10 snap-start" >
        <div className="rounded-2xl bg-gray-200/20 backdrop-blur-lg shadow-xl ring-1 ring-white/10 p-3">
          <h1 className="text-2xl font-medium">Mes projets</h1>
        </div>
        <div className="my-4 flex flex-wrap gap-4">
          {projectData.map((project) => (
            <div key={project.id} className="basis-[calc(50%-0.5rem)] flex flex-row rounded-2xl bg-gray-200/20 backdrop-blur-lg shadow-xl ring-1 ring-white/10 p-3">
               <Image
                  src={project.preview_path ?? "/profile.jpg"}
                  alt={project.title}
                  width={400}
                  height={400}
                  className="object-cover w-[125px] h-[125px] mr-4 rounded-xl max-height"
              />
              <div className="">
                <h3 className="text-2xl">{project.title}</h3>
                <div className="my-4">
                  { project.description}
                </div>
                <a href="#" className="flex flex-row justify-end-safe items-center ">
                  Voir plus
                  <FaAngleRight className="ml-1"  />
                </a>
              </div>
            </div>
          ))}
        </div>
    </div>
  );
}