import React from 'react';
//OWN COMPONENTS
import EvolutionCard from './Components/EvolutionCard';

const Evolution = () => {
    return ( 
        <div className="row">
            <div className="col-md-12">
                <EvolutionCard 
                text="ALTA: SINUTAB, 1CX + DIPIRONA SN + SRO + RETORNO COM 48HRS PARA REAVALIAÇÃO CLINICA E LABORATORIAL + ORIENTAÇÕES + RETORNO SE PIORA CLINICA E/OU PRESENÇA DE SINAIS DE ALERTA" 
                />
            </div>
            <div className="col-md-12">
                <EvolutionCard 
                text="PACIENTE DE BG, EUPNEICA, HIDRATADA, NORMOCORADA, LUCIDA, AUSENCIA DE HEMATOMA EM MAMAS, SEM SINAIS DE ISQUEMIA EM CAP, DIURESE CLARA, RECEBE ALTA HOSPITALAR M OTIMAS CONDIÇÕES, SEM QUEIXAS CLINICAS." 
                />
            </div>
            <div className="col-md-12">
                <EvolutionCard
                text="Radiografia de torax em PA esta normal. Radiografia dos seios da face está com espessamento nos seios maxilares. Prescritos amoxilina com clavulanato e beclometasona spray nasal." 
                />
            </div>
        </div>
    );
}
 
export default Evolution;