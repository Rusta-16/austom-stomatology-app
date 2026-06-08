import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function Footer() {
    return (
        <div className='Footer'>
            <div className="licenseBlock">
                <div className="licenses">
                    <h3>Лицензии Министерства здравоохранения РО</h3>

                    <a href="/docs/заключение.pdf" target="_blank" rel="noopener noreferrer">
                        Лицензия ООО “Аюстом”
                    </a>

                    <a href="#">Заключение</a>
                    <a href="#">Карта партнера</a>
                </div>

                <Link href="/" className='logo'>
                    <Image
                        src="/logo_full_pink.png"
                        alt='Логотип'
                        width={150}
                        height={50}
                    />
                </Link>
            </div>

            <div className="contactBlock">
                <div className="map">
                    <div className="map__frame">
                        <iframe
                            src="https://yandex.ru/map-widget/v1/org/ayustom/1029802694/?ll=39.800189%2C47.236114&z=17.08"
                            allowFullScreen
                            loading="lazy"
                            title="Карта Аюстом"
                        ></iframe>

                        <div className="map__overlay">
                            <a
                                href="https://yandex.ru/maps/org/ayustom/1029802694/"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Аюстом
                            </a>
                        </div>
                    </div>
                </div>

                <div className="contacts">
                    <div className="cont">
                        <Image src='/Future.svg' alt='время' width={10} height={10}></Image>
                        <p>Режим работы:<br/> пн-пт 9:00-20:00сб 9:00-14:00, вс - выходной</p>
                    </div>
                    <div className="cont">
                        <Link href="tel:/+79604433999" target="_blank" rel="noopener noreferrer">
                            <Image src='/Phone.svg' alt='телефон' width={10} height={10}></Image>
                        </Link>
                        <a href="tel:/+79604433999">+7 (960) 443-39-99</a>
                    </div>
                    <div className="cont">
                        <Link href="mailto:austom@mail.ru" target="_blank" rel="noopener noreferrer">
                            <Image src='/contacts/Envelope.svg' alt='почта' width={10} height={10}></Image>
                        </Link>
                        <a href="mailto:austom@mail.ru">info@austom.ru</a>
                    </div>
                    <div className="cont">
                        <Link href="https://yandex.ru/maps/-/CPTKBBPq" target="_blank" rel="noopener noreferrer">
                            <Image src='/header/location.svg' alt='карта' width={10} height={10}></Image>
                        </Link>
                        <a href="https://yandex.ru/maps/-/CPTKBBPq">г.Ростов-на-Дону,просп. 40-летия Победы, 3</a>
                    </div>
                </div>
            </div>
        </div>
    )
}