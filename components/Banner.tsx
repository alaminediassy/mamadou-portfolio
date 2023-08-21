import { motion } from "framer-motion"

const Banner = () => {
  return (
    <section id='home' className='max-w-contentContainer mx-auto py-10 mdl:py-24 flex flex-col gap-4 lgl:gap-8 mdl:px-10 xl:px-4 '>
        <motion.h3 
        initial={{ y:10, opacity: 0}}
        animate={{ y: 0, opacity: 1}}
        transition={{duration: 0.5, delay: 0.6}}
        className='text-lg font-titleFont tracking-wide text-textOrange'>
            Hi, my name is
        </motion.h3>
        <motion.h1
        initial={{ y:10, opacity: 0}}
        animate={{ y: 0, opacity: 1}}
        transition={{duration: 0.5, delay: 0.7}}
        className="text-4xl lgl:text-6xl font-titleFont font-semibold flex flex-col"
        >
            Mamadou Lamine DIASSY.{" "}
            <span className="text-textdark mt-2 lgl:mt-4">
                I build things for the web.
            </span>
        </motion.h1>
        <motion.p 
        initial={{ y:10, opacity: 0}}
        animate={{ y: 0, opacity: 1}}
        transition={{duration: 0.5, delay: 0.8}}
        className="text-base md:max-w-[650px] text)-textdark font-medium">
            I am currently doing an internship in web development at intrepide Studio in Luxembourg.
            I have strong fuundation in frontend & backend development and am skilled in creating
            user-friendly ans responsive web applications using react and its ecosystem.{" "}
            <a href="https://github.com/alaminediassy" target="_blank">
             <span className="text-textOrange inline-flex relative cursor-pointer h-7 overflow-x-hidden group ">
                Learn more
                <span className="absolute w-full h-[1px] bg-textOrange left-0 bottom-1 -translate-x-[110%] group-hover:translate-x-0
                transition-transform duration-500"></span>
                </span>
            </a>
        </motion.p>
        <motion.button
        initial={{ y:10, opacity: 0}}
        animate={{ y: 0, opacity: 1}}
        transition={{duration: 0.5, delay: 0.9}}
        className="w-52 h-14 text-sm font-titleFont border border-textOrange rounded-md text-textOrange tracking-wide hover:bg-hoverColor duration-300">
            Check out my project !
        </motion.button>
    </section>
  )
}

export default Banner