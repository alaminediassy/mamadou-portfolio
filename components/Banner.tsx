import { motion } from "framer-motion";
import Image from "next/image";
import Avatar from "../public/assets/images/alamine_profile.png";
import Link from "next/link";
import SocialLink from "./SocialLink";

const Banner = () => {
  return (
    <section
      id="home"
      className="max-w-contentContainer mx-auto py-4 mdl:py-6 flex flex-col gap-4 lgl:gap-8 mdl:px-10 xl:px-4 "
    >
      <motion.div
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 1.8 }}
        className="block h-36 w-36 mx-auto pointer-events-auto">
        <Image src={Avatar} alt="Avatar" />
      </motion.div>
      <div className="relative isolate"></div>
      <motion.h1
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.7 }}
        className="text-5xl text-center lgl:text-5xl font-titleFont font-semibold flex flex-col tracking-tight sm:text-5xl ">
        Software developer, intern in <br /> web development, and amateur in
        design.{" "}
      </motion.h1>
      <div className="flex flex-col items-center justify-center mx-auto">
        <motion.p
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            className="text-base md:max-w-[900px] text-center text-textdark font-medium">
            I am Mamadou Lamine DIASSY currently doing an internship in web
            development at intrepide Studio in Luxembourg. Beside having a strong
            foundation in frontend & backend development, I&apos;m highly skilled in
            leveraging the best user experience possible.{" "}
            <Link href="/About">
            <span className="text-textOrange inline-flex relative cursor-pointer h-7 overflow-x-hidden group ">
                Learn more
                <span
                className="absolute w-full h-[1px] bg-textOrange left-0 bottom-1 -translate-x-[110%] group-hover:translate-x-0
                    transition-transform duration-500"></span>
            </span>
            </Link>
        </motion.p>
      </div>
      <div className="mx-auto">
        <Link href="/assets/mamadou-resume.pdf" target="_blank">
            <motion.button
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.9 }}
            className="w-40 h-10 text-sm font-titleFont border border-textOrange rounded-md text-textOrange tracking-wide hover:bg-hoverColor duration-300"
            >
            Download my CV
            </motion.button>
        </Link>
      </div>
      {/* <SocialLink/> */}
    </section>
  );
};

export default Banner;
