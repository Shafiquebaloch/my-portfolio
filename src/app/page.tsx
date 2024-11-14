import React from 'react'
// import Header from "@/Components/Header"
import Hero from '@/Components/Hero'
import About from "@/Components/About"
import Skills from "@/Components/Skills"
import Projects from '@/Components/Project'
import Contact from '@/Components/Contact'
// import Footer from '@/Components/Footer'



const page = () => {
  return (
    <div>
     <Hero/>
     <About/>
     <Skills/>
     <Projects/>
     <Contact/>

     {/* <Footer/> */}
    </div>
  )
}

export default page