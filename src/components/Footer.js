import React from 'react'
import Layout from './Layout'
import Link from 'next/link'

const Footer = () => {
  return (
    <footer className='w-full border-t-2 border-solid border-dark font-medium text-lg dark:text-light dark:border-light sm:text-base'>
         <Layout className='py-4 flex items-center justify-between sm:text-base'>
            <span>{new Date().getFullYear()} &copy; All Rights Reserved.</span>
            <div className='flex items-center'>  
            Build With <span className='text-primary dark:text-primaryDark text-2xl px-1'>&#9825;</span>by&nbsp;
            <Link href="https://www.instagram.com/_kartik.goel_"
             className="underline underline-offset-2"
              target={"_blank"} >Kartik Goel</Link>
            </div>
            <Link href="https://www.instagram.com/_kartik.goel_" 
            target={"_blank"} 
            className='underline underline-offset-2'>Say Hello</Link>
         </Layout>
    </footer>
  )
}

export default Footer