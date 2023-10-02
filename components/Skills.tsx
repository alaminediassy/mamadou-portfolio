import Image from 'next/image'
import React from 'react'
// Frontend icon images
import js from '../public/assets/images/front/js.png'
import react from '../public/assets/images/front/reactjs.png'
import redux from '../public/assets/images/front/redux.png'
import nextjs from '../public/assets/images/front/nextjs.png'
import html from '../public/assets/images/front/html.png'
import css from '../public/assets/images/front/css.png'
import bootstrap from '../public/assets/images/front/bootstrap.png'
import tailwindcss from '../public/assets/images/front/tailwindcss.png'
import flutter from '../public/assets/images/front/flutter.png'
import angular from '../public/assets/images/front/angular.png'
// Backend icon images
import node from '../public/assets/images/back/nodejs.png'
import express from '../public/assets/images/back/express.png'
import java from '../public/assets/images/back/java.png'
import spring from '../public/assets/images/back/springboot.png'
import python from '../public/assets/images/back/python.png'
import php from '../public/assets/images/back/php.png'
import wordpress from '../public/assets/images/back/wordpress.png'
import mysql from '../public/assets/images/back/mysql.png'
import mongodb from '../public/assets/images/back/mongodb.png'
import docker from '../public/assets/images/back/docker.png'
// UI-UX Design icons
import figma from '../public/assets/images/uiuxdesign/figma.png'
import axd from '../public/assets/images/uiuxdesign/adobexd.png'
import illustrator from '../public/assets/images/uiuxdesign/illustrator.png'
import photoshop from '../public/assets/images/uiuxdesign/photoshop.png'
import indesign from '../public/assets/images/uiuxdesign/indesign.png'
// Others icons
import github from '../public/assets/images/others/github.png'
import gitlab from '../public/assets/images/others/gitlab.png'
import postman from '../public/assets/images/others/postman.png'
import intellij from '../public/assets/images/others/intellij.png'
import vscode from '../public/assets/images/others/vscode.png'



const skillFront = [
  {
    id: 1,
    programName: "React js",
    image: react,
  },
  {
    id: 2,
    programName: "Redux",
    image: redux,
  },
  {
    id: 3,
    programName: "Next js",
    image: nextjs,
  },
  {
    id: 4,
    programName: "Javascript",
    image: js,
  },
  {
    id: 5,
    programName: "HTML",
    image: html,
  },
  {
    id: 7,
    programName: "CSS",
    image: css,
  },
  {
    id: 6,
    programName: "Bootstrap",
    image: bootstrap,
  },
  {
    id: 8,
    programName: "Tailwind css",
    image: tailwindcss,
  },
  {
    id: 9,
    programName: "Flutter",
    image: flutter,
  },
  {
    id: 10,
    programName: "Angular js",
    image: angular,
  },
];

const skillBack = [
  {
    id: 1,
    programName: "Node js",
    image: node,
  },
  {
    id: 2,
    programName: "Express js",
    image: express,
  },
  {
    id: 3,
    programName: "Java",
    image: java,
  },
  {
    id: 4,
    programName: "Spring boot",
    image: spring,
  },
  {
    id: 5,
    programName: "Python",
    image: python,
  },
  {
    id: 6,
    programName: "PHP",
    image: php,
  },
  {
    id: 7,
    programName: "Wordpress",
    image: wordpress,
  },
  {
    id: 8,
    programName: "Mysql",
    image: mysql,
  },
  {
    id: 9,
    programName: "Mongo DB",
    image: mongodb,
  },
  {
    id: 10,
    programName: "Docker",
    image: docker,
  },
]

const skilUIUX = [
  {
    id: 1,
    programName: "Figma",
    image: figma,
  },
  {
    id: 2,
    programName: "Adobe xd",
    image: axd,
  },
  {
    id: 3,
    programName: "Illustrator",
    image: illustrator,
  },
  {
    id: 4,
    programName: "Photoshop",
    image: photoshop,
  },
  {
    id: 5,
    programName: "Indesign",
    image: indesign,
  },
]

const others = [
  {
    id: 1,
    programName: "Github",
    image: github,
  },
  {
    id: 2,
    programName: "Gitlab",
    image: gitlab,
  },
  {
    id: 3,
    programName: "Postman",
    image: postman,
  },
  {
    id: 4,
    programName: "Intellij",
    image: intellij,
  },
  {
    id: 5,
    programName: "Vscode",
    image: vscode,
  },
]

const Skills = () => {
  return (
    <section id='skills'>
        <div className='max-w-contentContainer  mx-auto py-4 mdl:py-28 flex flex-col gap-4 lgl:gap-8 mdl:px-10 xl:px-4'>
        <div className='text-center text-textLight pb-2'>
          <h1 className='text-3xl font-bold'>Skills</h1>
          <p>Here are some of the technologies I&apos;m currently engaged in.</p>
        </div>
        <div className='grid grid-cols-1 gap-8 md:grid-cols-2'>
         {/*  Frontend skills */}
          <div className='bg-black/5 rounded-2xl p-6 text-xl text-center ring-1 ring-white/20 drop-shadow-xl'>
            <h3 className='font-semibold text-2xl text-textLight pb-4'>Frontend</h3>
            <div className='flex flex-wrap gap-3 pr-4 pl-4 justify-center'>
              {skillFront.map((skill) => (
                <div 
                key={skill.id}
                className='text-center text-sm text-textLight font-semibold inline-flex items-center pl-3 pr-4 pt-2.5 pb-2.5 rounded-lg gap-4 ring-2 ring-white/10'>
                  <Image src={skill.image} alt='js' className='w-6'/>
                  <p> {skill.programName} </p>
                </div>
              ))}
            </div>
          </div>
          
          {/* Backend skills */}
          <div className='bg-black/5 rounded-2xl p-6 text-xl text-center ring-1 ring-white/20 drop-shadow-xl'>
            <h3 className='font-semibold text-2xl text-textLight pb-4'>Backend</h3>
            <div className='flex flex-wrap gap-3 pr-4 pl-4 justify-center'>
              {skillBack.map((skill) => (
                <div 
                key={skill.id}
                className='text-center text-sm text-textLight font-semibold inline-flex items-center pl-3 pr-4 pt-2.5 pb-2.5 rounded-lg gap-4 ring-2 ring-white/10'>
                  <Image src={skill.image} alt='js' className='w-6'/>
                  <p> {skill.programName} </p>
                </div>
              ))}
 
            </div>
          </div>
          
          {/* UI - UX Design skills */}
          <div className='bg-black/5 rounded-2xl p-6 text-xl text-center ring-1 ring-white/20 drop-shadow-xl'>
            <h3 className='font-semibold text-2xl text-textLight pb-4'>UX/UI Design</h3>
            <div className='flex flex-wrap gap-3 pr-4 pl-4 justify-center'>
              {skilUIUX.map((skill) => (
                <div 
                key={skill.id}
                className='text-center text-sm text-textLight font-semibold inline-flex items-center pl-3 pr-4 pt-2.5 pb-2.5 rounded-lg gap-4 ring-2 ring-white/10'>
                  <Image src={skill.image} alt='js' className='w-6'/>
                  <p> {skill.programName} </p>
                </div>
              ))}
 
            </div>
          </div>

          {/* Others technologies */}
          <div className='bg-black/5 rounded-2xl p-6 text-xl text-center ring-1 ring-white/20 drop-shadow-xl'>
            <h3 className='font-semibold text-2xl text-textLight pb-4'>UX/UI Design</h3>
            <div className='flex flex-wrap gap-3 pr-4 pl-4 justify-center'>
              {skilUIUX.map((skill) => (
                <div 
                key={skill.id}
                className='text-center text-sm text-textLight font-semibold inline-flex items-center pl-3 pr-4 pt-2.5 pb-2.5 rounded-lg gap-4 ring-2 ring-white/10'>
                  <Image src={skill.image} alt='js' className='w-6'/>
                  <p> {skill.programName} </p>
                </div>
              ))}
 
            </div>
          </div>
        </div>
        
      </div>
    </section>
    
  )
}

export default Skills