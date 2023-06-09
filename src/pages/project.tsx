/* eslint-disable @next/next/no-img-element */
import React, { useState, useEffect } from 'react'
import axios from 'axios'
import imgApi from '../../public/what-is-an-api-for-featured.png'
import Image from 'next/image'

type Project = {
    id: number,
    name: string,
    description: string,
    image: string,
    url_github: string,
    url_website: string,
    role: string,
    techno: [string]
}

export default function Project() {

    const [data, setData] = useState<Project[]>([])
    const [role, setRole] = useState<string>("")

    useEffect(() => {
        const fetchData = () => {
            axios.get('https://ediwnportfolioapi-edwind899.b4a.run/api/data')
                .then(res => {
                    console.log(res.data['project'])
                    setData(res.data['project'])
                })
        }
        fetchData()
    }, [])

    const handleRole = (category :string) => {
        setRole(category)
    }

    const Url = 'https://ediwnportfolioapi-edwind899.b4a.run/api/data'
    return (
        <div>
            <h1 className="mb-10 text-2xl relative before:block before:w-1 pl-2 before:bg-red before:content-'' before:absolute before:inset-y-0 before:left-0">Projets</h1>
            <div className='flex gap-24 max-sm:flex-col '>
                <div className='flex sm:flex-col max-sm:justify-between sm:gap-7 mt-8 mb-10 '>
                    <button  onClick={() => handleRole('')}className='hover:text-red sm:text-xl border-dark border-2 px-1 py-2 cursor-pointer'>Tout</button>
                    <button  onClick={() => handleRole('Full-stack')} className='hover:text-red sm:text-xl border-dark border-2 px-1 py-2 cursor-pointer'>FullStack</button>
                    <button  onClick={() => handleRole('Front-end')} className='hover:text-red sm:text-xl border-dark border-2 px-1 py-2 cursor-pointer'>Front-end</button>
                    <button onClick={() => handleRole('Back-end')} className='hover:text-red sm:text-xl border-dark border-2 px-1 py-2 cursor-pointer'>Back-end</button>
                </div>

                <div className='sm:grid lg:grid-cols-3 sm:grid-cols-2 max-sm:flex max-sm:flex-col max-sm:gap-7 
                lg:p-8 lg:rounded lg:bg-grey lg:gap-2 lg:shadow-xl lg:bg-opacity-50'>
                    {data.filter((project) => !role || project.role === role)
                        .sort((a, b) => b.id - a.id)
                        .slice(0, 9)
                        .map((project) => {
                        const imgName = project.image.split('/images/')[1]
                        return (
                            <a href={project.url_github} target='_blank' rel='noreferrer' key={project.id}>
                            <div className='relative shadow-lg rounded hover:scale-105 transition-all ease-in duration-100' >
                                {imgName ? (<img src={`${Url}/${imgName}`} width={300} height={200} alt={project.name} className=' rounded sm:h-48 sm:w-60'/>
                                            ) : <Image src={imgApi} width={300} height={200} alt={project.name} className=' rounded sm:h-48 sm:w-60 object-fill'/>}
                                <h3>{project.name}</h3>
                                <span className='absolute top-1 right-4 bg-red rounded px-2 animate-pulse bg-opacity-50 text-sm'>{project.techno[0]}</span>
                            </div>
                            </a>
                        )
                    }
                    )}
                </div>
            </div>
        </div>
    )
}
