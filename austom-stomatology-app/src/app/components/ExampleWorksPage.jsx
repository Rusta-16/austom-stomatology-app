'use client'
import Image from 'next/image'
import React, { useEffect } from 'react'
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'
export default function ExampleOurWorks() {
    //ЧТобы работать с DOM элементами в React - нужно использовать UseEffect
    useEffect(() => {
        //Получаю кубик через селектор
        const cubik = document.querySelector('.cubik')
        if (cubik) { //Если кубик существует - true
            console.log('Кубик существует')
            //Добавляю кубику отслеживание собыия 'touchstart' - чачало касание
            cubik.addEventListener('touchstart', (e) => { // СТрелочная функция принимает event 
                let touch = e.touches[0] // e хранит в себе массив touches - колличество нажатий за раз (число пальцев) .Берём первое нажатие
                let posX = touch.screenX // Вытаскиваем кординаты превого нажатия при помощи метода screenX
                console.log('start PosX: ', posX)
            })
            cubik.addEventListener('touchend', (e) => {  //'touchend' - конец касание
                let touch = e.changedTouches[0] // changedTouches -массив  хранит в себе все нажатия, в том числе и отпущенные 
                let posX = touch.screenX
                console.log('end PosX:', posX)
            })
            cubik.addEventListener('touchmove', (e) => { //'touchmove' - движение пальца после нажатия

                let touch = e.touches[0]
                let posY = touch.screenY
                let posX = touch.screenX
                console.log('PosY: ', posY)
                console.log('PosX: ', posX)
            })

        }
    }, [])

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
                    <FaChevronLeft className='arrow' />
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
                    <FaChevronRight className='arrow' />
                    <div className='cubik'>
                    </div>
                </div>
            </div>
            <div></div>
        </div>
    )
}
