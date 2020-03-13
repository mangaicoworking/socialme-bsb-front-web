import React, { useState, useEffect, useContext } from 'react';
//CONTEXTS
import { AxiosContext } from './../../../../../../Contexts/AxiosContext';

const Table2 = (props) => {
    //CONTEXTS
    const { CallForSomeApi } = useContext(AxiosContext);
    //VARIABLES
    const [totalCache, setTotalCache] = useState(0);
    const [totalMV, setTotalMV] = useState(0);
    const [total, setTotal] = useState(0);
    //FUNCTIONS
    useEffect(() => {
        if (props.patient) {
            const params = {
                operation: 'GetTotalActivities',
                data: {
                    personId: props.patient._id,
                    where: "CACHE"
                }
            }
            CallForSomeApi((params), (axiosResponse) => {
                setTotalCache(axiosResponse.body.total);
            });
        }
    }, [CallForSomeApi]);

    useEffect(() => {
        if (props.patient) {
            const params = {
                operation: 'GetTotalActivities',
                data: {
                    personId: props.patient._id,
                    where: "MV"
                }
            }
            CallForSomeApi((params), (axiosResponse) => {
                setTotalMV(axiosResponse.body.total);
            });
        }
    }, [CallForSomeApi]);

    useEffect(() => {
        setTotal(totalCache + totalMV);
    }, [totalCache,totalMV]);

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
                    <td style={{ borderTop: 'none' }}>{totalCache}</td>
                </tr>
                <tr>
                    <td style={{ borderTop: 'none' }}>
                        <img className="avatar rounded-circle" alt="descr" src="../../assets/img/theme/userMV.jpg" style={{ width: '20px', height: '20px' }} />
                    </td>
                    <td style={{ borderTop: 'none', textAlign: 'center' }}>MV</td>
                    <td style={{ borderTop: 'none' }}>{totalMV}</td>
                </tr>
            </tbody>
            <tfoot>
                <tr>
                    <th className="h4"></th>
                    <th className="h4">Total</th>
                    <th colSpan="3" className="text-center h4">{total}</th>
                </tr>
            </tfoot>
        </table>
    );
}

export default Table2;