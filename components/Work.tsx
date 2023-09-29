import Image from "next/image";
import Intrepide from "../public/assets/images/intrepide.jpeg";
import Maarif from "../public/assets/images/maarif.jpg";
import Samsic from "../public/assets/images/samsic.svg";
import BabiAlem from "../public/assets/images/babialem.svg";

import Link from "next/link";

const workData = [
  {
    id: 1,
    company: "Intrepide Studio",
    role: "intern in web development",
    startTime: "Août 2023",
    endTime: "Present",
    image: Intrepide,
  },
  {
    id: 2,
    company: "Samsic Event's",
    role: "welocome and information officer",
    startTime: "Jan 2023",
    endTime: "July 2023",
    image: Samsic,
  },
  {
    id: 3,
    company: "Babi Alem",
    role: "Web and Graphic Designer",
    startTime: "Feb 2021",
    endTime: "June 2022",
    image: BabiAlem,
  },
  {
    id: 4,
    company: "Maarif Fundation",
    role: "Vacant IT Teacher",
    startTime: "March 2019",
    endTime: "Jan 2020",
    image: Maarif,
  },
];

const Work = () => {
  return (
    <div className="rounded-2xl  ring-[0.2px] ring-textLight  p-6 dark:border-zinc-100">
      <h2 className="flex text-sm font-semibold text-zinc-900 dark:text-zinc-100">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="h-6 w-6 text-gray-400 flex-none"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 00.75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 00-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0112 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 01-.673-.38m0 0A2.18 2.18 0 013 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 013.413-.387m7.5 0V5.25A2.25 2.25 0 0013.5 3h-3a2.25 2.25 0 00-2.25 2.25v.894m7.5 0a48.667 48.667 0 00-7.5 0M12 12.75h.008v.008H12v-.008z"
          />
        </svg>
        <span className="ml-3 text-textLight">Work</span>
      </h2>
      <ol className="mt-6 space-y-4">
        {workData.map((work) => (
          <li 
          className="flex gap-4"
          key={work?.id}
          >
            <div className="relative mt-1 flex h-11 w-11 flex-none items-center justify-center rounded-full shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-white/5 dark:ring-0">
              <Image
                src={work?.image}
                alt="work"
                className="h-8 w-8 rounded-full"
              />
            </div>
            <dl className="flex flex-auto flex-wrap gap-x-2">
              <dd className="w-full flex-none text-sm font-medium  text-textSlow dark:text-textSlow">
                {work?.company}
              </dd>
              <dd className="text-xs text-textLight/60">
                {work?.role}
              </dd>
              <dd className="ml-auto text-xs text-zinc-400">
                <div className="flex gap-2 text-textLight">
                  <span>{work?.startTime}</span>
                  <span>-</span>
                  <span>{work?.endTime}</span>
                </div>
              </dd>
            </dl>
          </li>
        ))}
      </ol>
      <Link
        href="/assets/mamadou-resume.pdf" target="_blank"
        className="inline-flex items-center gap-2 justify-center rounded-md 
      py-2 px-3 text-sm outline-offset-2 transition active:transition-none bg-white/5
      font-medium text-gray-100 hover:bg-white/5 hover:ring-[0.2px] hover:ring-white/50 active:bg-zinc-100 active:text-zinc-900/60 
       group mt-6 w-full hover:text-textOrange"
      >
        Download CV
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="h-4 w-4 hover:text-textOrange"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15.75 17.25L12 21m0 0l-3.75-3.75M12 21V3"
          />
        </svg>
      </Link>
    </div>
  );
};

export default Work;
