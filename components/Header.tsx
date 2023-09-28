import Link from "next/link";
import { useRouter } from "next/router";

const Header = () => {
  const router = useRouter();
  const navigation = [
    {name: 'Home', href: '/'},
    {name: 'About', href: '/About'},
    {name: 'Articles', href: '/Articles'},
    {name: 'Projets', href: '/Projets'},
    {name: 'Experience', href: '/Experience'},
    {name: 'Contact', href: '/Contact'},
  ]
  
  return (
    <div>
      <div className="pointer-events-none relative z-50 flex flex-none flex-col">
      <div className="top-0 z-10 h-16 pt-6">
        <div className="sm:px-8 top-[var(--header-top,theme(spacing.6))] w-full">
          <div className="mx-auto w-full max-w-7xl lg:px-8">
            <div className="relative px-4 sm:px-8 lg:px-12">
              <div className="mx-auto max-w-2xl lg:max-w-5xl">
                <div className="relative flex gap-4">
                  <div className="flex flex-1">
                    <div
                      className="h-12 w-12 rounded-full p-0.5 
                                        shadow-lg shadow-zinc-800/5 
                                        backdrop-blur dark:bg-zinc-800/90"
                    >
                      <Link href="/" className="pointer-events-auto">
                        {/* <Image src={Profile} alt="logo" className="" /> */}
                      </Link>
                    </div>
                  </div>
                  <div className="flex flex-1 justify-end md:justify-center">
                    <div className="pointer-events-auto md:hidden">
                      <button
                        className="group flex items-center rounded-full bg-white/10 px-4 py-2 text-sm font-medium text-zinc-800 shadow-lg 
                      shadow-zinc-800/5 ring-1 ring-zinc-900/5 backdrop-blur dark:bg-white/10 
                      dark:text-zinc-200 dark:ring-white/10 dark:hover:ring-white/20"
                        type="button"
                      >
                        Menu
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth="1.5"
                          stroke="currentColor"
                          className="ml-3 h-auto w-2 stroke-zinc-500 group-hover:stroke-zinc-700 dark:group-hover:stroke-zinc-400"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                          />
                        </svg>
                      </button>
                    </div>
                    <div className="fixed top-1 left-1 w-1 h-0 p-0 m-1 overflow:hidden"></div>
                    <nav className="pointer-events-auto hidden md:block">
                      <ul
                        className="flex rounded-full bg-white/10 px-3 text-sm font-medium text-zinc-200 
                        shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/5 backdrop-blur dark:bg-white/10 
                        dark:text-zinc-200 dark:ring-white/10"
                      >
                        <li>
                          <a
                            href="#"
                            className="relative block px-3 py-2 transition text-textOrange dark:text-textOrange"
                          >
                            About
                            <span
                              className="absolute inset-x-1 -bottom-px h-px bg-gradient-to-r from-teal-500/0 
                                    via-orange-400/70 to-teal-500/0 dark:from-orange-400/80 dark:via-orange-400/60 dark:to-teal-400/0"
                            ></span>
                          </a>
                        </li>
                        <li>
                          <a
                            href="#"
                            className="relative block px-3 py-2 transition hover:text-textOrange dark:hover:text-textOrange"
                          >
                            Articles
                          </a>
                        </li>
                        <li>
                          <a
                            href="#"
                            className="relative block px-3 py-2 transition hover:text-textOrange dark:hover:text-textOrange"
                          >
                            Projects
                          </a>
                        </li>
                        <li>
                          <a
                            href="#"
                            className="relative block px-3 py-2 transition hover:text-textOrange dark:hover:text-textOrange"
                          >
                            Speaking
                          </a>
                        </li>
                        <li>
                          <a
                            href="#"
                            className="relative block px-3 py-2 transition hover:text-textOrange dark:hover:text-textOrange"
                          >
                            Uses
                          </a>
                        </li>
                      </ul>
                    </nav>
                  </div>
                  <div className="flex justify-end md:flex-1">
                    <div className="pointer-events-auto">
                      <button
                        className="group rounded-full bg-white/10 px-3 py-2 shadow-lg 
                            shadow-zinc-800/5 ring-1 ring-zinc-900/5 backdrop-blur transition 
                            dark:bg-white/10 dark:ring-white/10 dark:hover:ring-white/20"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth="1.5"
                          stroke="currentColor"
                          className="h-6 w-6 hover:text-textOrange transition 
                          "
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
                          />
                        </svg>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth="1.5"
                          stroke="currentColor"
                          className="hidden h-6 w-6 fill-zinc-700 stroke-zinc-500 transition 
                            dark:block [@media(prefers-color-scheme:dark)]:group-hover:stroke-zinc-400 
                            [@media_not_(prefers-color-scheme:dark)]:fill-teal-400/10 
                            [@media_not_(prefers-color-scheme:dark)]:stroke-textOrange"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z"
                          />
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
    
  );
};

export default Header;
