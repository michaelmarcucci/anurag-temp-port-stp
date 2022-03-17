import React from "react";

import Link from "next/link";

const Projects: React.FC = () => {
  return (
    <div className="my-16 px-3 font-sen" id="projects">
      <p className="text-3xl font-bold text-third">Featured Projects</p>
      <div className="my-8 flex flex-col items-center justify-center gap-10 sm:flex-row">
        <Link href="https://medium-sanity-next-tailwind.vercel.app/" passHref>
          <a
            className="h-[7rem] w-[14rem] cursor-pointer rounded-lg bg-gradient-to-r from-[#D8B4FE] to-[#6e7cf8] p-1 text-white duration-100 hover:scale-105"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="flex h-full w-full flex-col items-center justify-center rounded-lg bg-primary px-2 text-center font-medium">
              <p className="text-xl font-semibold">Medium 2.0</p>
              <p>Medium clone w/ Sanity CMS</p>
            </div>
          </a>
        </Link>

        <Link href="https://real-estate-api-site-chakra-ui.vercel.app/" passHref>
          <a
            className="h-[7rem] w-[14rem] cursor-pointer rounded-lg bg-gradient-to-r from-[#FDE68A] via-[#ee5151] to-[#FECACA] p-1 text-white duration-100 hover:scale-105"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="flex h-full w-full flex-col items-center justify-center rounded-lg bg-primary px-2 text-center font-medium">
              <p className="text-xl font-semibold">Real Estate</p>
              <p>App fetches & handles Bayut API data</p>
            </div>
          </a>
        </Link>
        
        <Link href="https://gpt3-figma-project.vercel.app/" passHref>
          <a
            className="h-[7rem] w-[14rem] cursor-pointer rounded-lg bg-gradient-to-r from-[#93fd8a] via-[#1c2ae6] to-[#968deb] p-1 text-white duration-100 hover:scale-105"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="flex h-full w-full flex-col items-center justify-center rounded-lg bg-primary px-2 text-center font-medium">
              <p className="text-xl font-semibold">GPT-3 AI</p>
              <p>Figma built mock-up site with BEM classes</p>
            </div>
          </a>
        </Link>
      </div>
    </div>
  );
};

export default Projects;
