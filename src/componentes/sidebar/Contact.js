import React, { useState } from 'react'

const Contact = (props) => {
    const { contatos } = props;

    const [mostraContato, setMostraContato] = useState(false)

    return (
        <>
            <div className="sidebar">
                <h3>Contatos</h3>
                <button onClick={ () => { setMostraContato(true) }}>Mostrar Contatos</button>
                {
                    mostraContato === true ?
                        <div className="lista-de-contatos">
                            {
                                contatos.map((item) => (
                                    <li key={item.id}>
                                        <div className="item-contato">
                                            <h4>{item.tipo}</h4>
                                            <p>{item.contato}</p>
                                        </div>
                                    </li>
                                ))
                            }
                        </div>
                    : ''}
            </div>
        </>
    )
}
export default Contact