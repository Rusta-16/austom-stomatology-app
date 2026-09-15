import Image from 'next/image'

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

    return (
        <div className='AdvantagesPage'>
            <h2></h2>
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