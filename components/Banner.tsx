import { motion } from "framer-motion"
import Image from "next/image"
import Avatar from "../public/assets/images/alamine_profile.png"

const Banner = () => {
  return (
    <section id='home' className='max-w-contentContainer mx-auto py-4 mdl:py-4 flex flex-col gap-4 lgl:gap-8 mdl:px-10 xl:px-4 '>
        <div className="block h-36 w-36 origin-left pointer-events-auto">
        <Image 
        src={Avatar}
        alt="Avatar"/>
        </div>
        
        {/* <motion.h3 
        initial={{ y:10, opacity: 0}}
        animate={{ y: 0, opacity: 1}}
        transition={{duration: 0.5, delay: 0.6}}
        className='text-lg font-titleFont tracking-wide text-textOrange'>
            Hi, my name is
        </motion.h3> */}
        <motion.h1
        initial={{ y:10, opacity: 0}}
        animate={{ y: 0, opacity: 1}}
        transition={{duration: 0.5, delay: 0.7}}
        className="text-5xl lgl:text-5xl font-titleFont font-semibold flex flex-col tracking-tight sm:text-5xl "
        >
            Software developer, intern in <br /> web development, and amateur design.{" "}
            {/* <span className="text-textdark mt-2 lgl:mt-4">
                I build things for the web.
            </span> */}
        </motion.h1>
        <motion.p 
        initial={{ y:10, opacity: 0}}
        animate={{ y: 0, opacity: 1}}
        transition={{duration: 0.5, delay: 0.8}}
        className="text-base md:max-w-[900px] text-textdark font-medium
        ">
            I am Mamadou Lamine DIASSY currently doing an internship in web development at intrepide Studio in Luxembourg.
            I have strong fundation in frontend & backend development and am skilled in creating best user experience.{" "}
            <a href="https://github.com/alaminediassy" target="_blank">
             <span className="text-textOrange inline-flex relative cursor-pointer h-7 overflow-x-hidden group ">
                Learn more
                <span className="absolute w-full h-[1px] bg-textOrange left-0 bottom-1 -translate-x-[110%] group-hover:translate-x-0
                transition-transform duration-500"></span>
                </span>
            </a>
        </motion.p>
        {/* <motion.button
        initial={{ y:10, opacity: 0}}
        animate={{ y: 0, opacity: 1}}
        transition={{duration: 0.5, delay: 0.9}}
        className="w-52 h-14 text-sm font-titleFont border border-textOrange rounded-md text-textOrange tracking-wide hover:bg-hoverColor duration-300">
            Check out my project !
        </motion.button> */}
    </section>
  )
}

export default Banner