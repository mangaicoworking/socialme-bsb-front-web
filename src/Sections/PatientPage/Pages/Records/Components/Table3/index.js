import React from 'react';

const Table3 = (props) => {
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

                {props.patient.ids.map((origin, index) => (
                    <tr key={index}>
                        <td>
                            {origin.system === "CACHE" ?
                                <img className="avatar rounded-circle" alt="Descr" src="../../assets/img/theme/userCache.jpg" style={{ width: '20px', height: '20px' }} />
                                :
                                <></>
                            }
                            {origin.system === "MV" ?
                                <img className="avatar rounded-circle" alt="Descr" src="../../assets/img/theme/userMV.jpg" style={{ width: '20px', height: '20px' }} />
                                :
                                <></>
                            }
                        </td>
                        <td>{origin.system}</td>
                        <td>{origin.id}</td>
                        <td>Integrado</td>
                    </tr>
                ))}

            </tbody>
        </table>
    );
}

export default Table3;