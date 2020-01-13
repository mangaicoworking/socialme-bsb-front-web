import React from 'react';
import { Link } from 'react-router-dom';

const Table1 = () => {
    return ( 

        <table className="table text-center">
            <thead className="bg-primary">
                <tr>
                    <th scope="col" className="text-center text-white">Nome</th>
                    <th scope="col" className="text-center text-white">Nome da Mãe</th>
                    <th scope="col" className="text-center text-white">CPF</th>
                    <th scope="col" className="text-center text-white">CNS</th>
                    <th scope="col" className="text-center text-white">Nascimento</th>
                    <th scope="col" className="text-center text-white">Prontuário MV</th>
                    <th scope="col" className="text-center text-white">Prontuário SES</th>
                    <th scope="col" className="text-center text-white"></th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td><Link target={'_blank'} to="/paciente">Miguel Almeida Silva</Link></td>
                    <td>Larissa Carvalho Gomes</td>
                    <td>000.000.000-00</td>
                    <td>833545645800004</td>
                    <td>16/06/1993</td>
                    <td>84121</td>
                    <td>15123</td>
                    <td>
                        <Link target={'_blank'} to="/paciente">
                            <i className="ni far fa-eye"></i>
                        </Link>
                    </td>
                </tr>
                <tr>
                    <td><Link target={'_blank'} to="/paciente">Igor Araujo Goncalves</Link></td>
                    <td>Brenda Azevedo Santos</td>
                    <td>000.000.000-00</td>
                    <td>833545645800004</td>
                    <td>16/06/1993</td>
                    <td>84121</td>
                    <td>15123</td>
                    <td>
                        <Link target={'_blank'} to="/paciente">
                            <i className="ni far fa-eye"></i>
                        </Link>
                    </td>
                </tr>
                <tr>
                    <td><Link target={'_blank'} to="/paciente">Paulo Melo Costa</Link></td>
                    <td>Fernanda Pereira Dias</td>
                    <td>000.000.000-00</td>
                    <td>833545645800004</td>
                    <td>16/06/1993</td>
                    <td>84121</td>
                    <td>15123</td>
                    <td>
                        <Link target={'_blank'} to="/paciente">
                            <i className="ni far fa-eye"></i>
                        </Link>
                    </td>
                </tr>
                <tr>
                    <td><Link target={'_blank'} to="/paciente">Fernanda Carvalho da Costa</Link></td>
                    <td>Ana Paula da Costa</td>
                    <td>000.000.000-00</td>
                    <td>833545645800004</td>
                    <td>16/06/1993</td>
                    <td>84121</td>
                    <td>15123</td>
                    <td>
                        <Link target={'_blank'} to="/paciente">
                            <i className="ni far fa-eye"></i>
                        </Link>
                    </td>
                </tr>
            </tbody>
        </table>
    );
}
 
export default Table1;