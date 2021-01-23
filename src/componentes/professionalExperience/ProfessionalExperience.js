import React from 'react'

const ProfessionalExperience = (props) => {
    const {experienceList} = props;

    console.log("O que eu estou recebendo em experienceList das props da ProfessionalExperience é: ", experienceList)
    return (
        <>
            <div className="experience">
                <h2>Experiência Profissional</h2>
                { experienceList.map((item) => {
                        const {cargo, periodo, empresa, local, conteudo} = item
                        return (
                            <div className="experience-item">
                                <div>
                                    <h4>{cargo}</h4>
                                    <span>{periodo}</span>
                                    <strong>{empresa}</strong>
                                    <span>{local}</span>
                                </div>
                                <p>
                                    {conteudo}
                                </p>
                            </div>
                        )

                    }
                )}
            </div>
        </>
    )
}

export default ProfessionalExperience