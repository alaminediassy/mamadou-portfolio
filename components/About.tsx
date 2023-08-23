import Image from "next/image"
import SectionTitle from "./SectionTitle"
import { AiFillThunderbolt } from "react-icons/ai"
import profilImg from "@/public/assets/images/alamine.jpeg"

const About = () => {
  return (
    <section
    id="about"
    className="max-w-containerSmall mx-auto py-10f lgl:py-32 flex flex-col gap-8"
    >
        <SectionTitle title="About Me" titleNo="01" />
        <div className="flex flex-col lgl:flex-row gap-16">
            <div className="w-full lgl:w-2/3 text-base text-textdark font-medium flex flex-col gap-4">
                <p>
                    Hello my name is Mamadou Lamine DAISY and I like to create modern and attractive user interfaces.
                    My interest in web development started in 2016 when I decided to try editing wordpress themes from scratch.
                    Over time, this passion has become a daily reality for me.
                </p>
                <p>
                    Fast-forward to today, and I had the privilege of working at an advertising agency, a start-up,{" "}
                    <span className="text-textOrange ">a huge corporation, and a student-led design studio</span>.
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio rem accusantium fugiat 
                    veritatis, quidem repellat
                    <span className="text-textOrange "> ab natus possimus? Sint, accusamus!</span>
                </p>
                <p>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorem ullam eligendi
                    dolorum nostrum possimus quos iusto magnam ut esse recusandae.
                </p>
                <p>
                    Here are a few technologies I have been working with recently :
                </p>
                <ul className="max-w-[450] text-sm font-titleFont grid grid-cols-2 gap-2 mt-6">
                    <li className="flex items-center gap-2">
                        <span className="text-textOrange ">
                            <AiFillThunderbolt/>
                        </span>
                        Javascript (ES6+)
                    </li>
                    <li className="flex items-center gap-2">
                        <span className="text-textOrange ">
                            <AiFillThunderbolt/>
                        </span>
                        next js
                    </li>
                    <li className="flex items-center gap-2">
                        <span className="text-textOrange ">
                            <AiFillThunderbolt/>
                        </span>
                        node js
                    </li>
                    <li className="flex items-center gap-2">
                        <span className="text-textOrange ">
                            <AiFillThunderbolt/>
                        </span>
                        Node js
                    </li>
                    <li className="flex items-center gap-2">
                        <span className="text-textOrange ">
                            <AiFillThunderbolt/>
                        </span>
                        Typescript
                    </li>
                    <li className="flex items-center gap-2">
                        <span className="text-textOrange ">
                            <AiFillThunderbolt/>
                        </span>
                        Express
                    </li>
                    <li className="flex items-center gap-2">
                        <span className="text-textOrange ">
                            <AiFillThunderbolt/>
                        </span>
                        MongoDb
                    </li>
                    <li className="flex items-center gap-2">
                        <span className="text-textOrange ">
                            <AiFillThunderbolt/>
                        </span>
                        tailwind css
                    </li>
                </ul>
            </div>
            <div className="w-full lgl:w-1/3 h-80 relative group">
                <div>
                    <div>
                        <Image
                        src={profilImg}
                        className="rounded-lg h-full object-cover"
                        alt="profilImg"
                        />
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default About