import { FC } from "react";

import Link from "next/link";
import { VscTwitter, VscGithubAlt } from "../Misc/Icons.collection"

import type { linkProps } from "../../@types/prop.types";

const TextLink: FC<linkProps> = ({ text, url }) => {
  return (
    <a
      href={url}
      className="cursor-pointer rounded-md px-4 py-[0.10rem] text-xl text-gray-200 duration-100 hover:bg-zinc-800"
    >
      {text}
    </a>
  );
};

const Header: FC = () => {

  return (
    <header
      className={`sm:flex sm:flex-row sm:items-center sm:justify-between py-8 font-jost`}
    >
      <p className="sm:flex sm:flex-row sm:gap-x-4">
        <div className="hidden sm:flex sm:flex-row sm:gap-x-4">
          <TextLink text="Home" url="#" />
          <TextLink text="Skills" url="#skills" />
          <TextLink text="Projects" url="#projects" />         
        </div>
        <div className="float-left sm:flex sm:flex-row sm:gap-x-4">
          <TextLink text="Contact" url="#contact" />
        </div>
        
      </p>

      <p className="flex flex-row float-right">
        <Link href="https://twitter.com/MichaelMarcucc9" passHref>
          <a
            className="flex float-right mr-2 rounded-lg border-2 border-zinc-900 bg-zinc-800 p-2 text-2xl text-white hover:border-white"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="twitter-handle"
          >
            <VscTwitter />
          </a>
        </Link>
        <Link href="https://github.com/michaelmarcucci" passHref>
          <a
            className="flex float-right mr-2 rounded-lg border-2 border-zinc-900 bg-zinc-800 p-2 text-2xl text-white hover:border-white"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="github-repo"
          >
            <VscGithubAlt />
          </a>
        </Link>
      </p>

      
    </header>
  );
};

export default Header;
