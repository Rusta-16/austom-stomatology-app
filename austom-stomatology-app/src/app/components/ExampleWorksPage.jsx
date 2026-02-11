import Image from 'next/image'
import React from 'react'

export default function ExampleOurWorks() {

    const arrPhotoWorks = [
        {
            beforeImgUrl: 'Rectangle93.png',
            afterImgUrl: 'Rectangle94.png'
        },
        {
            beforeImgUrl: 'Rectangle93.png',
            afterImgUrl: 'Rectangle94.png'
        }
    ]

    return (
        <div className='ExampleWorksPage'>
            <div className='blockExamleWorks'>
                <h2>Примеры наших работ</h2>
                <p>Лучший способ показать наши возможности — это результаты. В галерее вы увидите, с какими случаями мы справляемся.</p>
                <div className='blockImgWorksWithBut'>
                    <button>=</button>
                    <div className='blockImgWorks'>
                        {
                            arrPhotoWorks.map((imgUrl, id) => {
                                return (
                                    <div key={id} className='imgWorks'>
                                        <Image src={`/works/after/${imgUrl.beforeImgUrl}`} alt='Фото до' width={300} height={100}></Image>
                                        <Image src={`/works/before/${imgUrl.afterImgUrl}`} alt='фото после' width={300} height={100}></Image>
                                    </div>
                                )

                            })
                        }
                    </div>

                    <button>=</button>
                </div>
            </div>
            <div></div>
        </div>
    )
}
