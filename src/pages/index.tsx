import { BsEnvelopeAt } from 'react-icons/bs'
import About from './about'
import Project from './project'
import Contact from './contact'
import {BsGithub, BsLinkedin, BsTwitter } from 'react-icons/bs'

export default function Home() {
  return (
    <main>
      <nav className="pt-3">
        <div className="flex justify-around">
          <div className="initial">
            <h1 className="name">ED</h1>
          </div>
          <div className="flex max-sm:gap-x-3 gap-x-3">
            <a href="#About-me" className='cursor-pointer hover:text-red'>À propos</a>
            <a href="#Projects" className='cursor-pointer hover:text-red'>Projets</a>
            <a href="#Contact" className='cursor-pointer hover:text-red'>Contact</a>
          </div>
        </div>
      </nav>
      <section className="h-screen flex items-center max-2xl:ml-5 max-[2560px]:ml-5 max-md:justify-center">
        <div>
          <h2 className='text-2xl'>Salut, je suis <span className="text-red font-bold">Edwin Dijeont</span>,</h2>
          <p className='text-4xl'>Dévelppeur web
            <br></br>
            Fullstack,
            Frontend
            <br></br>
            Backend
          </p>

          <div className='flex justify-between text-center content-center mt-10'>
            <div className='border-2 border-black max-sm:px-6 max-sm:py-4 px-8 py-6 mr-2 flex items-center hover:border-red cursor-pointer'>
              <h3>M{"'"}engagez</h3>
            </div>
            <div className='border-2 border-black max-sm:px-6 max-sm:py-4 px-8 py-6 mr-2 flex items-center hover:border-red cursor-pointer hover:bordeer'>
              <h3>Portfolio</h3>
            </div>
            <div className='border-2 border-black max-sm:px-6 max-sm:py-4 px-8 py-6 flex items-center hover:border-red cursor-pointer'>
              <h3><BsEnvelopeAt /></h3>
            </div>
          </div>
        </div>
      </section >
      <section id="About-me" className="h-screen flex max-2xl:ml-5 max-[2560px]:ml-5 max-md:justify-center items-center">
        <About />
      </section>
      <section id="Projects" className="max-2xl:ml-5 max-[2560px]:ml-5 max-sm:mt-6">
        <Project />
      </section>
      <section id="Contact" className="flex flex-col max-2xl:ml-5 max-[2560px]:ml-5 max-md:justify-center items-center mt-16">
        <Contact />
      </section>
      <footer className="flex justify-center items-center h-16 bg-dark text-white">
        <div>
          
        </div>
        <a href='https://linkedin.com/in/edwin-dijeont-1469a0226' target='_blank' className='mx-2'><BsLinkedin /></a>
        <a href='https://github.com/EdwinDij' target='_blank' className='mx-2'><BsGithub /></a>
        <a href='https://twitter.com/Edwindijeont' target='_blank' className='mx-2'><BsTwitter /></a>
        <p className='text-xs'>© 2023 Edwin Dijeont</p>
      </footer>
    </main>
  )
}
