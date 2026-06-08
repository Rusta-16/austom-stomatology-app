import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function SpecialPage() {
  return (
    <div className='SpecialPage'>
        <h2>Актуальные акции и скидки</h2>
        <div className="specialOfferCol">
            <div className="offer">
                <Image src='/voin.svg' alt='Солдаты' width={100} height={100}></Image>
                <div className="offerText">
                    <h4>Скидка участникам СВО <span>10%</span></h4>
                    <p>При предъявлении справки участника СВО</p>
                    <button className='buttonCard'><Link href=''>Записаться на приём</Link></button>
                    <Image src='/procent.png' alt='процент' id='procent' width={200} height={100}></Image>
                </div>
            </div>
            <div className="offer">
                <Image src='/vrach.svg' alt='Команда стоматологов' width={100} height={100}></Image>
                <div className="offerText">
                    <h4>Скидка на коплестную гигиену полости рта <span>10%</span></h4>
                    <p>Данное предложение актуально до 01.01.2027</p>
                    <button className='buttonCard'><Link href=''>Записаться на приём</Link></button>
                    <Image src='/procent.png' alt='процент' id='procent' width={200} height={100}></Image>
                </div>
            </div> 
        </div>
    </div>
  )
}
