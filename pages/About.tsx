import Header from "@/components/Header";
import Image from "next/image";
import Almine from "../public/assets/images/alamine.jpeg";
import Footer from "@/components/Footer";

import {
  SlSocialLinkedin,
  SlSocialFacebook,
  SlSocialInstagram,
  SlSocialTwitter,
} from "react-icons/sl";
import {BsGithub} from "react-icons/bs";
import {FaLinkedin} from "react-icons/fa";
import {MdEmail} from "react-icons/md";


const About = () => {
  return (
    <div
      className="relative flex flex-col w-full h-screen font-bodyFont bg-bodyColor text-textLight overflow-x-hidden
    overflow-y-scroll"
    >
      <Header />
      <main className="flex-auto">
        <div className="sm:px-8 mt-16 sm:mt-32">
          <div className="mx-auto w-full max-w-7xl lg:px-8">
            <div className="relative px-4 sm:px-8 lg:px-12">
              <div className="mx-auto max-w-2xl lg:max-w-5xl">
                <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12">
                  <div className="lg:pl-20">
                    <div className="max-w-xs px-2.5 lg:max-w-none">
                      <Image
                        src={Almine}
                        alt="me"
                        className="aspect-square rotate-3 rounded-2xl bg-zinc-100 object-cover dark:bg-textSlow
                        hover:translate-y-2 duration-300 transition-transform transform hover:scale-110"
                      />
                    </div>

                  </div>
                  <div className="lg:order-first lg:row-span-2">
                    <h1 className="text-3xl font-bold tracking-tight  text-textLight dark:text-textLight sm:text-5xl">
                      I'm Mamadou Lamine DIASSY. I live in Paris, i'm intern in
                      web developer.
                    </h1>
                    <div className="mt-6 space-y-7 text-base text-textSlow/80 text-justify ">
                      <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Dolorum, obcaecati! Accusantium quos laboriosam et id
                        voluptas beatae odio, aperiam numquam sint? Libero
                        temporibus voluptates dignissimos. Saepe inventore
                        minima harum eligendi.
                      </p>
                      <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Dolorum, obcaecati! Accusantium quos laboriosam et id
                        voluptas beatae odio, aperiam numquam sint? Libero
                        temporibus voluptates dignissimos. Saepe inventore
                        minima harum eligendi. Lorem ipsum dolor sit amet
                        consectetur adipisicing elit.
                      </p>
                      <p>
                        I spent the next few summers indoors working on a rocket
                        design, while I recovered from the multiple surgeries it
                        took to fix my badly broken legs. It took nine
                        iterations, but when I was 15 I sent my dad’s Blackberry
                        into orbit and was able to transmit a photo back down to
                        our family computer from space.
                      </p>
                      <p>
                        Today, I’m the founder of Planetaria, where we’re
                        working on civilian space suits and manned shuttle kits
                        you can assemble at home so that the next generation of
                        kids really can make it to orbit — from the comfort of
                        their own backyards.
                      </p>
                    </div>
                  </div>
                  <div className="lg:pl-20">
                    <ul>
                      <li className="mt-4 flex">
                        <a
                          href=""
                          className="group flex text-sm font-medium text-textSlow transition 
                        hover:text-textOrange dark:text-textSlow dark:hover:text-textOrange"
                        >
                          <span className="h-6 w-6 text-xl flex-none fill-zinc-500 transition group-hover:fill-textOrange">
                            <SlSocialTwitter />
                          </span>
                          <span className="ml-4">Follow on Twitter</span>
                        </a>
                      </li>
                      <li className="mt-4 flex">
                        <a
                          href=""
                          className="group flex text-sm font-medium text-textSlow transition 
                        hover:text-textOrange dark:text-textSlow dark:hover:text-textOrange"
                        >
                          <span className="h-6 w-6 text-xl flex-none fill-zinc-500 transition group-hover:fill-textOrange">
                            <SlSocialInstagram />
                          </span>
                          <span className="ml-4">Follow on Instagram</span>
                        </a>
                      </li>
                      <li className="mt-4 flex">
                        <a
                          href=""
                          className="group flex text-sm font-medium text-textSlow transition 
                        hover:text-textOrange dark:text-textLight dark:hover:text-textOrange"
                        >
                          <span className="h-6 w-6 text-xl flex-none fill-zinc-500 transition group-hover:fill-textOrange">
                            <BsGithub />
                          </span>
                          <span className="ml-4">Follow on Github</span>
                        </a>
                      </li>
                      <li className="mt-4 flex">
                        <a
                          href=""
                          className="group flex text-sm font-medium text-textSlow transition 
                        hover:text-textOrange dark:text-textSlow dark:hover:text-textOrange"
                        >
                          <span className="h-6 w-6 text-xl flex-none fill-zinc-500 transition group-hover:fill-textOrange">
                            <FaLinkedin />
                          </span>
                          <span className="ml-4">Follow on Linkedin</span>
                        </a>
                      </li>
                      <li className="mt-8 border-t border-textSlow/60 pt-8 dark:border-zinc-700/40 flex">
                        <a href="mailto:diassy.alamine@gmail.com" className="group flex text-sm font-medium text-textSlow transition 
                        hover:text-textOrange dark:text-textSlow dark:hover:text-textOrange">
                            <span className="h-6 w-6 text-xl flex-none fill-zinc-500 transition group-hover:fill-textOrange">
                                <MdEmail/>
                            </span>
                            <span className="ml-4">diassy.alamine@gmail.com</span>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer/>
    </div>
  );
};

export default About;
