import React, { useState, useEffect } from 'react';
import { set } from 'date-fns';

const Table1 = (props) => {
    console.log(props)
    const [totalCache, setTotalCache] = useState(0);
    const [totalMV, setTotalMV] = useState(0);
    const [total, setTotal] = useState(0);

    useEffect(() => {
        if(props.patient.ids){
            let count = 0;
            props.patient.ids.map((id) => {
                if (id.system === "CACHE") count++;
            })
            setTotalCache(count);
        }
    }, [props.patient.ids]);

    useEffect(() => {
        if(props.patient.ids){
            let count = 0;
            props.patient.ids.map((id) => {
                if (id.system === "MV") count++;
            })
            setTotalMV(count);
        }
    }, [props.patient.ids]);

    useEffect(() => {
        setTotal(totalCache+totalMV);
    }, [totalCache, totalMV]);

    return ( 
        <table className="table text-center">
            <thead className="bg-primary">
                <tr>
                    <th scope="col" className="text-center text-white"></th>
                    <th scope="col" className="text-center text-white"></th>
                    <th scope="col" className="text-center text-white">Cadastros</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td style={{ borderTop: 'none' }}> 
                        <img className="avatar rounded-circle" alt="Descr" src="../../assets/img/theme/userCache.jpg" style={{ width: '20px', height: '20px' }} /> 
                    </td>
                    <td style={{ borderTop: 'none', textAlign: 'left' }}>Cache</td>
                    <td style={{ borderTop: 'none' }}>{totalCache}</td>
                </tr>
                <tr>
                    <td style={{ borderTop: 'none' }}> 
                        <img className="avatar rounded-circle" alt="Descr" src="../../assets/img/theme/userMV.jpg" style={{ width: '20px', height: '20px' }} /> 
                    </td>
                    <td style={{ borderTop: 'none', textAlign: 'left' }}>MV</td>
                    <td style={{ borderTop: 'none' }}>{totalMV}</td>
                </tr>
            </tbody>
            <tfoot>
                <tr>
                <th className="h4"></th>
                <th className="h4" style={{ textAlign: 'left' }}>Total</th>
                <th colSpan="3" className="text-center h4">{total}</th>
                </tr>
            </tfoot>
        </table>
    );
}
 
export default Table1;