import React, { useState, useEffect, useContext } from 'react';
//import axios from 'axios';
//OWN COMPONENTS
import { Header } from './Components/Header';
import Table1 from './Components/Table1/TablePatients';
import Pagination from './Components/Pagination';
import PaginationInformation from './Components/PaginationInformation';
//COMPONENTS
import { LoaderDefault } from './../../../../Components/Loader/LoaderDefault';
//CONTEXTS
import { AxiosContext } from './../../../../Contexts/AxiosContext';

const BrasiliaManagerDashboardPatients = () => {
    //CONTEXTS
    const { CallForSomeApi } = useContext(AxiosContext);
    //VARIABLES
    const [render, setRender] = useState(true);
    const [load, setLoad] = useState(false);
    const [people, setPeople] = useState([]);
    const [goAPI, setGoAPI] = useState(false);
    const [pagingParametersActions, setPagingParametersActions] = useState({
        limit: 10,
        currentPage: 1,
    })
    const [pagingParameters, setPagingParameters] = useState({
        limit: pagingParametersActions.limit,
        totalDocs: 1,
        totalPages: 1,
        hasNextPage: false,
        hasPrevPage: false,
        nextPage: 2,
        currentPage: pagingParametersActions.currentPage,
        prevPage: 0,
        pagingCounter: 1
    })
    const [openFilters, setOpenFilters] = useState(true);
    const [filters, setFilters] = useState({
        name: '',
        motherName: '',
        cpf: '',
        cns: '',
        birthDate: '',
        prontuarioMV: '',
        prontiarioSES: ''
    })
    const [filtersSubmit, setFiltersSubmit] = useState({
        name: '',
        motherName: '',
        cpf: '',
        cns: '',
        birthDate: '',
        prontuarioMV: '',
        prontiarioSES: ''
    })

    const SubmitFilters = () => {
        setGoAPI(true);
        setFiltersSubmit({
            name: filters.name,
            mother: filters.motherName,
            cpf: filters.cpf,
            cns: filters.cns,
            birth: filters.birthDate,
            prontuarioMV: filters.prontuarioMV,
            prontiarioSES: filters.prontiarioSES
        })
        setPagingParametersActions({
            ...pagingParametersActions,
            currentPage: 1,
        })
    }

    useEffect(() => {
        if (goAPI) {
            setLoad(true);
            setRender(false);
            const params = {
                operation: 'ListAllPatients',
                data: {
                    "limit": pagingParametersActions.limit,
                    "page": pagingParametersActions.currentPage,
                    "sort": {
                        "by": "name",
                        "order": "asc"
                    },
                    filters: {
                        name: filtersSubmit.name,
                        mother: filtersSubmit.motherName,
                        cpf: filtersSubmit.cpf,
                        cns: filtersSubmit.cns,
                        birth: filtersSubmit.birthDate,
                        mv: filtersSubmit.prontuarioMV,
                        ses: filtersSubmit.prontiarioSES
                    }
                }
            }
            CallForSomeApi((params), (axiosResponse) => {
                console.log(axiosResponse);
                if (axiosResponse.body) {
                    if (axiosResponse.body.PeopleList) {
                        setPeople(axiosResponse.body.PeopleList);
                    }
                    setPagingParameters({
                        limit: axiosResponse.body.limit,
                        totalDocs: axiosResponse.body.PersonCount,
                        totalPages: axiosResponse.body.totalPages,
                        hasNextPage: axiosResponse.body.hasNextPage,
                        hasPrevPage: axiosResponse.body.hasPrevPage,
                        currentPage: axiosResponse.body.currentPage,
                        nextPage: axiosResponse.body.nextPage,
                        prevPage: axiosResponse.body.prevPage,
                        pagingCounter: axiosResponse.body.pagingCounter
                    })
                    setLoad(false);
                    setRender(true);
                } else {
                    console.log('Deu ruim...')
                }
            });
        }
    }, [CallForSomeApi, pagingParametersActions.limit, pagingParametersActions.currentPage, filtersSubmit.name, filtersSubmit.motherName, filtersSubmit.cpf, filtersSubmit.cns, filtersSubmit.birthDate, filtersSubmit.prontuarioMV, filtersSubmit.prontiarioSES, goAPI]);

    const HandleChangePagingParametersActions = name => event => {
        setPagingParametersActions({ ...pagingParametersActions, [name]: parseInt(event.target.value) });
    }
    const SetNewPage = (newPage) => {
        setPagingParametersActions({ ...pagingParametersActions, currentPage: newPage });
    }
    const HandleChangeFilters = name => event => {
        setFilters({ ...filters, [name]: event.target.value });
    }
    const ToogleFilters = () => {
        setOpenFilters(!openFilters)
    }
    const renderTable = () => {
        if (load) {
            return (
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
        } else {
            if (render && goAPI) {
                return (
                    <>

                        <br />
                        <div className="row" style={{ alignItems: 'center' }}>
                            <div className="col-6">
                                <PaginationInformation parameters={pagingParameters} />
                            </div>
                            <div className="col-6 text-right">
                                <Pagination parameters={pagingParameters} SetNewPage={SetNewPage} />
                            </div>
                        </div>
                        <br />

                        <div className="row">
                            <div style={{ overflow: 'auto' }} className="col-md-12">
                                <Table1 data={people ? people : ''} filtersSubmit={filtersSubmit} />
                            </div>
                        </div>

                        <br />
                        <div className="row" style={{ alignItems: 'center' }}>
                            <div className="col-6">
                                <PaginationInformation parameters={pagingParameters} />
                            </div>
                            <div className="col-6 text-right">
                                <Pagination parameters={pagingParameters} SetNewPage={SetNewPage} />
                            </div>
                        </div>

                    </>

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
                                        <h3 className="mb-0">Pacientes</h3>
                                    </div>
                                </div>
                            </div>{/* /card-header */}
                            <div className="card-body">

                                <div className="row">
                                    <div className="col-6">
                                        {goAPI ?
                                            <div style={{ display: 'flex' }}>
                                                <small>Mostrar</small>
                                                <select value={pagingParametersActions.limit} onChange={HandleChangePagingParametersActions('limit')} style={{ width: '50px', padding: '0px', height: '20px', margin: '0px 10px' }} className="form-control">
                                                    <option value={10} >10</option>
                                                    <option value={25} >25</option>
                                                    <option value={50} >50</option>
                                                    <option value={75} >75</option>
                                                    <option value={100} >100</option>
                                                </select>
                                                <small>registros por página</small>
                                            </div>
                                            :
                                            <></>
                                        }


                                    </div>
                                    <div className="col-6 text-right">
                                        <button onClick={() => ToogleFilters()} className="btn btn-icon btn-primary btn-sm" type="button">
                                            {openFilters ?
                                                <span className="btn-inner--icon"><i className="fas fa-angle-up"></i></span>
                                                :
                                                <span className="btn-inner--icon"><i className="fas fa-angle-down"></i></span>
                                            }

                                            <span className="btn-inner--text">Filtros</span>
                                        </button>
                                    </div>
                                </div>
                                {openFilters ?
                                    <div style={{ backgroundColor: 'var(--backgroundColor)', padding: '20px', margin: '20px 0px' }}>
                                        <div className="row">
                                            <div className="col-md-3">
                                                <div className="form-group">
                                                    <label style={{ margin: '0px' }} className="form-control-label">Nome Completo</label>
                                                    <div className="input-group input-group-merge">
                                                        <input
                                                            onChange={HandleChangeFilters('name')}
                                                            value={filters.name}
                                                            className="form-control"
                                                            placeholder="Nome Completo"
                                                            type="text"
                                                            style={{ textTransform: 'uppercase', height: '30px', padding: '0px 5px' }}
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-md-3">
                                                <div className="form-group">
                                                    <label style={{ margin: '0px' }} className="form-control-label">Nome da Mãe</label>
                                                    <div className="input-group input-group-merge">
                                                        <input
                                                            onChange={HandleChangeFilters('motherName')}
                                                            value={filters.motherName}
                                                            className="form-control"
                                                            placeholder="Nome da Mãe"
                                                            type="text"
                                                            style={{ textTransform: 'uppercase', height: '30px', padding: '0px 5px' }}
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-md-2">
                                                <div className="form-group">
                                                    <label style={{ margin: '0px' }} className="form-control-label">CPF</label>
                                                    <div className="input-group input-group-merge">
                                                        <input
                                                            onChange={HandleChangeFilters('cpf')}
                                                            value={filters.cpf}
                                                            className="form-control"
                                                            placeholder="000.000.000-00"
                                                            type="text"
                                                            style={{ textTransform: 'uppercase', height: '30px', padding: '0px 5px' }}
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-md-2">
                                                <div className="form-group">
                                                    <label style={{ margin: '0px' }} className="form-control-label">CNS</label>
                                                    <div className="input-group input-group-merge">
                                                        <input
                                                            onChange={HandleChangeFilters('cns')}
                                                            value={filters.cns}
                                                            className="form-control"
                                                            placeholder="833545645800004"
                                                            type="text"
                                                            style={{ textTransform: 'uppercase', height: '30px', padding: '0px 5px' }}
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-md-2">
                                                <div className="form-group">
                                                    <label style={{ margin: '0px' }} className="form-control-label">Nascimento</label>
                                                    <div className="input-group input-group-merge">
                                                        <input
                                                            onChange={HandleChangeFilters('birth')}
                                                            value={filters.birth}
                                                            className="form-control"
                                                            placeholder="00/00/00"
                                                            type="text"
                                                            style={{ textTransform: 'uppercase', height: '30px', padding: '0px 5px' }}
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-md-2">
                                                <div className="form-group">
                                                    <label style={{ margin: '0px' }} className="form-control-label">Prontuário MV</label>
                                                    <div className="input-group input-group-merge">
                                                        <input
                                                            onChange={HandleChangeFilters('prontuarioMV')}
                                                            value={filters.prontuarioMV}
                                                            className="form-control"
                                                            placeholder="Ex."
                                                            type="text"
                                                            style={{ textTransform: 'uppercase', height: '30px', padding: '0px 5px' }}
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-md-2">
                                                <div className="form-group">
                                                    <label style={{ margin: '0px' }} className="form-control-label">Prontuário SES</label>
                                                    <div className="input-group input-group-merge">
                                                        <input
                                                            onChange={HandleChangeFilters('prontuarioSES')}
                                                            value={filters.prontuarioSES}
                                                            className="form-control"
                                                            placeholder="Ex."
                                                            type="text"
                                                            style={{ textTransform: 'uppercase', height: '30px', padding: '0px 5px' }}
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                            <div style={{ marginLeft: 'auto' }} className="col-md-2">
                                                <button onClick={() => SubmitFilters()} className="btn btn-icon btn-primary btn-sm" type="button">
                                                    <span className="btn-inner--icon"><i className="fas fa-search"></i></span>
                                                    <span className="btn-inner--text">Filtrar</span>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                    :
                                    <></>
                                }

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