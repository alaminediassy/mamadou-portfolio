import React from 'react'

const Footer = () => {
  return (
    <footer className='mt-32 flex-none'>
        <div className='sm:px-8'>
            <div className='mx-auto w-full max-w-7xl lg:px-8'>
                <div className='border-t border-textSlow/60 pb-16 pt-10 dark:border-zinc-700/40'>
                    
                    <div className='relative px-4 sm:px-8 lg:px-12'>
                        <div className='mx-auto max-w-2xl lg:max-w-5xl'>
                            <div className='flex flex-col items-center justify-between gap-6 sm:flex-row'>
                                <div className='flex flex-wrap justify-start gap-x-6 gap-y-1 text-sm font-medium text-textLight dark:text-textLight'>
                                    <a href="#" className='transition hover:text-textOrange dark:hover:text-textOrange'>
                                        About
                                    </a>
                                    <a href="#" className='transition hover:text-textOrange dark:hover:text-textOrange'>
                                        Experiences
                                    </a>
                                    <a href="#" className='transition hover:text-textOrange dark:hover:text-textOrange'>
                                        Projects
                                    </a>
                                    <a href="#" className='transition hover:text-textOrange dark:hover:text-textOrange'>
                                        Contact
                                    </a>
                                </div>
                                <p className='text-sm text-textLight'>
                                    © 2023 Mamadou Lamine DIASSY. All rights reserved 
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </footer>
  )
}

export default Footer