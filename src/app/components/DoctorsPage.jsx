'use client'
import Image from 'next/image'
import React, { useEffect, useRef, useState } from 'react'
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'
export default function DoctorsPage() {
  const startTouch = useRef(0)
  const endTouch = useRef(0)
  const [year,setYear] = useState(0) // переменная текущего года
  const [currentSlide, setCurrentSlide] = useState(6)
  const wraper = useRef(null)
  useEffect(() => {
    const actualYear = new Date().getFullYear() 
    setYear(actualYear)
    const slide = wraper.current
    if (slide) {
      slide.addEventListener('touchstart', StartTouchX, { passive: true })
      slide.addEventListener('touchend', EndTouchX, { passive: true })
    }

    function StartTouchX(e) {
      startTouch.current = e.touches[0].screenX
    }
    function EndTouchX(e) {
      endTouch.current = e.changedTouches[0].screenX
      let diff = endTouch.current - startTouch.current
      if (diff >= 20) {

        prevSlide()
      }
      else if (diff <= -20) {

        nextSlide()

      }
    }
    
    return () => {

      slide.removeEventListener('touchstart', StartTouchX)
      slide.removeEventListener('touchend', EndTouchX)

    }

  }, [])
  function ExperienceCalculateYears(experience){
    if ((11 <= experience % 100) && ( experience % 100 <= 14)){
      experience = `${experience} лет`
      
    } 
    else if (experience % 10 === 1) {
      experience = `${experience} год`
    }

    else if ((experience % 10 >=2 ) && (experience % 10 <= 4)){
      experience = `${experience} года`
    }

    else {
      experience = `${experience} лет`
    }
      
    return experience
    }

  function prevSlide() {
    setCurrentSlide((prev) => prev - 1)

  }
  function nextSlide() {
    setCurrentSlide((prev) => prev + 1)

  }
  

  const arrPhotoWorks = [
    {
      ImgUrl: 'Galina.webp',
      fio: 'Цветкова Галина Юрьевна',
      special: 'Врач-ортопед',
      experience : year - 2014
    },
    {
      ImgUrl: 'Igoshina.webp',
      fio: 'Игошина Александра Сергеевна',
      special: 'Врач стоматолог - общей практике',
      experience : year - 2012
    },
    {
      ImgUrl: 'Gabrelyn.webp',
      fio: 'Габрелян Манушак Аароновна',
      special: 'Врач стоматолог - терапевт',
      experience : year - 2024
    },
    {
      ImgUrl: 'Bakaderova.webp',
      fio: 'Быкадырова Валерия Романовна',
      special: 'Ассистент - стоматолога',
      experience : year - 2024
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
                      <div className="roundExp">
                        <div className='roundWrapper'><p>{ExperienceCalculateYears(imgUrl.experience)}</p></div>
                      </div>
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
