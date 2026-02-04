import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function StartPage() {
  return (
    <div className='startPage'>
        <div className='startDescription'>
            <h2>Улыбка,<br/>которой хочется гордиться</h2>
            <p>Современная стоматология, где о вашем комфорте заботятся с первой минуты</p>
            <button className='buttonForReception'><Link  href=''>Записаться на приём</Link></button>
        </div>
        <div className='imgGirlWithToothbrush'>
            <Image src='/GirlWithToothbrush.png' width={140} height={200} alt='Девушка с зубной щёткой' priority></Image>
        </div>
    </div>
  )
}
