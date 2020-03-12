import React from 'react';

const Table2 = () => {
    return ( 

        <table className="table text-center">
            <thead className="bg-primary">
                <tr>
                    <th scope="col" className="text-center text-white"></th>
                    <th scope="col" className="text-center text-white"></th>
                    <th scope="col" className="text-center text-white">Passagens</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td style={{ borderTop: 'none' }}> 
                        <img className="avatar rounded-circle" alt="descr" src="../../assets/img/theme/userCache.jpg" style={{ width: '20px', height: '20px' }} /> 
                    </td>
                    <td style={{ borderTop: 'none', textAlign: 'center' }}>Cache</td>
                    <td style={{ borderTop: 'none' }}>00</td>
                </tr>
                <tr>
                    <td style={{ borderTop: 'none' }}> 
                        <img className="avatar rounded-circle" alt="descr" src="../../assets/img/theme/userMV.jpg" style={{ width: '20px', height: '20px' }} /> 
                    </td>
                    <td style={{ borderTop: 'none', textAlign: 'center' }}>MV</td>
                    <td style={{ borderTop: 'none' }}>00</td>
                </tr>
            </tbody>
            <tfoot>
                <tr>
                <th className="h4"></th>
                <th className="h4">Total</th>
                <th colSpan="3" className="text-center h4">00</th>
                </tr>
            </tfoot>
        </table>
    );
}
 
export default Table2;