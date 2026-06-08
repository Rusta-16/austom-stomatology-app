'use client'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import { compile } from 'sass'

export default function AdvantagesPage() {

    const miniImg = [
        {
            imgUrl: '/gloves.png',
            title: 'Стерильность и безопасность'
        },
        {
            imgUrl: '/doctorWithPacient.png',
            title: 'Опытные врачи'
        },
        {
            imgUrl: '/tools.png',
            title: 'Современное оборудование'

        }
    ]

    const AustomH2 = 'Стоматология «Аюстом» забота о ваших зубах - наша работа'
    const [AustomH2Display, setAustomH2Display] = useState('')

    return (
        <div className='AdvantagesPage'>
            <h2>{AustomH2Display}</h2>
            <section>
                {
                    miniImg.map((img, id) => {
                        return (
                            <div key={id} className='cardAdvantages'>
                                <Image src={img.imgUrl} alt={img.title} width={200} height={200}></Image>
                                <p>{img.title}</p>
                            </div>
                        )
                    })
                }
            </section>
        </div>
    )
}
