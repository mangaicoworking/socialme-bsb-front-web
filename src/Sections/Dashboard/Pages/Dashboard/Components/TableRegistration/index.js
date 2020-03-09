import React, { useState, useEffect, useContext } from 'react';
//COMPONENTS
import { LoaderDefault } from './../../../../../../Components/Loader/LoaderDefault';
//CONTEXTS
import { AxiosContext } from './../../../../../../Contexts/AxiosContext';
//SERVICES
import { normalNumber } from './../../../../../../Services/masks';

const TableRegistration = () => {
    //CONTEXTS
    const { CallForSomeApi } = useContext(AxiosContext);
    //VARIABLES
    const [totalCache, setTotalCache] = useState(109000);
    const [totalMV, setTotalMV] = useState(5100000);
    const [totalUniques, setTotalUniques] = useState(3200000);
    const [total, setTotal] = useState(8409000);
    const [loadCache, setLoadCache] = useState(true);
    const [loadMV, setLoadMV] = useState(true);
    const [loadUniques, setLoadUniques] = useState(true);
    const [loadTotal, setLoadTotal] = useState(true);

    //FUNCTIONS
    useEffect(() => {
        const params = {
            operation: 'GetTotalRecords',
            data: {
                mv: true
            }
        }
        CallForSomeApi((params), (axiosResponse) => {
            //console.log(axiosResponse);
            setTotalMV(axiosResponse.body.total);
            setLoadMV(false);
        });
    }, []);

    useEffect(() => {
        setTimeout(
            function () {
                setLoadCache(false);
            },1500
        );

        setTimeout(
            function () {
                setLoadUniques(false);
            },2500
        );
        setTimeout(
            function () {
                setLoadTotal(false);
            },3000
        );
    }, []);

    return (
        <div className="table-responsive text-center">
            <table className="table align-items-center table-flush table-striped">
                <thead className="thead-light">
                    <tr>
                        <th></th>
                        <th>Sistema</th>
                        <th>Total de Cadastros</th>
                    </tr>
                </thead>
                <tbody>

                    <tr>
                        <td className="table-user">
                            <img style={{ width: '32px', height: '32px', float: 'right' }} src="/assets/img/theme/userCache.jpg" className="avatar rounded-circle mr-3" alt="..." />
                        </td>
                        <td className="table-user">
                            <b>Cache</b>
                        </td>
                        <td>
                            {loadCache ?
                                <div style={{ height: '25px', display: 'flex', alignItems: 'center' }}>
                                    <LoaderDefault
                                        type={'Simple-1'}
                                        border={'3px solid var(--primary)'}
                                        width={'15px'}
                                        height={'15px'}
                                        margin={'0px auto'}
                                        borderBottomColor={'white'}
                                    />
                                </div>
                                :
                                <span>{normalNumber(totalCache.toString())}</span>
                            }
                        </td>
                    </tr>
                    <tr>
                        <td className="table-user">
                            <img style={{ width: '32px', height: '32px', float: 'right' }} src="/assets/img/theme/userMV.jpg" className="avatar rounded-circle mr-3" alt="..." />
                        </td>
                        <td className="table-user">
                            <b>MV</b>
                        </td>
                        <td>
                            {loadMV ?
                                <div style={{ height: '25px', display: 'flex', alignItems: 'center' }}>
                                    <LoaderDefault
                                        type={'Simple-1'}
                                        border={'3px solid var(--primary)'}
                                        width={'15px'}
                                        height={'15px'}
                                        margin={'0px auto'}
                                        borderBottomColor={'white'}
                                    />
                                </div>
                                :
                                <span>{normalNumber(totalMV.toString())}</span>
                            }
                        </td>
                    </tr>
                    <tr>
                        <td className="table-user">
                            <img style={{ width: '32px', height: '32px', float: 'right' }} src="/assets/img/theme/userProntuario.jpg" className="avatar rounded-circle mr-3" alt="..." />
                        </td>
                        <td className="table-user">
                            <b>Indivíduos únicos</b>
                        </td>
                        <td>
                            {loadUniques ?
                                <div style={{ height: '25px', display: 'flex', alignItems: 'center' }}>
                                    <LoaderDefault
                                        type={'Simple-1'}
                                        border={'3px solid var(--primary)'}
                                        width={'15px'}
                                        height={'15px'}
                                        margin={'0px auto'}
                                        borderBottomColor={'white'}
                                    />
                                </div>
                                :
                                <span>{normalNumber(totalUniques.toString())}</span>
                            }
                        </td>
                    </tr>
                    <tr>
                        <td className="table-user">
                        </td>
                        <td className="table-user">
                            <b>Total</b>
                        </td>
                        <td>
                            {loadTotal ?
                                <div style={{ height: '25px', display: 'flex', alignItems: 'center' }}>
                                    <LoaderDefault
                                        type={'Simple-1'}
                                        border={'3px solid var(--primary)'}
                                        width={'15px'}
                                        height={'15px'}
                                        margin={'0px auto'}
                                        borderBottomColor={'white'}
                                    />
                                </div>
                                :
                                <span><strong>{normalNumber(total.toString())}</strong></span>
                            }
                        </td>
                    </tr>

                </tbody>
            </table>
        </div>
    );
}

export default TableRegistration;