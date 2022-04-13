import React, { useState, useEffect } from 'react'
import Title from './Title'
import Content from './Content'
import Buttons from './Buttons'
import Modal from './Modal'
import axios from '../util/apiClient'

const MainView = () => {
    const [modalOpen, setModalOpen] = useState(false)
    const [joke, setJoke] = useState('')

    const getJoke = async () => {
        const { data } = await axios.get('/jokes/random')
        setJoke(data.text)
    }

    useEffect(() => {
        getJoke()
    }, [])

    return (
        <div className="main-container">
            <Title />
            <Content joke={joke}/>
            <Buttons openModal={() => setModalOpen(true)} getJoke={() => getJoke()}/>
            <Modal isOpen={modalOpen} setIsOpen={setModalOpen} />
        </div>
    )
}

export default MainView