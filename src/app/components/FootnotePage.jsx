import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function FootnotePage() {
    return (
        <div className='FootnotePage' id='note'>
            <Image src='/GenDoct.svg' alt='Ген-дир' id='gen-doct-image' width={100} height={100}></Image>
            <div className="textWithIcon">
                <div className="text">
                    <p id="footnote-text">У нас вы никогда не останетесь без внимания!</p>
                    <p>Ген-директор клиники<br />
                        <b>Цветкова Галина Юрьевна</b></p>
                    <p id='pi'>Если у вас есть предложения или жалобы,
                        на которые вы хотели бы обратить внимание,
                        пишите:</p>
                </div>
                <div className="contucts">
                    <Link href="https://wa.me/79604433999" target="_blank" rel="noopener noreferrer">
                        <Image src='/contacts/WhatsApp.svg' alt='Ватсап' width={40} height={40}></Image>
                    </Link>
                    <Link href="https://t.me/+79604433999" target="_blank" rel="noopener noreferrer">
                        <Image src='/contacts/Telegram.svg' alt='тг' width={40} height={40}></Image>
                    </Link>
                    <Link href="mailto:austom@mail.ru" target="_blank" rel="noopener noreferrer">
                        <Image src='/contacts/Envelope.svg' alt='почта' width={40} height={40}></Image>
                    </Link>
                </div>
            </div>

        </div>
    )
}
