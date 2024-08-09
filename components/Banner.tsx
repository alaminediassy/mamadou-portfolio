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
        transition={{ duration: 0.5, delay: 1 }}
        className="block h-40 w-40 pointer-events-auto ">
        <Image src={Avatar} alt="Avatar" className=" hover:translate-y-2 duration-300 transition-transform transform hover:scale-110" />
      </motion.div>
      <div className="relative isolate"></div>
      <motion.h1
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.7 }}
        className="text-5xl lgl:text-5xl font-titleFont font-semibold flex flex-col tracking-tight sm:text-5xl ">
        Mamadou Lamine DIASSY <br></br>
        développeur d&apos;application web.{" "}
      </motion.h1>
      <div className="flex flex-col">
        <motion.p
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            className="text-base md:max-w-[900px] text-textdark font-medium">
            Je suis développeur d&apos;applications et actuellement apprenti chez Mythec, 
            spécialisé en développement Microsoft 365. Passionné par le design et la photographie, 
            je travaille également en tant que freelance pour concevoir des sites web, 
            des identités visuelles et des supports de communication pour des petites 
            et moyennes entreprises ainsi que des particuliers.{" "}
            <Link href="/About">
            <span className="text-textOrange inline-flex relative cursor-pointer h-7 overflow-x-hidden group ">
                En savoir plus
                <span
                className="absolute w-full h-[1px] bg-textOrange left-0 bottom-1 -translate-x-[110%] group-hover:translate-x-0
                    transition-transform duration-500"></span>
            </span>
            </Link>
        </motion.p>
      </div>
      {/* <div className="mx-auto">
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
      </div> */}
      {/* <SocialLink/> */}
    </section>
  );
};

export default Banner;
