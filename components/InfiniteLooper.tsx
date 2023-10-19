import Image from 'next/image'
import React from 'react'
import Image1 from "../public/assets/images/image-1.jpeg"
import Image2 from "../public/assets/images/image-2.jpeg"
import Image3 from "../public/assets/images/image-3.jpeg"
import Image4 from "../public/assets/images/image-4.jpeg"
import Image5 from "../public/assets/images/image-5.jpeg"


const images = [
  {
    src: Image1,
    id: 1,
    alt: "Projet 1",
  },
  {
    src: Image2,
    id: 2,
    alt: "Projet 2",
  },
  {
    src: Image3,
    id: 3,
    alt: "Projet 3",
  },
  {
    src: Image4,
    id: 4,
    alt: "Projet 4",
  },
  {
    src: Image5,
    id: 5,
    alt: "Projet 5",
  },
  {
    src: Image1,
    id: 1,
    alt: "Projet 1",
  },
  {
    src: Image2,
    id: 1,
    alt: "Projet 2",
  },
  {
    src: Image3,
    id: 1,
    alt: "Projet 3",
  },
  {
    src: Image4,
    id: 1,
    alt: "Projet 4",
  },
  {
    src: Image5,
    id: 1,
    alt: "Projet 5",
  },
  {
    src: Image1,
    id: 1,
    alt: "Projet 1",
  },
  {
    src: Image2,
    id: 1,
    alt: "Projet 2",
  },
  {
    src: Image3,
    id: 1,
    alt: "Projet 3",
  },
  {
    src: Image4,
    id: 1,
    alt: "Projet 4",
  },
];

const InfiniteLooper = () => {
  return (
    <div className='mt-16 sm:mt-20'>
        <div className='-my-4 flex justify-center gap-5 overflow-hidden py-4 sm:gap-8'>
          <div className='slide-track animation-scroll flex gap-4'
          style={{ width: "calc(250px * 14)" }}>
            {images.map((image) => (
              <div className='relative  gap-6  flex-none overflow-hidden rounded-xl  sm:w-72 sm:rounded-2xl'
              key={image.id}>
                <Image src={image?.src} 
                alt={image?.alt}
                
                className='slide absolute inset-0 w-[400px] h-[350px] object-cover'/>
              </div>
            ))}
          </div>
        </div>
    </div>
  )
}

export default InfiniteLooper