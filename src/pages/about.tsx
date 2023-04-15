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
        <div className="sm:mt-20">
            <h1 className="mb-10 text-2xl relative before:block before:w-1 pl-2 before:bg-red before:content-'' before:absolute before:inset-y-0 before:left-0">À propos de moi</h1>

            <p className="text-xl">Bonjour et bienvenue sur mon portfolio !
                <br></br>
                Sur cette page, vous pourrez découvrir mes réalisations les plus récentes et en apprendre davantage sur mes compétences en matière de développement web.
                <br></br>
                <br></br>
                Je suis constamment à la recherche de nouveaux défis passionnant et je travaille constamment pour améliorer mes compétences.
            </p>
            <div className='mt-10 flex flex-col items-end max-sm:items-center mr-4'>
                <div onClick={copyOnClick} className='flex  flex-col items-center bg-grey bg-opacity-50 py-2 px-3 rounded cursor-pointer hover:bg-slate-800 hover:text-white ease-in duration-300 '>
                    <p><BsEnvelopeAt className='text-3xl text-center' /></p>
                    <p className='text-xl max-sm:text-sm'>edwin.d899@gmail.com</p>
                </div>

            </div>
        </div>
    )
}
