import Header from "@/components/Header";
import Image from "next/image";
import Almine from "../public/assets/images/alamine.jpeg";
import Footer from "@/components/Footer";

import {
  SlSocialLinkedin,
  SlSocialFacebook,
  SlSocialInstagram,
  SlSocialTwitter,
} from "react-icons/sl";
import { BsGithub } from "react-icons/bs";
import { FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import Link from "next/link";
import Navbar from "@/components/Navbar";

const AboutSection = () => {
  return (
    <div
      className="rw-full h-screen font-bodyFont bg-bodyColor text-textLight overflow-x-hidden
      overflow-y-scroll"
    >
      <Navbar />
      <main className="flex-auto">
        <div className="sm:px-8 mt-16 sm:mt-32">
          <div className="mx-auto w-full max-w-7xl lg:px-8">
            <div className="relative px-4 sm:px-8 lg:px-12">
              <div className="mx-auto max-w-2xl lg:max-w-5xl">
                <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12">
                  <div className="lg:pl-20">
                    <div className="max-w-xs px-2.5 lg:max-w-none">
                      <Image
                        src={Almine}
                        alt="me"
                        className="aspect-square rotate-3  rounded-2xl bg-zinc-100 object-cover dark:bg-textSlow
                        hover:translate-y-2 duration-300 transition-transform transform hover:scale-110"
                      />
                    </div>
                  </div>
                  <div className="lg:order-first lg:row-span-2">
                    <span className="text-xl">Salut, je m&apos;appelle</span>
                    <h1 className="text-3xl pt-6 font-bold tracking-tight  text-textLight dark:text-textLight sm:text-5xl">
                      Mamadou Lamine DIASSY
                    </h1>
                    <div className="mt-6 space-y-7 text-base text-textSlow/80">
                      <p>
                        je suis un passionné du monde de l&apos;informatique,
                        particulièrement du développement web. Mon
                        parcoursacadémique a été façonné par ma quête constante
                        de maîtriser les compétences nécessaires pour exceller
                        dans ce domaine dynamique et en constante évolution.
                      </p>
                      <p>
                        J&apos;ai obtenu ma Licence en Mathématiques Appliquées et
                        Informatiques, où j&apos;ai acquis une solide base en
                        algorithmes, en résolution de problèmes complexes et en
                        logique mathématique. Cette fondation m&apos;a permis de
                        comprendre les principes sous-jacents du développement
                        logiciel de manière approfondie.
                      </p>
                      <p>
                        Par la suite, j&apos;ai complété mon Bachelor en Responsable
                        de Projet Informatique avec une spécialité en
                        développement web. C&apos;est là que j&apos;ai découvert ma
                        passion pour la création de solutions web interactives
                        et conviviales. J&apos;ai appris à travailler en équipe, à
                        gérer des projets et à aligner les objectifs techniques
                        sur les besoins des utilisateurs finaux.
                      </p>
                      <p>
                        Actuellement, je suis en train de rédiger mon mémoire
                        pour mon Master en Ingénierie Logicielle, où je me
                        plonge dans des sujets avancés liés à la conception
                        logicielle, à l&apos;optimisation des performances et à la
                        sécurité des applications. Simultanément, je poursuis un
                        Master en Développement et Validation Logicielle, ce qui
                        me permet d&apos;explorer de nouvelles perspectives et
                        d&apos;acquérir des compétences complémentaires.
                      </p>
                    </div>
                  </div>
                  <div className="lg:pl-20">
                    <ul>
                      <li className="mt-4 flex">
                        <Link
                          href="https://twitter.com/diassy_al_amine"
                          className="group flex text-sm font-medium text-textSlow transition 
                        hover:text-textOrange dark:text-textSlow dark:hover:text-textOrange"
                        >
                          <span className="h-6 w-6 text-xl flex-none fill-zinc-500 transition group-hover:fill-textOrange">
                            <SlSocialTwitter />
                          </span>
                          <span className="ml-4">Follow on Twitter</span>
                        </Link>
                      </li>
                      <li className="mt-4 flex">
                        <Link
                          href="https://instagram.com/lamiinediassy?igshid=OGQ5ZDc2ODk2ZA=="
                          className="group flex text-sm font-medium text-textSlow transition 
                        hover:text-textOrange dark:text-textSlow dark:hover:text-textOrange"
                        >
                          <span className="h-6 w-6 text-xl flex-none fill-zinc-500 transition group-hover:fill-textOrange">
                            <SlSocialInstagram />
                          </span>
                          <span className="ml-4">Follow on Instagram</span>
                        </Link>
                      </li>
                      <li className="mt-4 flex">
                        <Link
                          href="https://github.com/alaminediassy"
                          className="group flex text-sm font-medium text-textSlow transition 
                        hover:text-textOrange dark:text-textLight dark:hover:text-textOrange"
                        >
                          <span className="h-6 w-6 text-xl flex-none fill-zinc-500 transition group-hover:fill-textOrange">
                            <BsGithub />
                          </span>
                          <span className="ml-4">Follow on Github</span>
                        </Link>
                      </li>
                      <li className="mt-4 flex">
                        <Link
                          href="https://www.linkedin.com/in/mamadou-lamine-diassy-0946b31a6/"
                          className="group flex text-sm font-medium text-textSlow transition 
                        hover:text-textOrange dark:text-textSlow dark:hover:text-textOrange"
                        >
                          <span className="h-6 w-6 text-xl flex-none fill-zinc-500 transition group-hover:fill-textOrange">
                            <FaLinkedin />
                          </span>
                          <span className="ml-4">Follow on Linkedin</span>
                        </Link>
                      </li>
                      <li className="mt-8 border-t border-textSlow/60 pt-8 dark:border-zinc-700/40 flex">
                        <Link
                          href="mailto:diassy.alamine@gmail.com"
                          className="group flex text-sm font-medium text-textSlow transition 
                        hover:text-textOrange dark:text-textSlow dark:hover:text-textOrange"
                        >
                          <span className="h-6 w-6 text-xl flex-none fill-zinc-500 transition group-hover:fill-textOrange">
                            <MdEmail />
                          </span>
                          <span className="ml-4">diassy.alamine@gmail.com</span>
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default AboutSection;
