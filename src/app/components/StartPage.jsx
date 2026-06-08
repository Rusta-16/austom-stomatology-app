import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function StartPage() {
  return (
    <div className='startPage'>
      <div className='startDescription'>
        <h2>Забота о ваших зубах - наша работа</h2>
        <p id='pM'>Комфортное лечение
          и забота о здоровье зубов
          в современной клинике Ростова-на-Дону</p>
        <p id='pD'>Комфортное и безболезненное лечение зубов с применением современных технологий и индивидуального подхода.<br/> Мы создаём условия, в которых забота о здоровье вашей улыбки становится простой и приятной.</p>
        <button className='buttonForReception'><Link href=''>Записаться на приём</Link></button>
      </div>
      <div className="infoBlock">
        <div className='imgGirlWithToothbrush'>
          <Image src='/Galina_doctor.svg' width={100} height={150} alt='Девушка с зубной щёткой' id='girl' priority></Image>
          <Image src='/rounds.svg' width={200} height={100} alt='фон' id='rounds' priority></Image>
        </div>
        <div className="blockAdvIcons">
          <div className="advIcons">
            <div className="colRet">
              <Image src='/Star.svg' width={40} height={40} alt='иконка' priority></Image>
              <p><b>4.9</b></p>
              <p className="iconText">Рейтинг в Яндекс</p>
            </div>
            <div className="colRet">
              <Image src='/Heart.svg' width={40} height={40} alt='иконка' priority></Image>
              <p><b>5000+</b></p>
              <p className="iconText" >Довольных пациентов</p>
            </div>
            <div className="colRet">
              <Image src='/Sheat.svg' width={40} height={40} alt='иконка' priority></Image>
              <p><b>10 лет</b></p>
              <p className="iconText">Опыта заботы о ваших зубах</p>
            </div>
          </div>
        </div>
      </div>


    </div>
  )
}
