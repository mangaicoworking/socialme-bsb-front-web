import React from 'react';

const Table3 = () => {
    return ( 

        <table className="table text-center">
            <thead className="bg-primary">
                <tr>
                    <th scope="col" className="text-center text-white"></th>
                    <th scope="col" className="text-center text-white">Sistema</th>
                    <th scope="col" className="text-center text-white">Prontuário</th>
                    <th scope="col" className="text-center text-white">Status</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td> 
                        <img className="avatar rounded-circle" alt="Descr" src="../../assets/img/theme/userCache.jpg" style={{ width: '20px', height: '20px' }} /> 
                    </td>
                    <td>Cache</td>
                    <td>ABC1235</td>
                    <td>Integrado</td>
                </tr>
                <tr>
                    <td> 
                        <img className="avatar rounded-circle" alt="Descr" src="../../assets/img/theme/userCache.jpg" style={{ width: '20px', height: '20px' }} /> 
                    </td>
                    <td>Cache</td>
                    <td>JS325</td>
                    <td>Principal</td>
                </tr>
                <tr>
                    <td> 
                        <img className="avatar rounded-circle" alt="Descr" src="../../assets/img/theme/userMV.jpg" style={{ width: '20px', height: '20px' }} /> 
                    </td>
                    <td>MV</td>
                    <td>6952488</td>
                    <td>Integrado</td>
                </tr>
                <tr>
                    <td> 
                        <img className="avatar rounded-circle" alt="Descr" src="../../assets/img/theme/userMV.jpg" style={{ width: '20px', height: '20px' }} /> 
                    </td>
                    <td>MV</td>
                    <td>2652164</td>
                    <td>Principal</td>
                </tr>
            </tbody>
        </table>
    );
}
 
export default Table3;