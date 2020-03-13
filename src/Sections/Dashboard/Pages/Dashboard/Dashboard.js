import React from 'react';
//OWN COMPONENTS
import { Header } from './Components/Header';
import TableRegistration from './Components/TableRegistration';
import Graph1 from './Components/Graph1';
import Table2 from './Components/Table2';
import Table3 from './Components/Table3';

const BrasiliaManagerDashboard = () => {
    return ( 
        <>
            <Header />
            <div className="container-fluid mt--6">
                {/* row Table */}
                <div className="row">
                    <div className="col-md-12">
                        <div className="card">
                            <div className="card-body">
                                
                                <div className="nav-wrapper" style={{ padding: '0px 0px 1em' }} >
                                    <ul className="nav nav-pills nav-pills-primary" role="tablist">
                                        <li className="nav-item">
                                            <a className="nav-link active" data-toggle="tab" href="#link11" role="tablist">
                                                Visão Geral
                                            </a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link" data-toggle="tab" href="#link12" role="tablist">
                                                TOP 20
                                            </a>
                                        </li>
                                    </ul>
                                </div>

                                <div className="tab-content tab-space">
                                    <div className="tab-pane fade active show" id="link11">
                                        <div className="row">
                                            <div className="col-md-12">
                                                <TableRegistration />
                                            </div>
                                        </div>
                                        <br/><br/>
                                        <div className="row">
                                            <div className="col-md-6">
                                                <div className="mb-3">
                                                    <small className="text-uppercase font-weight-bold">Cadastros Duplicados MV</small>
                                                </div>
                                                <Graph1 />
                                            </div>
                                            <div className="col-md-6">
                                                <div className="mb-3">
                                                    <small className="text-uppercase font-weight-bold">Cadastros Duplicados SES</small>
                                                </div>
                                                <Graph1 />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="tab-pane fade" id="link12">
                                        <div className="row">
                                            <div className="col-md-6">
                                                <div className="mb-3">
                                                    <small className="text-uppercase font-weight-bold">Pacientes mais atendidos</small>
                                                </div>
                                                <Table2 />
                                            </div>
                                            <div className="col-md-6">
                                                <div className="mb-3">
                                                    <small className="text-uppercase font-weight-bold">Maiores Repetições</small>
                                                </div>
                                               
                                                <Table3 />
                                            
                                                
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>{/* /card-body */}
                        </div>
                    </div>
                </div>{/* /row Table */}
            </div> {/* /container-fluid */}
        </>
     );
}
 
export default BrasiliaManagerDashboard;