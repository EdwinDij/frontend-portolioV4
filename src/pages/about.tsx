import { BsEnvelopeAt } from 'react-icons/bs'
import { Notyf } from 'notyf'
import 'notyf/notyf.min.css'


const copyOnClick = (): void => {

    const notyf = new Notyf({
        duration: 0,
        position: {
            x: 'center',
            y: 'bottom'
        }
    })

    navigator.clipboard.writeText('edwin.d899@gmail.com')
    notyf.success('Email copier dans le presse-papier')

    setTimeout(() => {
        notyf.dismissAll()
    }, 1000)
}


export default function About() {
    return (
        <div className="sm:mt-4">
            <h1 className="mb-10 text-2xl relative before:block before:w-1 pl-2 before:bg-red before:content-'' before:absolute before:inset-y-0 before:left-0">Contact</h1>
            <div className='flex max-sm:flex-col sm:gap-16 items-center'>
                <div className='flex flex-col justify-center '>
                    <h2 className='text-2xl mb-12' >A propos de moi</h2>
                    <p className="text-xl">Bonjour et bienvenue sur mon portfolio !
                        Sur cette page, vous pourrez découvrir mes réalisations les plus récentes. <br></br> et en apprendre davantage sur mes compétences en matière de développement web.
                        <br></br>
                        <br></br>                        
                        Je suis constamment à la recherche de nouveaux défis passionnant et je travaille constamment pour améliorer <br></br>mes compétences.
                    </p>
                    <div className='mt-10 flex flex-col items-end max-sm:items-center mr-4'>
                <div onClick={copyOnClick} className='flex  flex-col items-center bg-grey bg-opacity-50 py-2 px-3 rounded cursor-pointer hover:bg-slate-800 hover:text-white ease-in duration-300 '>
                    <p><BsEnvelopeAt className='text-3xl text-center' /></p>
                    <p className='text-xl max-sm:text-sm'>edwin.d899@gmail.com</p>
                </div>
                </div>
            </div>
        </div>
        </div>
    )
}
