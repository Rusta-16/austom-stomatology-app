import React from 'react'

export default function ReviewsPage() {
  return (
    <div className="ReviewsPage" id='rewiew'>
      <h2>Отзывы</h2>
      <div className="widget">
        <iframe
          src="https://yandex.ru/maps-reviews-widget/1029802694?comments"
          title="Отзывы"
        ></iframe>

        <a
          href="https://yandex.ru/maps/org/ayustom/1029802694/"
          target="_blank"
          rel="noreferrer"
        >
          Аюстом на карте Ростова-на-Дону — Яндекс Карты
        </a>
      </div>
    </div>
  )
}