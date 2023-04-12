import { BsEnvelopeAt } from 'react-icons/bs'

export default function Home() {
  return (
    <main>
      <nav className="pt-3">
        <div className="flex justify-around">
          <div className="initial">
            <h1 className="name">ED</h1>
          </div>
          <div className="flex max-sm:gap-x-3 gap-x-3">
            <a href="#About-me">À propos</a>
            <a href="#Projects">Projets</a>
            <a href="#Contact">Contact</a>
          </div>
        </div>
      </nav>
      <section className="h-screen flex items-center max-2xl:ml-9 max-[2560px]:ml-9 max-md:justify-center">
        <div>
          <h2>Salut, je suis <span className="text-red font-bold">Edwin Dijeont,</span></h2>
          <p>Dévelppeur web
            <br></br>
            Fullstack,
            Frontend
            <br></br>
            Backend
          </p>

          <div className='flex justify-between text-center content-center'>
            <div className='border-2 border-black max-sm:px-6 max-sm:py-4 px-8 py-6 mr-2 flex items-center'>
              <h3>M{"'"}engagez</h3>
            </div>
            <div className='border-2 border-black max-sm:px-6 max-sm:py-4 px-8 py-6 mr-2 flex items-center '>
              <h3>Portfolio</h3>
            </div>
            <div className='border-2 border-black max-sm:px-6 max-sm:py-4 px-8 py-6 flex items-center'>
              <h3><BsEnvelopeAt /></h3>
            </div>
          </div>

        </div>
      </section>
    </main>
  )
}
