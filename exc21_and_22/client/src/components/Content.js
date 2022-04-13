import React from 'react'


const Content = ({ joke }) => {

    return (
        <div className="content-container">
            <h2>Random Joke</h2>
            <p>{joke}</p>
        </div>
    )
}

export default Content