import React,{ useState } from 'react';
//OWN COMPONENTS
import { Header } from './Components/Header';
import Table1 from './Components/Table1';
//COMPONENTS
import { LoaderDefault } from './../../../../Components/Loader/LoaderDefault';

const BrasiliaManagerDashboardPatients = () => {
    const [render, setRender] = useState(false);
    const [load, setLoad] = useState(false);

    const consulting = () => {
        setLoad(true);
        setTimeout(
            function() {
                setLoad(false);
                setRender(true);
            },2000
        );
    }

    const renderTable = () => {
        if(load){
            return(
                <div style={{ height: '300px', display: 'flex', alignItems: 'center' }}>
                    <LoaderDefault 
                    type={'Simple-1'} 
                    border={'3px solid var(--primary)'}
                    width={'3em'}
                    height={'3em'}
                    margin={'0px auto'}
                    borderBottomColor={'white'}
                    />
                </div>
            )
        }else{
            if(render){
                return(
                    <div className="row">
                        <div style={{ overflow: 'auto' }}  className="col-md-12">
                            <div className="mb-3">
                                <small className="text-uppercase font-weight-bold">Resultado da Busca</small>
                            </div>
                            <Table1 />
                        </div>
                    </div>
                )
            }
        }
    }
    return ( 
        <>
            <Header />
            <div className="container-fluid mt--6">
                {/* row Table */}
                <div className="row">
                    <div className="col-md-12">
                        <div className="card">
                            <div className="card-header border-0">
                                    <div className="row align-items-center">
                                    <div className="col-lg-9">
                                        <h3 className="mb-0">Buscar Paciente</h3>
                                    </div>
                                </div>
                            </div>{/* /card-header */}
                            <div className="card-body">
                                
                            <div className="row">
                                <div className="col-md-3">
                                    <div className="form-group">
                                        <label className="form-control-label">Nome Completo</label>
                                        <div className="input-group input-group-merge">
                                            <input className="form-control" placeholder="Ex. Arthur de Melo" type="text" defaultValue="" style={{ textTransform: 'uppercase' }} />
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-3">
                                    <div className="form-group">
                                        <label className="form-control-label">Nome da Mãe</label>
                                        <div className="input-group input-group-merge">
                                            <input className="form-control" placeholder="Ex. Maria Goreth Meira" type="text" defaultValue="" style={{ textTransform: 'uppercase' }} />
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-2">
                                    <div className="form-group">
                                        <label className="form-control-label">CPF</label>
                                        <div className="input-group input-group-merge">
                                            <input className="form-control" placeholder="Ex. 000.000.000-00" type="text" defaultValue="" style={{ textTransform: 'uppercase' }} />
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-2">
                                    <div className="form-group">
                                        <label className="form-control-label">CNS</label>
                                        <div className="input-group input-group-merge">
                                            <input className="form-control" placeholder="Ex. 833545645800004" type="text" defaultValue="" style={{ textTransform: 'uppercase' }} />
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-2">
                                    <div className="form-group">
                                        <label className="form-control-label">Nascimento</label>
                                        <div className="input-group input-group-merge">
                                            <input className="form-control" placeholder="Ex. 00/00/00" type="text" defaultValue="" style={{ textTransform: 'uppercase' }} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-2">
                                    <div className="form-group">
                                        <label className="form-control-label">Prontuário MV</label>
                                        <div className="input-group input-group-merge">
                                            <input className="form-control" placeholder="Ex." type="text" defaultValue="" style={{ textTransform: 'uppercase' }} />
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-2">
                                    <div className="form-group">
                                        <label className="form-control-label">Prontuário SES</label>
                                        <div className="input-group input-group-merge">
                                            <input className="form-control" placeholder="Ex." type="text" defaultValue="" style={{ textTransform: 'uppercase' }} />
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="row">
                                <div className="col-md-12">
                                    <button onClick={() => consulting()} type="button" className="btn btn-primary btn-sm">Buscar</button>
                                </div>
                            </div>

                            <br/><br/>

                            {renderTable()}     
                
                            </div>{/* /card-body */}
                        </div>
                    </div>
                </div>{/* /row Table */}
            </div> {/* /container-fluid */}
        </>
     );
}
 
export default BrasiliaManagerDashboardPatients;