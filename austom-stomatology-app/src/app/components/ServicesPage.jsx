import Link from 'next/link'
import React from 'react'
import Image from 'next/image'

export default function ServicesPage() {

    const servicesCards = [
        {
            title: 'Пародантология',
            description: 'Лечение и профилактика десен',
            imgUrl: 'Parodontoloia.png',
            href: '/',
        },
        {
            title: 'Протезирование',
            description: 'Восстановление отсутствующих зубов',
            imgUrl: 'Protezirovanie.png',
            href: '/',
        },
        {
            title: 'Комплексная гигиена полости рта',
            description: 'Чистка ультразвуком и Air-flow.',
            imgUrl: 'ComplexGigiena.png',
            href: '/',
        },
        {
            title: 'Лечение зубов',
            description: 'Устранение кариеса, пульпита',
            imgUrl: 'HealthTooth.png',
            href: '/',
        },
        {
            title: 'Эстетическая стоматология',
            description: 'Красота и форма зубов',
            imgUrl: 'EsteticDental.png',
            href: '/'
        }
    ]

    return (
        <div className='servicesPage'>
            <div className='titleCardPage'>
                <h2>Наши услуги</h2>
                <p>Консультация → Индивидуальный план → Комплексное лечение. Всё для здоровья вашей улыбки в одной клинике.</p>
            </div>
            <section>
                {
                    servicesCards.map((card, id) => {
                        return (
                            <div key={id} className='serviceCard'>
                                <div className='serviceCardText'>
                                    <h4>{card.title}</h4>
                                    <p>{card.description}</p>
                                    <button className='buttonCard'>
                                        <Link href={card.href}>Подробне</Link>
                                    </button>
                                </div>
                                <Image src={`/services/${card.imgUrl}`} alt={card.title} width={150} height={150} className='imgCard'></Image>
                            </div>
                        )
                    })
                }
            </section>
        </div>
    )
}
