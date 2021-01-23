import React from 'react'

const Education = (props) => {
    const { educacao } = props;
    //console.log('O Objeto educação recebe: ', educacao)

    return (
        <>
            <div className="sidebar">
                <h3>Educação</h3>
                <div className="lista-de-formacao">
                    {
                        educacao.map((item) => (
                            <li key={item.id}>
                                <h4>{item.instituicao}</h4>
                                <p>{item.curso}</p>
                            </li>
                        ))

                    }
                </div>
                </div>
        </>
    )
}

export default Education