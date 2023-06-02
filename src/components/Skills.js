import React from 'react'
import {motion} from "framer-motion"

const Skill = ({name, x,y}) =>{
    return (
        <motion.div className='flex items-center justify-center rounded-full font-semibold  absolute
         bg-dark text-light py-2 px-3 shadow-dark cursor-pointer  dark:text-dark dark:bg-light 
          dark:border-light lg:py-2 lg:px-4 md:text-sm md:py-1.5 md:px-3 xs:bg-transparent xs:dark:bg-transparent
           xs:text-dark xs:dark:text-light xs:font:bold'
          
        whileHover={{scale:1.08}}
        initial={{x:0,y:0}}
        whileInView={{x:x, y:y, transition:{duration: 1.5}}}
        viewport={{once:true }}
        >
            {name}
        </motion.div>
    )
}
const Skills = () => {
  return (
    <>
        <h2 className='font-bold text-8xl mt-60 mb-12 w-full text-center md:text-6xl md:mt-32'>Skills</h2>
        <div className='w-full  h-screen relative flex items-center justify-center rounded-full 
        bg-circularLight dark:bg-circularDark lg:h-[80vh] sm:h-[60vh] xs:h-[50vh] 
        lg:bg-circularLightLg lg:dark:bg-circularDarkLg  
        md:bg-circularLightMd md:dark:bg-circularDarkMd 
        sm:bg-circularLightSm sm:dark:bg-circularDarkSm'>

            <motion.div className='flex items-center justify-center rounded-full font-semibold
             bg-dark text-light py-2 px-4 shadow-dark cursor-pointer absolute dark:text-dark dark:bg-light  lg:p-6 md:p-4 xs:text-xs xs:p-2'
            whileHover={{scale:1.08}}
            >
                Tech Stack
            </motion.div>

            <Skill name="HTML"         x="1vw" y="-8vw"   />
            <Skill name="NodeJS"       x="24vw" y="-7vw"    />
            <Skill name="TailwindCSS"  x="0vw" y="-21vw"  />
            <Skill name="ReactJS"      x="22vw" y="-18vw"  />
            <Skill name="NextJS"       x="10vw" y="-14vw"  />
            <Skill name="BootStrap"    x="-12vw" y="-14vw" />
            <Skill name="DBMS"         x="-13vw" y="-3vw"    />
            <Skill name="Linux"        x="3vw" y="8vw"    />
            <Skill name="JavaScript"   x="27vw" y="5vw"    />
            <Skill name="Solidity"     x="-18vw" y="18vw"    />
            <Skill name="C++"          x="-20vw" y="4vw"  />
            <Skill name="C"            x="-10vw" y="6vw"   />
            <Skill name="Python"       x="16vw" y="13vw"   />
            <Skill name="MySQL"        x="-25vw" y="-10vw"    />
            <Skill name="Git"          x="-6vw" y="15vw"  />
            <Skill name="Django"       x="6vw" y="20vw" />
            <Skill name="MongoDB"      x="-33vw" y="0vw"  />
            <Skill name="CSS"          x="+13vw" y="0vw"  />
            <Skill name="Blockchain"          x="-27vw" y="11vw"  />
        </div>
    </>
  )
}

export default Skills
