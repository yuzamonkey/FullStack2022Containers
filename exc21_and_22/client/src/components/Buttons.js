import React from 'react'

const Buttons = ({ openModal, getJoke }) => {
    return (
        <div className="buttons-container">
            <Button text="Give me another joke!" handleFunc={getJoke} />
            <Button text="I have a joke, let me write it!" handleFunc={openModal} />
        </div>
    )
}

const Button = ({ text, handleFunc }) => {

    return (
        <button onClick={handleFunc}>
            {text}
        </button>
    )


}

export default Buttons