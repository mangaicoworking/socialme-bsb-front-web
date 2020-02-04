import React, { useContext, useEffect, useState } from 'react';
//LIBRARIES
import socketIOClient from 'socket.io-client';
//CONTEXTS
import { AxiosContext } from './../../Contexts/AxiosContext';

const Socket = () => {
    //CONTEXT'S
    const { CallForSomeApi } = useContext(AxiosContext);
    //VARIABLES
    const [users, setUsers] = useState([]);
    const [peopleOnlineNumber, setPeopleOnlineNumber] = useState(0);
    //FUNCTIONS
    useEffect(() => {
        console.log('UseEffect')
        const params = {
            operation: 'ListUsers',
            data: {
                limit: 10,
                page: 1,
                sort: {
                    by: "name",
                    order: "asc"
                }
            }
        }
        CallForSomeApi((params), (axiosResponse) => {
            if (axiosResponse === 401) {
                //error
            } else {
                console.log(axiosResponse);
                setUsers(axiosResponse.body.UsersList);
            }
        });
    }, [CallForSomeApi]);
    //SOCKET
    useEffect(() => {
        console.log('UseEffect - SOCKET')
        const socket = socketIOClient('http://192.168.2.16:3000/');
        socket.on("peopleOnlineNow", data => {
            console.log(data);
            setPeopleOnlineNumber(data);
        })
    }, []);
    return (
        <div className="Socket">
            <div className="container">
                <br />
                <div className="card">
                    <div className="card-header border-0">
                        <div className="row">
                            <div className="col-6">
                                <h3 className="mb-0">Socket.io Test</h3>
                            </div>
                            <div className="col-6 text-right">
                                <small className="text-uppercase text-muted font-weight-bold">
                                    <strong>Users Online: </strong>
                                    {peopleOnlineNumber}
                                </small>
                            </div>
                        </div>
                    </div>

                    <div className="table-responsive">
                        <table className="table align-items-center table-flush">
                            <thead className="thead-light">
                                <tr>
                                    <th>User</th>
                                    <th>Permissions</th>
                                    <th>Tokens</th>
                                    <th>Situation</th>
                                </tr>
                            </thead>
                            <tbody>

                                {
                                    users.map((user, index) => (
                                        <tr key={index}>
                                            <td>
                                                <div style={{ display: 'flex' }}>
                                                    <img alt="desfas" src={user.photo} className="avatar rounded-circle mr-3" />
                                                    <div style={{ display: 'grid' }}>
                                                        <b>{user.name}</b>
                                                        <small>{user.email}</small>
                                                    </div>
                                                </div>
                                            </td>
                                            <td style={{ display: 'grid' }}>
                                                {
                                                    user.permissions.map((permission, index) => {
                                                        switch (permission) {
                                                            case ('ADMIN'):
                                                                return (<span key={index} className="text-muted"><i className="fas fa-crown"></i> Administrador Geral</span>)
                                                            case ('USERS-READ'):
                                                                return (<span key={index} className="text-muted"><i className="far fa-eye"></i> Ler Usuários</span>)
                                                            case ('USERS-WRITE'):
                                                                return (<span key={index} className="text-muted"><i className="fas fa-pen"></i> Criar/Editar Usuários</span>)
                                                            case ('USERS-DELETE'):
                                                                return (<span key={index} className="text-muted"><i className="far fa-trash-alt"></i> Deletar Usuários</span>)
                                                            case ('USERS-PERM-WRITE'):
                                                                return (<span key={index} className="text-muted"><i className="fas fa-user-cog"></i> Editar permissões de outros usuários</span>)
                                                            case ('PEOPLE-READ'):
                                                                return (<span key={index} className="text-muted"><i className="far fa-eye"></i> Ler Pacientes</span>)
                                                            case ('PEOPLE-WRITE'):
                                                                return (<span key={index} className="text-muted"><i className="fas fa-pen"></i> Criar/Editar pacientes</span>)
                                                            case ('PEOPLE-DELETE'):
                                                                return (<span key={index} className="text-muted"><i className="far fa-trash-alt"></i> Deletar pacientes</span>)
                                                            default:
                                                                return (<span key={index} className="text-muted"><i className="fas fa-cog"></i> Outra permissão</span>)
                                                        }

                                                    })
                                                }
                                            </td>
                                            <td>
                                                {
                                                    user.tokens.map((token,index) => (
                                                        <img style={{ width: '32px', height: '32px' }} key={index} alt="description" src={user.photo} className="avatar rounded-circle mr-3" />
                                                    ))
                                                }
                                            </td>
                                            <td className="table-actions">
                                                <span className="badge badge-dot mr-4">
                                                    <i className="bg-danger"></i>
                                                    <span className="status">Offline</span>
                                                </span>
                                            </td>
                                        </tr>
                                    ))
                                }

                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Socket;