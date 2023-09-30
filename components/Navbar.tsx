import { logo } from "@/public/assets";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { useRef, useState } from "react";
import { MdOutlineClose } from "react-icons/md";
import {
  SlSocialLinkedin,
  SlSocialFacebook,
  SlSocialInstagram,
} from "react-icons/sl";
import { TbBrandGithub } from "react-icons/tb";
import { SlSocialYoutube } from "react-icons/sl";
import { useRouter } from "next/router";

const Navbar = () => {
  const ref = useRef<string | any>("");
  const [showMenu, setShowMenu] = useState(false);

  function handleClick(e:any) {
    if (e.target.contains(ref.current)) {
        // do somethink with myref.current
        setShowMenu(false)
    }
  }
  const router = useRouter();

  return (
    <div className="w-full shadow-navbarShadow h-20 lg:h-[12vh] sticky top-0 z-50 bg-bodyColor px-4">
      <div className="max-w-container h-full mx-auto py-1  font-titleFont flex items-center justify-between">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <Link href="/">
            <Image className='w-11' src={logo} alt='logo'/>
          </Link>
        </motion.div>
        <div className="hidden mdl:inline-flex items-center gap-7">
          <ul className="flex text-[13px] gap-7">
            <Link
              href="/"
              className={`flex items-center gap-1 font-medium hover:text-textOrange cursor-pointer duration-300 ${router.asPath === '/' ? 'text-textOrange' : 'text-textLight'}`} 
            >
              <motion.li
                initial={{ y: -10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.1 }}
              >
                Home
              </motion.li>
            </Link>
            <Link
              href="/About"
              className={`flex items-center gap-1 font-medium hover:text-textOrange cursor-pointer duration-300 nav-link ${router.asPath === '/About' ? 'text-textOrange' : 'text-textLight'}`}
            >
              <motion.li
                initial={{ y: -10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.1 }}
              >
                {/* <span className="text-textOrange">01.</span>  */}About
              </motion.li>
            </Link>
            <Link
              href="#Experience"
              className={`flex items-center gap-1 font-medium text-textDark hover:text-textOrange cursor-pointer duration-300 nav-link ${router.asPath === '/Experience' ? 'text-textOrange' : 'text-textLight'}`}
            >
              <motion.li
                initial={{ y: -10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.1, delay: 0.2 }}
              >
                {/* <span className="text-textOrange">02.</span> */} Experience
              </motion.li>
            </Link>
            <Link
              href="#Project"
              className={`flex items-center gap-1 font-medium text-textDark hover:text-textOrange cursor-pointer duration-300 nav-link ${router.asPath === '/Project' ? 'text-textOrange' : 'text-textLight'}`}
            >
              <motion.li
                initial={{ y: -10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.1, delay: 0.3 }}
              >
                {/* <span className="text-textOrange">03.</span> */} Projects
              </motion.li>
            </Link>
            <Link
              href="/Contact"
              className={`flex items-center gap-1 font-medium text-textDark hover:text-textOrange cursor-pointer duration-300 nav-link ${router.asPath === '/Contact' ? 'text-textOrange' : 'text-textLight'}`}
            >
              <motion.li
                initial={{ y: -10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.1, delay: 0.4 }}
              >
                {/* <span className="text-textOrange">04.</span> */} Contact
              </motion.li>
            </Link>
          </ul>
          <Link href="/assets/mamadou-resume.pdf" target="_blank">
            <motion.button
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="px-4 py-2 rounded-md text-textOrange text-[13px] border border-textOrange hover:bg-hoverColor duration-300"
            >
              Download CV
            </motion.button>
          </Link>
        </div>
        {/* small icon section */}
        <div
          onClick={() => setShowMenu(true)}
          className="w-6 h-5 flex flex-col justify-between items-center mdl:hidden text-4xl text-textOrange cursor-pointer overflow-hidden group"
        >
          <span className="w-full h-[2px] bg-textOrange inline-flex transform group-hover:translate-x-2 transition-all ease-in-out duration-300"></span>
          <span
            className="w-full h-[2px] bg-textOrange inline-flex transform translate-x-3 group-hover:translate-x-0 transition-all ease-in-out
                duration-300"
          ></span>
          <span
            className="w-full h-[2px] bg-textOrange inline-flex transform translate-x-1 group-hover:translate-x-3 transition-all ease-in-out
                duration-300"
          ></span>
        </div>
        {showMenu && (
          <div
            ref={(node) => (ref.current = node)}
            onClick={handleClick}
            className="absolute mdl:hidden top-0 w-full h-screen bg-black bg-opacity-50 flex flex-col items-end "
          >
            <motion.div
              initial={{ x: 20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.1 }}
              className="w-full h-full overflow-y-scroll scrollbarHide bg-[#112240] bg-opacity-90 flex flex-col items-center px-4 py-10 relative"
            >
              <MdOutlineClose
                onClick={() => setShowMenu(false)}
                className="text-3xl mr-4 text-textOrange cursor-pointer hover:text-textOrange/70 absolute right-4"
              />
              <div className="flex flex-col text-center gap-7 pt-16">
                <ul className="flex flex-col text-base gap-7">
                  <Link
                    href="/"
                    className="flex items-center gap-1 font-medium text-textdark hover:text-textOrange
                    cursor-pointer duration-300 nav-link"
                  >
                    <motion.li
                      initial={{ y: -10, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ duration: 0.2, delay: 0.1, ease: "easeIn" }}
                    >
                      Home
                    </motion.li>
                  </Link>
                  <Link
                    href="/About"
                    className="flex items-center gap-1 font-medium text-textDark hover:text-textOrange cursor-pointer
                    duration-300 nav-link"
                  >
                    <motion.li
                      initial={{ y: -10, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ duration: 0.2, delay: 0.2, ease: "easeIn" }}
                    >
                      <span className="text-textOrange">01.</span> About
                    </motion.li>
                  </Link>
                  <Link
                    href="/"
                    className="flex items-center gap-1 font-medium text-textDark hover:text-textOrange cursor-pointer
                    duration-300 nav-link"
                  >
                    <motion.li
                      initial={{ y: -10, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ duration: 0.2, delay: 0.3, ease: "easeIn" }}
                    >
                      <span className="text-textOrange">02.</span> Experience
                    </motion.li>
                  </Link>
                  <Link
                    href="/"
                    className="flex items-center gap-1 font-medium text-textDark hover:text-textOrange cursor-pointer
                    duration-300 nav-link"
                  >
                    <motion.li
                      initial={{ y: -10, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ duration: 0.1, delay: 0.3 }}
                    >
                      <span className="text-textOrange">03.</span> Projects
                    </motion.li>
                  </Link>
                  <Link
                    href="/Contact"
                    className="flex items-center gap-1 font-medium text-textDark hover:text-textOrange cursor-pointer
                    duration-300 nav-link"
                  >
                    <motion.li
                      initial={{ y: -10, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ duration: 0.2, delay: 0.4, ease: "easeIn" }}
                    >
                      <span className="text-textOrange">04.</span> Contact
                    </motion.li>
                  </Link>
                </ul>
                <a href="/assets/mamadou-resume.pdf" target="_blank">
                  <motion.button
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.6, ease: "easeIn" }}
                    className="w-32 h-10 rounded-md text-textOrange text-[13px] border border-textOrange hover:bg-hoverColor duration-300"
                  >
                    Download CV
                  </motion.button>
                </a>
                <div className="flex gap-4">
                  <a href="https://github.com/alaminediassy" target="_blank">
                    <span
                      className="w-10 h-10 text-xl bg-hoverColor rounded-full inline-flex items-center justify-center hover:text-textOrange cursor-pointer
                hover:translate-y-2 transition-all duration-300"
                    >
                      <TbBrandGithub />
                    </span>
                  </a>
                  <motion.a
                    href="https://github.com/alaminediassy"
                    target="_blank"
                  >
                    <span
                      className="w-10 h-10 text-xl bg-hoverColor rounded-full inline-flex items-center justify-center hover:text-textOrange cursor-pointer
                hover:translate-y-2 transition-all duration-300"
                    >
                      <SlSocialYoutube />
                    </span>
                  </motion.a>
                  <motion.a
                    href="https://www.linkedin.com/in/mamadou-lamine-diassy-0946b31a6/"
                    target="_blank"
                  >
                    <span
                      className="w-10 h-10 text-xl bg-hoverColor rounded-full inline-flex items-center justify-center hover:text-textOrange cursor-pointer
                hover:translate-y-2 transition-all duration-300"
                    >
                      <SlSocialLinkedin />
                    </span>
                  </motion.a>
                  <motion.a
                    href="https://www.facebook.com/diassy.al.amine"
                    target="_blank"
                  >
                    <span
                      className="w-10 h-10 text-xl bg-hoverColor rounded-full inline-flex items-center justify-center hover:text-textOrange cursor-pointer
                hover:translate-y-2 transition-all duration-300"
                    >
                      <SlSocialFacebook />
                    </span>
                  </motion.a>
                  <motion.a
                    href="https://www.instagram.com/diassy_alamine/"
                    target="_blank"
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 1, ease: "easeIn" }}
                  >
                    <span
                      className="w-10 h-10 text-xl bg-hoverColor rounded-full inline-flex items-center justify-center hover:text-textOrange cursor-pointer
                hover:translate-y-2 transition-all duration-300"
                    >
                      <SlSocialInstagram />
                    </span>
                  </motion.a>
                </div>
              </div>
              <motion.a
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.2, ease: "easeIn" }}
                href="mailto:diassy.alamine@gmail.com"
                className="text-sm w-72 tracking-widest text-white hover:text-textOrange/80 text-center mt-4">
                    <p>diassy.alamine@gmail.com</p>
                </motion.a>
            </motion.div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
