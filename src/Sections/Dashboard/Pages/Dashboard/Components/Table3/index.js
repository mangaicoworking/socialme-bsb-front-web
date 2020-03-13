import React from 'react';
import './Table3.css';
//import { Link } from 'react-router-dom';

const dataFake = [
    { name: "THALITA AMANDA REGO LEWIS CRISOSTOMO", repetitions: 8, id: 4636786 },
    { name: "MARIA DA CONCEICAO LOPES DA SILVA", repetitions: 8, id: 4636786 },
    { name: "MARIA DA CONCEICAO VIANA CORTES", repetitions: 8, id: 4643243 },
    { name: "NAYELE MENDONCA", repetitions: 8, id: 5454868 },
    { name: "MARIA DA CONCEICAO NUNES DE OLIVEIRA", repetitions: 8, id: 4638371 },
    { name: "LAIS GONCALVES DA SILVA", repetitions: 8, id: 3851853 },
    { name: "JOSE LOURENCO DE SOUZA", repetitions: 8, id: 3475052 },
    { name: "MARIA DA CONCEICAO DE ANDRADE CARVALHO", repetitions: 8, id: 4632289 },
    { name: "ARNALDO PEREIRA DA CONCEICAO", repetitions: 7, id: 748493 },
    { name: "LUCAS BANDEIRA DA CONCEICAO", repetitions: 7, id: 4114631 },
    { name: "VANIA RODRIGUES DE SOUSA SILVA", repetitions: 7, id: 6808304 },
    { name: "CONCEICAO DA SILVA SANTANA", repetitions: 7, id: 1239432 },
    { name: "CARINA CONCEICAO DA SILVA", repetitions: 7, id: 976366 },
    { name: "JOSE EVANGELISTA DA ROCHA SILVA", repetitions: 7, id: 3444689 },
    { name: "AGAMENON MONDEGO PAVAO", repetitions: 7, id: 102809 },
    { name: "CONCEICAO DE MARIA DA SILVA", repetitions: 7, id: 1240145 },
    { name: "DESILMA DA COSTA TAVARES", repetitions: 7, id: 1483560 },
    { name: "VITOR ALBUQUERQUE DE SOUSA", repetitions: 7, id: 6893050 },
    { name: "NATALIA DE SOUSA GONCALVES", repetitions: 7, id: 5420883 },
    { name: "MARISA DA CONCEICAO DE CARVALHO", repetitions: 7, id: 5145414 }
]

const Table3 = () => {
    return (

        <table className="table text-center table-responsive Dashboard-Table3">
            <thead className="bg-primary">
                <tr>
                    <th scope="col" className="text-center text-white">Posição</th>
                    <th scope="col" className="text-center text-white">Paciente</th>
                    <th scope="col" className="text-center text-white">Repetições</th>
                </tr>
            </thead>
            <tbody>

                {dataFake.map((item, index) => (
                    <tr key={index}>
                        <td>{index + 1}º</td>
                        <td>
                            {item.name}
                        </td>
                        <td>{item.repetitions}</td>
                    </tr>
                ))}

            </tbody>
        </table>
    );
}

export default Table3;