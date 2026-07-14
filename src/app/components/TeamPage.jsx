import Image from 'next/image'
import React from 'react'
import ButtonTeam from './ui/Buttons/ButtonTeam'

export default function TeamPage() {
    return (
        <div className='TeamPage'>
            <div className="titleCardPage">
                <h2>Здоровье ваших зубов — в надежных руках</h2>
                <p>«Аюстом» — это полный спектр стоматологических решений: от лечения до эстетической коррекции и гигиены.</p>
            </div>
            <div className="imgWithBut">
                <Image src='/team2.svg' alt='Команда стоматологов' width={400} height={300}></Image>
                <ButtonTeam />
            </div>
        </div>
    )
}
