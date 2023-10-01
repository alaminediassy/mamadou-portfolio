import React from 'react'
import { motion } from "framer-motion";
import {
    SlSocialLinkedin,
    SlSocialFacebook,
    SlSocialInstagram,
  } from "react-icons/sl";
  import { TbBrandGithub } from "react-icons/tb";
  import { SlSocialYoutube } from "react-icons/sl";

const SocialLink = () => {
  return (
        <div>
            <div className="flex gap-4">
              <motion.a href="https://github.com/alaminediassy"
                target="_blank"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2, ease: "easeIn" }}
              >
                <span
                  className="w-10 h-10 text-xl bg-hoverColor rounded-full inline-flex items-center justify-center hover:text-textOrange cursor-pointer
                hover:translate-y-2 transition-all duration-300"
                >
                  <TbBrandGithub />
                </span>
              </motion.a>
              {/* <motion.a href="https://github.com/alaminediassy"
                target="_blank"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.4, ease: "easeIn" }}
                >
                <span
                  className="w-10 h-10 text-xl bg-hoverColor rounded-full inline-flex items-center justify-center hover:text-textOrange cursor-pointer
                hover:translate-y-2 transition-all duration-300"
                >
                  <SlSocialYoutube />
                </span>
              </motion.a> */}
              <motion.a
                href="https://www.linkedin.com/in/mamadou-lamine-diassy-0946b31a6/"
                target="_blank"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.6, ease: "easeIn" }}
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
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.8, ease: "easeIn" }}
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
    
  )
}

export default SocialLink