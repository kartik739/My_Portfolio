import AnimatedText from '@/components/AnimatedText'
import Layout from '@/components/Layout'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import article1 from "../../public/images/articles/pagination component in reactjs.jpg"
import article2 from "../../public/images/articles/create loading screen in react js.jpg"
import article3 from "../../public/images/articles/form validation in reactjs using custom react hook.png"
import article4 from "../../public/images/articles/create modal component in react using react portals.png"
import article5 from "../../public/images/articles/smooth scrolling in reactjs.png"
import article6 from "../../public/images/articles/What is Redux with easy explanation.png"

import {motion} from "framer-motion";
import TransitionEffect from '@/components/TransitionEffect'


const FramerImage = motion(Image);


const FeaturedArticles = ({img, title, time, summary, link}) => {
    return (
        <motion.li className='col-span-1 w-full p-4 bg-light border border-solid border-dark
         rounded-2xl relative dark:bg-dark dark:border-light'
         initial={{y:180}}
         whileInView={{y:0, transition:{duration:0.5, ease:"easeInOut"}}}
         viewport={{once: true}}>
            <div className='absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2.5rem] bg-dark 
            rounded-br-3xl'>
                </div>
            <Link href={link} target="_blank" className='w-full inline-block cursor-pointer overflow-hidden
             rounded-lg'>
                <FramerImage src={img} alt={title} className="w-full h-auto" 
                whileHover={{scale:1.05}}
                transition={{duration:0.2}}
                priority
                size="(max-width:768px) 100vw,
                (max-width:1200px) 50v, 33vw"
                />
            </Link>
            <Link href={link} target="_blank">
                <h2 className='capitalize text-2xl font-bold my-2 hover:underline xs:text-lg'>{title}</h2>
            </Link>
            <p className='text-sm mb-2'>{summary}</p>
            <span className='text-primary dark:text-primaryDark font-semibold'>{time}</span>
        </motion.li>
    )
}

const Articles = () => {
  return (
    <>
    <Head>
        <title>Kartik Goel | Articles page</title>
        <meta name="description" content = "any description" />
    </Head>
    <TransitionEffect />
    <main className='w-full mb-16 flex flex-col items-center justify-center overflow-hidden dark:text-light'>
        <Layout className='pt-16'>
            <AnimatedText text="Words can change the World!" className='mb-16 lg:!text-7xl sm:mb-8 sm:!text-6xl xs:!text-4xl'/>
            <ul className='grid grid-cols-2 gap-16 lg:gap-16 md:grid-cols-1 md:gap-y-16'>
                
                <FeaturedArticles
                title=" A Custom Pagination Component In Reactjs From Scratch"
                summary="Learn how to build a custom pagination component in ReactJS from scratch. 
                Follow this step-by-step guide to integrate Pagination component in your ReactJS project."
                time="9 min read"
                link="https://medium.com/@goelkartik235/build-a-custom-pagination-component-in-reactjs-from-scratch-b2011c845a61"
                img={article1}
                />

                <FeaturedArticles
                title="Build A Custom Pagination Component In Reactjs From Scratch"
                summary="Learn how to build a custom pagination component in ReactJS from scratch. 
                Follow this step-by-step guide to integrate Pagination component in your ReactJS project."
                time="9 min read"
                link="/"
                img={article2}
                />

                <FeaturedArticles
                title="Build A Custom Pagination Component In Reactjs From Scratch"
                summary="Learn how to build a custom pagination component in ReactJS from scratch. 
                Follow this step-by-step guide to integrate Pagination component in your ReactJS project."
                time="9 min read"
                link="/"
                img={article3}
                />

                <FeaturedArticles
                title="Build A Custom Pagination Component In Reactjs From Scratch"
                summary="Learn how to build a custom pagination component in ReactJS from scratch. 
                Follow this step-by-step guide to integrate Pagination component in your ReactJS project."
                time="9 min read"
                link="/"
                img={article4}
                />

                <FeaturedArticles
                title="Build A Custom Pagination Component In Reactjs From Scratch"
                summary="Learn how to build a custom pagination component in ReactJS from scratch. 
                Follow this step-by-step guide to integrate Pagination component in your ReactJS project."
                time="9 min read"
                link="/"
                img={article5}
                />

                <FeaturedArticles
                title="Build A Custom Pagination Component In Reactjs From Scratch"
                summary="Learn how to build a custom pagination component in ReactJS from scratch. 
                Follow this step-by-step guide to integrate Pagination component in your ReactJS project."
                time="9 min read"
                link="/"
                img={article6}
                />
            </ul>
        </Layout>
    </main>
    </>
  )
}

export default Articles