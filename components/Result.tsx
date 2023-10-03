import smiley from '../public/assets/images/smiley.png'
import Image from "next/image";

const Result = () => {
  return (
    <div className='text-center text-md text-textLight pt-6 flex flex-col items-center'>
         Message envoyé avec succès
        <Image src={smiley} alt="smiley" className="w-14 pt-2"/>
    </div>
  )
}
export default Result