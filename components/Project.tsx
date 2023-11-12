import Navbar from "@/components/Navbar";
import { motion, useScroll } from "framer-motion";

// Import Imges
import Image from "next/image";
import projet from "../public/assets/images/projet.png"
import js from '../public/assets/images/front/js.png'
import react from '../public/assets/images/front/reactjs.png'
import mongodb from '../public/assets/images/back/mongodb.png'
import express from '../public/assets/images/back/express.png'
import node from '../public/assets/images/back/nodejs.png'

const projet_card = [
  {
    id: 1,
    title: "Mern Stack",
    description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit...",
    icon1: mongodb,
    icon2: express,
    icon3: react,
    icon4: node
  },
  {
    id: 2,
    title: "Mern Stack",
    description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit...",
    icon1: mongodb,
    icon2: express,
    icon3: react,
    icon4: node
  },
  {
    id: 2,
    title: "Mern Stack",
    description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit...",
    icon1: mongodb,
    icon2: express,
    icon3: react,
    icon4: node
  }
]


const Project = () => {
  const { scrollYProgress } = useScroll();
  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-6 bg-textOrange transform-none "
      style={{ scaleX: scrollYProgress }}
    >
      <main
        className="w-full h-screen font-bodyFont bg-bodyColor text-textLight overflow-x-hidden
      overflow-y-scroll"
      >
        <Navbar />
        <div className="text-center ">
          <h1 className="text-3xl text-white uppercase text-center pt-6 font-semibold">Découvrer mes projets</h1>
          <p className="text-md pt-3 mx-80">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Error repellendus similique doloribus beatae quibusdam commodi id, vel ut sequi provident</p>
        </div>
        <div className="max-w-contentContainer  mx-auto py-4 mdl:py-12 flex flex-col gap-4 lgl:gap-8 mdl:px-10 xl:px-4">
          <div>
            <div className="grid xl:grid-cols-3 mdl:grid-cols-2 gap-8 justify-center items-center mx-auto">
              {projet_card.map((index) => (
                  <div
                    key={index.id} className=" w-[330px] h-[385px] items-center overflow-hidden hover:translate-y-2 duration-300 transition-transform transform hover:scale-110 cursor-pointer">
                    <div className="bg-white/10 rounded-3xl">
                      <div className="h-100">
                        <Image src={projet} alt="projet" className="rounded-tl-3xl h-full object-cover rounded-tr-3xl"/>
                      </div>
                      <div className="p-4 items-center">
                        <h3 className="text-md font-semibold uppercase"> {index?.title} </h3>
                        <p className="text-sm pb-2"> {index?.description} </p>
                        <div className="flex flex-row gap-2"> 
                          <Image src={index?.icon1} width={30} height={30} alt="Javascript" className=""/>
                          <Image src={index?.icon2} width={30} height={30} alt="Javascript" className=""/>
                          <Image src={index?.icon3} width={30} height={30} alt="Javascript" className=""/>
                          <Image src={index?.icon4} width={30} height={30} alt="Javascript" className=""/>
                        </div>
                      </div>
                    </div>
                  </div>
              ))}
            </div>
          </div>
        </div>
      </main>
    </motion.div>
  );
};

export default Project;
