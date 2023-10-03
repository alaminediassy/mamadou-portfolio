import Navbar from "@/components/Navbar";
import Head from "next/head";
import { motion, useScroll } from "framer-motion";
import Banner from "@/components/Banner";
import Footer from "@/components/Footer";
import Content from "@/components/Content";
import Background from "@/components/Background";
import Skills from "@/components/Skills";
import RightSide from "@/components/RightSide"
import Archive from "@/components/Archive";

export default function Home() {
  const { scrollYProgress } = useScroll();
  
  return (
    <>
    <Head>
      <title>Mamadou DIASSY</title>
      <link rel="icon" href="" />
    </Head>
    <motion.div
    className="fixed top-0 left-0 right-0 h-6 bg-textOrange transform-none "
    style={{ scaleX: scrollYProgress }}
    >
      <main className='w-full h-screen font-bodyFont bg-bodyColor text-textLight overflow-x-hidden
      overflow-y-scroll'>
        <Navbar/>
        
        <div className="w-full h-[88vh] xl:flex items-center gap-20 justify-between ">
          
          <motion.div 
          initial={{ opacity: 0}}
          animate={{ opacity: 1}}
          transition={{ delay: 1.5 }}
          className="hidden xl:inline-flex w-32 h-full fixed left-0 bottom-0">
            {/* <LeftSide/> */}
          </motion.div>
          <div className="h-[88vh] w-full mx-auto p-4 ">
            <Banner/>
            <Skills/>
            {/* <Archive/> */}
            <Content/>
            <Footer/>
          </div>
          <motion.div 
          initial={{ opacity: 0}}
          animate={{ opacity: 1}}
          transition={{ delay: 1.5 }}
          className="hidden xl:inline-flex w-32 h-full fixed right-0 bottom-0">
            <RightSide/>
          </motion.div>
        </div> 
      </main>
    </motion.div>
    </>
  )
}




      
      