'use client'
import Image from 'next/image'
import React, { useEffect, useRef, useState } from 'react'
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'
export default function DoctorsPage() {
  const startTouch = useRef(0)
  const endTouch = useRef(0)

  const [currentSlide, setCurrentSlide] = useState(6)
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

  function prevSlide() {
    setCurrentSlide((prev) => prev - 1)

  }
  function nextSlide() {
    setCurrentSlide((prev) => prev + 1)

  }

  const arrPhotoWorks = [
    {
      ImgUrl: 'Galina.svg',
      fio: 'Цветкова Галина Юрьевна',
      special: 'Врач-ортопед'
    },
    {
      ImgUrl: 'Igoshina.svg',
      fio: 'Игошина Александра Сергеевна',
      special: 'Врач стоматолог - общей практике'
    },
    {
      ImgUrl: 'Gabrelyn.svg',
      fio: 'Габрелян Манушак Аароновна',
      special: 'Врач стоматолог - терапевт'
    },
    {
      ImgUrl: 'Bakaderova.svg',
      fio: 'Быкадырова Валерия Романовна',
      special: 'Ассистент - стоматолога'
    }
  ]

  const lengthArrPhotos = arrPhotoWorks.length
  const extendedSlides = [
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
    <div className='DoctorsPage' id='doctor'>
      <div className="titleCardPage">
        <h2>О здоровье и красоте вашей улыбки
          позаботится наша команда врачей</h2>
        <p>Врачи-специалисты регулярно повышаюшие квалификацию </p>
        <div className='blockImgWorksWithBut'>
          <FaChevronLeft className='arrow' onClick={prevSlide} />
          <div className="wrapper-images">

            <div className='blockImgWorks' ref={wraper}>
              {
                extendedSlides.map((imgUrl, id) => {
                  return (
                    <div key={id} className='imgWorks'>
                      <Image src={`/doctors/${imgUrl.ImgUrl}`} alt='s' width={400} height={200}></Image>
                      <h3>{imgUrl.fio}</h3>
                      <p>{imgUrl.special}</p>
                    </div>
                  )

                })
              }
            </div>
          </div>
          <FaChevronRight className='arrow' onClick={nextSlide} />
        </div>
      </div>
    </div>
  )
}
