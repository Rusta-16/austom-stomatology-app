'use client'
import { useForm } from '../ShowForm'

export default function () {
    const {showWindowConfirm} = useForm()
    return (
        <div>
            <button className='buttonCard2' onClick={showWindowConfirm}>Записаться на приём</button>
        </div>
    )
}
    