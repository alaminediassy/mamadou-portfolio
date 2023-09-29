import Navbar from "@/components/Navbar";
import Head from "next/head";
import { motion } from "framer-motion";
import Banner from "@/components/Banner";
import Footer from "@/components/Footer";
import Content from "@/components/Content";

export default function Home() {
  return (
    <>
    <Head>
      <title>Mamadou DIASSY</title>
      <link rel="icon" href="" />
    </Head>
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
          <Content/>
          <Footer/>
        </div>
        <motion.div 
        initial={{ opacity: 0}}
        animate={{ opacity: 1}}
        transition={{ delay: 1.5 }}
        className="hidden xl:inline-flex w-32 h-full fixed right-0 bottom-0">
          {/* <RightSide/> */}
        </motion.div>
      </div> 
    </main>
    </>
  )
}




      
      