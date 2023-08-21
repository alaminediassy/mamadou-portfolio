import React from 'react'
import { TbBrandGithub } from "react-icons/tb"
import { SlSocialYoutube } from "react-icons/sl"
import {
    SlSocialLinkedin,
    SlSocialFacebook,
    SlSocialInstagram
} from "react-icons/sl"

export const LeftSide = () => {
  return (
    <div className='w-full h-full flex flex-col items-center justify-end gap-4 text-textLight'>
        <div className='flex flex-col gap-4'>
            <a href="https://github.com/alaminediassy" target='_blank'>
                <span className='w-10 h-10 text-xl bg-hoverColor rounded-full inline-flex items-center justify-center hover:text-textOrange cursor-pointer
                hover:translate-y-2 transition-all duration-300'>
                    <TbBrandGithub/>
                </span>
            </a>
            <a href="https://github.com/alaminediassy" target='_blank'>
                <span className='w-10 h-10 text-xl bg-hoverColor rounded-full inline-flex items-center justify-center hover:text-textOrange cursor-pointer
                hover:translate-y-2 transition-all duration-300'>
                    <SlSocialYoutube/>
                </span>
            </a>
            <a href="https://www.linkedin.com/in/mamadou-lamine-diassy-0946b31a6/" target='_blank'>
                <span className='w-10 h-10 text-xl bg-hoverColor rounded-full inline-flex items-center justify-center hover:text-textOrange cursor-pointer
                hover:translate-y-2 transition-all duration-300'>
                    <SlSocialLinkedin/>
                </span>
            </a>
            <a href="https://www.facebook.com/diassy.al.amine" target='_blank'>
                <span className='w-10 h-10 text-xl bg-hoverColor rounded-full inline-flex items-center justify-center hover:text-textOrange cursor-pointer
                hover:translate-y-2 transition-all duration-300'>
                    <SlSocialFacebook/>
                </span>
            </a>
            <a href="https://www.instagram.com/diassy_alamine/" target='_blank'>
                <span className='w-10 h-10 text-xl bg-hoverColor rounded-full inline-flex items-center justify-center hover:text-textOrange cursor-pointer
                hover:translate-y-2 transition-all duration-300'>
                    <SlSocialInstagram/>
                </span>
            </a>
        </div>
        <div className='w-[2px] h-32 bg-textdark'></div>
    </div>
  )
}
