import { motion } from "framer-motion"
import Image from "next/image"
import Avatar from "../public/assets/images/alamine_profile.png"
import Link from "next/link"

const Banner = () => {
  return (
    <section id='home' className='max-w-contentContainer mx-auto py-4 mdl:py-4 flex flex-col gap-4 lgl:gap-8 mdl:px-10 xl:px-4 '>
        <div className="block h-36 w-36 origin-left pointer-events-auto">
        <Image 
        src={Avatar}
        alt="Avatar"/>
        </div>
        <div className='relative isolate'>
        {/* <svg viewBox="0 0 1024 1024"
            className="absolute left-1/2 top-1/2 -z-10 h-[64rem] w-[64rem] -translate-y-1/2 [mask-image:radial-gradient(closest-side,white,transparent)] sm:left-full opacity-20 sm:-ml-80 lg:left-1/2 lg:ml-0 lg:-translate-x-1/2 lg:translate-y-0"
            aria-hidden="true"
        >
        <circle cx={512} cy={512} r={512} fill="url(#759c1415-0410-454c-8f7c-9a820de03641)" fillOpacity="0.7" />
        <defs>                        
        <radialGradient id="759c1415-0410-454c-8f7c-9a820de03641">
        <stop stopColor="#c2410c" />
        <stop offset={1} stopColor="#000000" />
        </radialGradient>
        </defs>
        </svg>     */}            
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
            Software developer, intern in <br /> web development, and amateur in design.{" "}
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
            <Link href="/About">
             <span className="text-textOrange inline-flex relative cursor-pointer h-7 overflow-x-hidden group ">
                Learn more
                <span className="absolute w-full h-[1px] bg-textOrange left-0 bottom-1 -translate-x-[110%] group-hover:translate-x-0
                transition-transform duration-500"></span>
                </span>
            </Link>
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