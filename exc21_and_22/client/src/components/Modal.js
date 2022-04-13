import React, { useState } from 'react'
import axios from '../util/apiClient'


const Modal = ({ isOpen, setIsOpen }) => {
    return (
        <div className={isOpen ? 'modal-container open' : 'modal-container closed'}>
            <CloseButton handleFunc={() => setIsOpen(false)} />
            <InputForm closeModal={() => setIsOpen(false)} />
        </div>
    )
}

const CloseButton = ({ handleFunc }) => {
    return (
        <button className='close-modal-button' onClick={handleFunc}>⨯</button>
    )
}

const InputForm = ({ closeModal }) => {
    const [text, setText] = useState("")

    const handleSubmit = async (e) => {
        e.preventDefault()
        const newJoke = e.target.value
        if (newJoke.length < 10) {
            setText("Your joke is too short!")
        } else {
            await axios.post('/jokes', { text: newJoke })
            setText("")
            closeModal()
        }
    }
    return (
        <form>
            <textarea value={text} onChange={(e) => setText(e.target.value)} placeholder='Write your awesome joke here'></textarea>
            <button type='submit' value={text} onClick={(e) => handleSubmit(e)}>Send</button>
        </form>
    )
}

export default Modal