import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import './Join.css'

const Join = () => {
    const [name, setName] = useState('')
    const [room, setRoom] = useState('')

    return (
        <div className="joinOuterContainer">
            <div className="joinInnerContainer">
                <h1 className="heading">Primeira tela que fala?</h1>
                <div><input placeholder="Como quer ser chamado? 🤔" className="joinInput" type="text" onChange={(event) => setName(event.target.value)} /></div>
                <div><input placeholder="Nome da sala que quer entrar ou criar! 🤪" className="joinInput mt-20" type="text" onChange={(event) => setRoom(event.target.value)} /></div>

                <Link onClick={(event) => (!name || !room) ? event.preventDefault() : null} to={`/chat?name=${name}&room=${room}`}>
                    <button className="button mt-20" type="submit">Continuar 😎</button>
                </Link>
            </div>
        </div>
    )
}

export default Join