import React from 'react'
import Contact from './Contact'
import Education from './Education'

const Sidebar = (props) => {
    const { contatos, educacao } = props

    console.log('O Objeto educação recebe: ', educacao)

    return (
        <aside>
            < Contact contatos={contatos} />
            < Education educacao={educacao}/>
        </aside>
    )
}

export default Sidebar