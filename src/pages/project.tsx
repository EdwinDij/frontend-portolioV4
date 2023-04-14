import React,{useState, useEffect} from 'react'
import axios from 'axios'
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

    useEffect(()=> {
        const fetchData = () => {
            axios.get('http://localhost:8000/api/data')
            .then(res => {
                console.log(res.data['project'])
                setData(res.data['project'])
            })
        }
        fetchData()
    }, [])


    const imgUrl = 'http://localhost:8000/api/data'
    return (
        <div>
            <h1 className='text-2xl'>Projets</h1>
            <div className='flex max-sm:justify-between sm-max:flex-col'>
                <div className='flex sm:flex-col max-sm:justify-between sm:gap-7 mt-8 mb-10'>
                    <h2 className='text-xl border-dark border-2 px-1 py-2'>FullStack</h2>
                    <h2 className='text-xl border-dark border-2 px-1 py-2'>Front-end</h2>
                    <h2 className='text-xl border-dark border-2 px-1 py-2'>Back-end</h2>
                </div> 
                <div className='grid grid-cols-2'>
                {data.sort((a, b) => b.id - a.id).slice(0,4).map((project) => {
                    return (
                            <div key={project.id}>
                            <img src={imgUrl + project.image}
                            alt={project.name} />
                            <h3>{project.name}</h3>
                        </div>
                        
                    )
                })}
                </div>
            </div>

        </div>
    )
}
