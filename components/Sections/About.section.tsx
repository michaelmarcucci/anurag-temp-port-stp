import Image from "next/image";
import Link from "next/link";

import { HiOutlineArrowNarrowRight } from "../Misc/Icons.collection";

const About = () => {
  return (
    <div className="my-5 flex flex-row items-center justify-between px-3 font-sen">
      <div>
        <p className="sm:hidden ">
          <Image
            src="/assets/me.jpg"
            width="200"
            height="200"
            className="rounded-full"
            alt="avatar"
          />
        </p>
        <p className="text-3xl font-bold text-white">Michael Marcucci</p>
        <p className="mt-1 text-lg font-medium text-gray-300">
          Fullstack Web Developer - JAMStack/MERN
        </p>

        <p className="mt-4 text-gray-400">
          “The right tool for the right job”. As a software engineer it’s crucial to understand and utilize industry best practices for clear communication AND make my own decisions when I feel strongly that a particular use case warrants a unique approach. I engineer to craft something that works elegantly and communicates itself clearly in a world constantly competing for the precious few attentional resources we have.
        </p>

        {/* <Link href=" " passHref>
          <a
            className="mt-4 flex cursor-pointer flex-row items-center gap-1 font-jost text-xl text-gray-400 duration-100 hover:ml-2"
            target="_blank"
            rel="noopener noreferrer"
          >
            Read my Blog
            <HiOutlineArrowNarrowRight />
          </a>
        </Link> */}

        {/* <Link href="" passHref>
          <a
            className="mt-4 flex cursor-pointer flex-row items-center gap-1 font-jost text-xl text-gray-400 duration-100 hover:ml-2"
            target="_blank"
            rel="noopener noreferrer"
          >
            Love my work? Sponsor me!
            <HiOutlineArrowNarrowRight />
          </a>
        </Link> */}
      </div>

      <div className="hidden sm:flex ">
        <Image
          src="/assets/me.jpg"
          width="800"
          height="800"
          className="rounded-full"
          alt="avatar"
        />
      </div>
    </div>
  );
};

export default About;
