import React from 'react'
import Picture from '../../images/karina-profile.jpeg'

const PersonalProfile = (props) => {
    const { nome, ocupacao, resumo, perfilProfissional } = props
    return (
        <>
            <div className="perfil">
                <img src={Picture} alt="Perfil" />
            </div>
            <div className="biografia">
            <h1>
                {nome}
            </h1>
            <div className="ocupacao">{ocupacao}</div>
            <p>{resumo}</p>
            </div>
            <div className="titulo">
                Perfil <br /> Profissional
            </div>

            <div className="perfil-profissional">
                <p>
                    {perfilProfissional}
                </p>
            </div>
        </>

    )
}

export default PersonalProfile