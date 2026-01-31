import Image from 'next/image'
import React from 'react'

export default function AdvantagesPage() {

    const miniImg = [
        {
            imgUrl: '/gloves.png',
            title: 'Стерильность и безопасность'
        },
        {
            imgUrl:'/doctorWithPacient.png',
            title:'Опытные врачи'
        }
    ]
    return (
        <div className='AdvantagesPage'>
            <h2>Стоматология «Аюстом» — все услуги в одном кабинете</h2>
            <section>
                {
                    miniImg.map((img, id) => {
                        return (
                            <div className='cardAdvantages'>
                                <Image key={id} src={img.imgUrl} alt={img.title} width={120} height={120}></Image>
                                <p>{img.title}</p>
                            </div>
                        )
                    })
                }
            </section>
        </div>
    )
}
