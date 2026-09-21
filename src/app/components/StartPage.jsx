import Image from 'next/image'
import React from 'react'
import Buttom from './ui/Buttons/ButtomStart'

export default function StartPage() {
  return (
    <div className='startPage' id='start'>
      <div className='startDescription'>
        <h1>Забота о ваших зубах - наша работа</h1>
        <p id='pM'>Комфортное лечение
          и забота о здоровье зубов
          в современной клинике Ростова-на-Дону</p>
        <p id='pD'>Комфортное и безболезненное лечение зубов с применением современных технологий и индивидуального подхода.<br /> Мы создаём условия, в которых забота о здоровье вашей улыбки становится простой и приятной.</p>
        <Buttom />
      </div>
      <div className="infoBlock">
        <div className='imgGirlWithToothbrush'>
          <Image src='/Galina_doctor.webp' width={200} height={100} alt='Девушка с зубной щёткой' id='girl' priority fetchPriority="high"/>
          <Image src='/rounds.svg' fill style={{ objectFit: 'cover' }}  alt='фон' id='rounds'/>
        </div>
        <div className="blockAdvIcons">
          <div className="advIcons">
            <div className="colRet">
              <Image src='/Star.svg' width={40} height={40} alt='иконка звезды' loading="eager" fetchPriority="high"/>
              <p><b>4.9</b></p>
              <p className="iconText">Рейтинг в Яндекс</p>
            </div>
            <div className="colRet">
              <Image src='/Heart.svg' width={40} height={40} alt='иконка сердца' loading="eager"  fetchPriority="high"/>
              <p><b>5000+</b></p>
              <p className="iconText" >Довольных пациентов</p>
            </div>
            <div className="colRet">
              <Image src='/Sheat.svg' width={40} height={40} alt='иконка щита' loading="eager"  fetchPriority="high"/>
              <p><b>10 лет</b></p>
              <p className="iconText">Опыта заботы о ваших зубах</p>
            </div>
          </div>
        </div>
      </div>


    </div>
  )
}
