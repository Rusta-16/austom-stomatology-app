import Image from 'next/image'
import { FaTimes } from 'react-icons/fa'

export default function ({ cancelConfirm }) {

  return (
    <div className='TrueForm' onClick={cancelConfirm}>
      <div className='trueBlock' onClick={(e) => e.stopPropagation()}>
        <button id='faTime' onClick={cancelConfirm}><FaTimes size="1.5rem" /> </button>
        <Image src={`/trueCheck.svg`} alt='s' id='is' width={50} height={50}></Image>
        <h2>Ваша заявка принята</h2>
        <p>Наш администратор с вами свяжется</p>
        <Image src={`/Tooth.svg`} alt='touth' id='touth' width={50} height={50}></Image>
      </div>
    </div>
  )
}
