'use client'
import Image from 'next/image'
import React, { useEffect, useRef, useState } from 'react'
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'

export default function ClinicIntoPage() {
    const startTouch = useRef(0)
    const endTouch = useRef(0)
    const [currentSlide, setCurrentSlide] = useState(1)

    const wraper = useRef(null)
    useEffect(() => {
        const slide = wraper.current
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

    function nextSlide() {
        if (currentSlide >= slides.length - 1) return
        setCurrentSlide(prev => prev + 1)
    }

    function prevSlide() {
        if (currentSlide <= 0) return
        setCurrentSlide(prev => prev - 1)
    }

    const arrPhotoWorks = [
        {
            ImgRoom: 'room1.svg',
        },
        {
            ImgRoom: 'room2.svg',
        },
        {
            ImgRoom: 'room3.svg',
        },
        {
            ImgRoom: 'room4.svg',
        },
        {
            ImgRoom: 'room5.svg',
        },
    ]
    const slides = [
        arrPhotoWorks[arrPhotoWorks.length - 1],
        ...arrPhotoWorks,
        arrPhotoWorks[0],
    ]
    useEffect(() => {
        const slider = wraper.current
        if (!slider) return

        const handleTransitionEnd = () => {
            if (currentSlide === slides.length - 1) {
                slider.style.transition = 'none'
                setCurrentSlide(1)

                requestAnimationFrame(() => {
                    requestAnimationFrame(() => {
                        slider.style.transition = 'transform 0.4s ease-in-out'
                    })
                })
            }

            if (currentSlide === 0) {
                slider.style.transition = 'none'
                setCurrentSlide(slides.length - 2)

                requestAnimationFrame(() => {
                    requestAnimationFrame(() => {
                        slider.style.transition = 'transform 0.4s ease-in-out'
                    })
                })
            }
        }

        slider.addEventListener('transitionend', handleTransitionEnd)

        return () => {
            slider.removeEventListener('transitionend', handleTransitionEnd)
        }
    }, [currentSlide])
    const getSlideWidth = () => {
        const slide = wraper.current?.querySelector('.imgRoom')
        return slide ? slide.offsetWidth + 16 : 0
    }
    useEffect(() => {
        const slider = wraper.current
        if (!slider) return

        const slideWidth = getSlideWidth()
        slider.style.transition = 'transform 0.4s ease-in-out'
        slider.style.transform = `translateX(-${currentSlide * slideWidth}px)`
    }, [currentSlide])

    return (
        <div className='ClinicIntoPage'>
            <div className='blockImgRoomsWithBut'>
                <FaChevronLeft className='arrow' onClick={prevSlide} />
                <div className="wrapper-images">

                    <div className='blockImgRoom' ref={wraper}>
                        {
                            slides.map((imgUrl, id) => {
                                return (
                                    <div key={id} className='imgRoom'>
                                        <Image src={`/clinic/${imgUrl.ImgRoom}`} alt='Фото' width={400} height={200}></Image>
                                    </div>
                                )

                            })
                        }
                    </div>
                </div>
                <FaChevronRight className='arrow' onClick={nextSlide} />
            </div>
        </div>
    )
}
