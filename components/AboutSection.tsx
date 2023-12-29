import React from "react"
import Image from "next/image"

const skills = [
  { skill: "Java" },
  { skill: "Kotlin" },
  { skill: "Spring" },
  { skill: "C++" },
  { skill: "Python" },
  { skill: "TypeScript" },
  { skill: "Next.js" },
  { skill: "SQL" },
  { skill: "DynamoDB" },
]

const imageStyle = {
  borderRadius: '8%',
  border: '5px solid #00f9fc',
}

const AboutSection = () => {
  return (
    <section id="about">
      <div className="my-12 pb-12 md:pt-16 md:pb-48">
        <h1 className="text-center font-bold text-4xl">
          About Me
          <hr className="w-6 h-1 mx-auto my-4 bg-teal-500 border-0 rounded"></hr>
        </h1>

        <div className="flex flex-col space-y-10 items-stretch justify-center align-top md:space-x-10 md:space-y-0 md:p-4 md:flex-row md:text-left">
          <div className="md:w-1/2 ">
            <h1 className="text-center text-2xl font-bold mb-6 md:text-left">
              Get to know me!
            </h1>
            <p>
              Hi, my name is Mohy, another basic {" "}
              <span className="font-bold text-teal-500">{"Software Engineer"}</span>,
              based in NYC.
            </p>
            <br />
            <p>
              I graduated from 
              <span className="font-bold"> Untitled State University</span>, 
              in 2018 with a BS in Computer Science and have been working in the
              field ever since. Initially, I worked at a consulting firm writing code for clients and transitioned into well known 
              <span className="font-bold"> Big Tech</span> companies.
            </p>
            <br />
            <p>
              The transition was tricky due to the technical interview process, but eventually I had <span className="font-bold">"cracked"</span> it.
               With the first FAANG offer accepted, I mentored and helped fellows ace their interviews.
            </p>
            
            <br />

            <p>
              The <span className="font-bold">most notable companies</span> I helped candidates interview at are 👉 <span className="font-bold">Google, Microsoft, Amazon, Apple.</span>
            </p>

            <br />

            <p>
              I believe that you should{" "}
              <span className="font-bold text-teal-500">
                never stop interviewing
              </span>{" "}
              and that&#39;s what I help folks do. I have a passion for
              not just cracking the interview but also gaming the technical interview to push the limits of what is
              possible. I am excited to see where my career takes me. 🙂
            </p>
          </div>
          <div className="text-center md:w-1/2 md:text-left">
            <h1 className="text-2xl font-bold mb-6">My Skills</h1>
            <div className="flex flex-wrap flex-row justify-center z-10 md:justify-start">
              {skills.map((item, idx) => {
                return (
                  <p
                    key={idx}
                    className="bg-gray-200 px-4 py-2 mr-2 mt-2 text-gray-500 rounded font-semibold"
                  >
                    {item.skill}
                  </p>
                )
              })}
            </div>
            <Image
              src="/FAANG.jpg"
              alt=""
              width={325}
              height={325}
              style={imageStyle}
              className="hidden md:block md:relative md:bottom-4 md:left-10 md:z-0 md:top-7 shadow-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutSection
