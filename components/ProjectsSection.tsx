import React from "react"
import Image from "next/image"
import Link from "next/link"
import SlideUp from "./SlideUp"
import { BsMedium, BsArrowUpRightSquare } from "react-icons/bs"

const projects = [
  {
    name: "How to Crack the Coding Interview: The 7 Phases of Interview Prep",
    description:
      "Here's the strategy to actually interview prep thoughtfully and wholistically.",
    image: "https://miro.medium.com/v2/resize:fit:4800/format:webp/1*btkY7oMTNv40Jv2-2yO_jg.png",
    link: "https://mohycs.medium.com/how-to-crack-the-coding-interview-the-7-phases-of-interview-prep-975569fbc410",
    type: "medium"
  },
]

const ProjectsSection = () => {
  return (
    <section id="projects">
      <h1 className="my-10 text-center font-bold text-4xl">
        Gaming the Technical Interview
        <hr className="w-6 h-1 mx-auto my-4 bg-teal-500 border-0 rounded"></hr>
      </h1>

      <div className="flex flex-col space-y-28">
        {projects.map((project, idx) => {
          return (
            <div key={idx}>
              <SlideUp offset="-300px 0px -300px 0px">
                <div className="flex flex-col  animate-slideUpCubiBezier animation-delay-2 md:flex-row md:space-x-12">
                  <div className=" md:w-1/2">
                    <Link href={project.link}>
                      <Image
                        src={project.image}
                        alt=""
                        width={1000}
                        height={1000}
                        className="rounded-xl shadow-xl hover:opacity-70"
                      />
                    </Link>
                  </div>
                  <div className="mt-8 md:w-1/2">
                    <h1 className="text-4xl font-bold mb-6">{project.name}</h1>
                    <p className="text-xl leading-7 mb-4 text-neutral-600 dark:text-neutral-400">
                      {project.description}
                    </p>
                    <div className="flex flex-row align-bottom space-x-4">
                      <Link href={project.link} target="_blank">
                        <BsMedium
                          size={30}
                          className="hover:-translate-y-1 transition-transform cursor-pointer"
                        />                    
                      </Link>
                      <Link href={project.link} target="_blank">
                        <BsArrowUpRightSquare
                          size={30}
                          className="hover:-translate-y-1 transition-transform cursor-pointer"
                        />
                      </Link>
                    </div>
                  </div>
                </div>
              </SlideUp>
            </div>
          )
        })}
        
      <h1 className="my-10 text-center font-bold text-2xl">
        👻 more coming soon ... working on it! 🧑‍💻 
        <hr className="w-8 h-5 mx-auto my-4 bg-teal-800 border-0 rounded"></hr>
      </h1>
      </div>
    </section>
  )
}

export default ProjectsSection
