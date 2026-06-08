'use client'
import Image from 'next/image'
import React, { useEffect, useRef, useState } from 'react'
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'
export default function ExampleOurWorks() {
    // ЧТобы работать с DOM элементами в React - нужно использовать UseEffect
    //Получаю кубик через селектор
    //Функция вешающая на слайд touch обытия

    const startTouch = useRef(0)
    const endTouch = useRef(0)

    const [currentSlide, setCurrentSlide] = useState(6)
    const wraper = useRef(null)
    useEffect(() => {
        const slide = document.querySelector('.wrapper-images')
        if (slide) {
            console.log('Кубик существует')
            slide.addEventListener('touchstart', StartTouchX, { passive: true })
            slide.addEventListener('touchend', EndTouchX, { passive: true })
        }

        function StartTouchX(e) {
            startTouch.current = e.touches[0].screenX
            console.log('start X:', startTouch.current)
        }
        function EndTouchX(e) {
            endTouch.current = e.changedTouches[0].screenX
            console.log('end X:', endTouch.current)
            let diff = endTouch.current - startTouch.current
            if (diff >= 20) {
                console.log('Разница', diff)
                console.log('Свайп вправо')
                prevSlide()
            }
            else if (diff <= -20) {
                console.log('Разница', diff)
                console.log('Свайп влево')
                nextSlide()

            }
        }
        return () => {

            slide.removeEventListener('touchstart', StartTouchX)
            slide.removeEventListener('touchend', EndTouchX)

        }

    }, [])

    function prevSlide() {
        setCurrentSlide((prev) => prev - 1)

    }
    function nextSlide() {
        setCurrentSlide((prev) => prev + 1)

    }

    const arrPhotoWorks = [
        {
            beforeImgUrl: 'work1b.jpg',
            afterImgUrl: 'work1a.jpg'
        },
        {
            beforeImgUrl: 'work2b.jpg',
            afterImgUrl: 'work2a.jpg'
        },
        {
            beforeImgUrl: 'work3b.jpg',
            afterImgUrl: 'work3a.jpg'
        },
        {
            beforeImgUrl: 'work4b.jpg',
            afterImgUrl: 'work4a.jpg'
        }
    ]

    const lengthArrPhotos = arrPhotoWorks.length
    const extendedSlides = [
        ...arrPhotoWorks,
        ...arrPhotoWorks,
        ...arrPhotoWorks,
        ...arrPhotoWorks
    ]
    useEffect(() => {
        const slider = wraper.current
        if (!slider) return

        const realIndex =
            ((currentSlide % lengthArrPhotos) + lengthArrPhotos) % lengthArrPhotos

        const offset = -realIndex * 100

        slider.style.transform = `translateX(${offset}%)`
    }, [currentSlide, lengthArrPhotos])

    return (
        <div className='ExampleWorksPage'>
            <div className='blockExamleWorks'>
                <h2>Примеры наших работ</h2>
                <p>Лучший способ показать наши возможности — это результаты. В галерее вы увидите, с какими случаями мы справляемся.</p>
                <div className='blockImgWorksWithBut'>
                    <FaChevronLeft className='arrow' onClick={prevSlide} />
                    <div className="wrapper-images">

                        <div className='blockImgWorks' ref={wraper}>
                            {
                                extendedSlides.map((imgUrl, id) => {
                                    return (
                                        <div key={id} className='imgWorks'>
                                            <Image src={`/works/before/${imgUrl.beforeImgUrl}`} alt='фото после' width={400} height={200}></Image>
                                            <Image src={`/works/after/${imgUrl.afterImgUrl}`} alt='Фото до' width={400} height={200}></Image>
                                        </div>
                                    )

                                })
                            }
                        </div>
                    </div>
                    <FaChevronRight className='arrow' onClick={nextSlide} />
                </div>
                <p id='clean'>Чистота, комфорт и спокойствие — атмосфера нашей клиники.</p>
            </div>
        </div>
    )
}
