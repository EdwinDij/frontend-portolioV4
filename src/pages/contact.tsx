import React from 'react'
import { useState } from 'react'
import axios from 'axios'
import { Notyf } from 'notyf'
import {BsGithub} from 'react-icons/bs'

export default function Contact() {

    const [name, setName] = useState<string>('')
    const [email, setEmail] = useState<string>('')
    const [message, setMessage] = useState<string>('')

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        const formData = new FormData(e.target as HTMLFormElement);
        const data = Object.fromEntries(formData.entries());

        try {
            axios.post('https://ediwnportfolioapi-edwind899.b4a.run/api/send-email', formData)
                .then(res => {
                    console.log(res)
                    if (res.status === 200) {

                        const notyf = new Notyf({
                            duration: 0,
                            position: {
                                x: 'center',
                                y: 'bottom'
                            }
                        })
                        notyf.success(res.data.message)
                        //supprime le message apres 1 seconde
                        setTimeout(() => {
                            notyf.dismissAll()
                        }, 1000)
                    }
                
                })
        }
        catch (error) {
            
            const notyf = new Notyf({
                duration: 0,
                position: {
                    x: 'center',
                    y: 'bottom'
                }
            })
            notyf.error('Une erreur est survenue')
            setTimeout(() => {
                notyf.dismissAll()
            }
            , 1000)
        }
    }

    return (
        <div>
            <h1 className="mb-10 text-2xl relative before:block before:w-1 pl-2 before:bg-red before:content-'' before:absolute before:inset-y-0 before:left-0">Contact</h1>
            <div className='flex max-sm:flex-col sm:gap-16 items-center'>
                <div className='flex flex-col justify-center border-dark border-2 px-10 py-4 h-full '>
                    <h2 className='text-2xl mb-12' >Me contacter</h2>
                    <p className='mb-6'>
                        Je me ferai un plaisir de répondre à vos questions et de discuter de vos projets.<br></br>
                        Vous pouvez me contacter par email.
                    </p>
                    <p>edwin.d899@gmail.com</p>
                    <a href='https://github.com/EdwinDij' target="_blank" className='flex items-baseline' ><BsGithub/>Github</a>
                </div>
                <div>
                    <form onSubmit={handleSubmit} className="p-6 text-black">
                        <div className='w-60'>
                            <label htmlFor="name" className="text-white">
                                Nom
                            </label>
                            <input
                                type="text"
                                name="name"
                                id="name"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                className="block w-full mt-1 rounded-sm border-red border-opacity-50 border-2 outline-none "
                            />
                        </div>
                        <div className="mt-4">
                            <label htmlFor="email" className="text-white">
                                Email
                            </label>
                            <input
                                type="email"
                                name="email"
                                id="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="block w-full mt-1 rounded-sm border-red border-opacity-50 border-2 outline-none"
                            />
                        </div>
                        <div className="mt-4">
                            <label htmlFor="message" className="text-white">
                                Message
                            </label>
                            <textarea
                                name="message"
                                id="message"
                                value={message}
                                onChange={(e) => setMessage(e.target.value)}
                                className="block w-full mt-1 rounded-sm border-red border-opacity-50 border-2 outline-none resize-none h-48 "
                            ></textarea>
                        </div>
                        <div className="mt-6">
                            <button
                                type="submit"
                                className="bg-grey text-white py-2 px-4 rounded-md hover:bg-lightgrey"
                            >
                                Envoyer
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}
