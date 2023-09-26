import Image from 'next/image'
import React from 'react'
import Image1 from "../public/assets/images/image-1.jpg"
import Image2 from "../public/assets/images/image-2.jpg"
import Image3 from "../public/assets/images/image-3.jpg"
import Image4 from "../public/assets/images/image-4.jpg"
import Image5 from "../public/assets/images/image-5.jpg"



const InfiniteLooper = () => {
  return (
    <div className='mt-16 sm:mt-20'>
        <div className='-my-4 flex justify-center gap-5 overflow-hidden py-4 sm:gap-8'>
            <div className='relative aspect-[9/10] w-44 flex-none overflow-hidden 
            rounded-xl  sm:w-72 sm:rounded-2xl rotate-2'>
                <Image src={Image1} alt='floatingImg'
                className='absolute inset-0 h-full w-full object-cover'/>
            </div>
            <div className='relative aspect-[9/10] w-44 flex-none overflow-hidden rounded-xl 
          sm:w-72 sm:rounded-2xl -rotate-2'>
                <Image src={Image2} alt='floatingImg'
                className='absolute inset-0 h-full w-full object-cover'/>
            </div>
            <div className='relative aspect-[9/10] w-44 flex-none overflow-hidden rounded-xl 
             sm:w-72 sm:rounded-2xl rotate-2'>
                <Image src={Image3} alt='floatingImg'
                className='absolute inset-0 h-full w-full object-cover'/>
            </div>
            <div className='relative aspect-[9/10] w-44 flex-none overflow-hidden rounded-xl 
             sm:w-72 sm:rounded-2xl rotate-2'>
                <Image src={Image4} alt='floatingImg'
                className='absolute inset-0 h-full w-full object-cover'/>
            </div>
            <div className='relative aspect-[9/10] w-44 flex-none overflow-hidden rounded-xl 
             sm:w-72 sm:rounded-2xl -rotate-2'>
                <Image src={Image5} alt='floatingImg'
                className='absolute inset-0 h-full w-full object-cover'/>
            </div>
        </div>
    </div>
  )
}

export default InfiniteLooper