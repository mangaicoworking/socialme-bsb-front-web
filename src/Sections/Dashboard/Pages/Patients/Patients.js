import React, { useState, useEffect, useContext } from 'react';
import './Patients.css';
//import axios from 'axios';
//OWN COMPONENTS
import { Header } from './Components/Header';
import { TablePatients } from './Components/TablePatients';
import Pagination from './Components/Pagination';
import PaginationInformation from './Components/PaginationInformation';
//COMPONENTS
import { LoaderDefault } from './../../../../Components/Loader/LoaderDefault';
//CONTEXTS
import { AxiosContext } from './../../../../Contexts/AxiosContext';
//SERVICES
import { dataBrasileiraMask } from './../../../../Services/masks';

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
        birth: '',
        prontuarioMV: '',
        prontiarioSES: ''
    })
    const [filtersSubmit, setFiltersSubmit] = useState({
        name: '',
        motherName: '',
        cpf: '',
        cns: '',
        birth: '',
        prontuarioMV: '',
        prontiarioSES: ''
    })

    const SubmitFilters = () => {
        setGoAPI(true);
        if (filters.birth) {
            let brokenDate = filters.birth.split("/");
            setFiltersSubmit({
                name: filters.name,
                motherName: filters.motherName,
                cpf: filters.cpf,
                cns: filters.cns,
                birth: `${brokenDate[2]}-${brokenDate[1]}-${brokenDate[0]}`,
                prontuarioMV: filters.prontuarioMV,
                prontiarioSES: filters.prontiarioSES
            })
        } else {
            setFiltersSubmit({
                name: filters.name,
                motherName: filters.motherName,
                cpf: filters.cpf,
                cns: filters.cns,
                birth: filters.birth,
                prontuarioMV: filters.prontuarioMV,
                prontiarioSES: filters.prontiarioSES
            })
        }
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
                        birth: filtersSubmit.birth,
                        mv: filtersSubmit.prontuarioMV,
                        ses: filtersSubmit.prontiarioSES
                    }
                }
            }
            CallForSomeApi((params), (axiosResponse) => {
                console.log(axiosResponse);
                //console.log(axiosResponse.body.PeopleList.length);
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
    }, [CallForSomeApi, pagingParametersActions.limit, pagingParametersActions.currentPage, filtersSubmit.name, filtersSubmit.motherName, filtersSubmit.cpf, filtersSubmit.cns, filtersSubmit.birth, filtersSubmit.prontuarioMV, filtersSubmit.prontiarioSES, goAPI]);

    const HandleChangePagingParametersActions = name => event => {
        setPagingParametersActions({ ...pagingParametersActions, [name]: parseInt(event.target.value) });
    }
    const SetNewPage = (newPage) => {
        setPagingParametersActions({ ...pagingParametersActions, currentPage: newPage });
    }
    const HandleChangeFilters = name => event => {
        switch (name) {
            case 'birth':
                return setFilters({ ...filters, [name]: dataBrasileiraMask(event.target.value) });
            default:
                return setFilters({ ...filters, [name]: event.target.value });
        }
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
                if (people.length === 0) {
                    return (
                        <div className="row text-center" style={{ alignItems: 'center' }}>
                            <div className="col-md-12">
                                <p className="text-muted mb-0">Nenhum registro encontrado</p>
                            </div>
                        </div>
                    )
                } else {
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
                                    <TablePatients data={people ? people : ''} filtersSubmit={filtersSubmit} filters={filters} />
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
    }
    return (
        <>
            <Header />
            <div className="container-fluid mt--6">
                {/* row Table */}
                <div className="row">
                    <div className="col-md-12">
                        <div className="card">
                            <div style={{ paddingBottom: '0px' }} className="card-header border-0">
                                <div className="row align-items-center">
                                    <div className="col-lg-9">
                                        {/* 
                                        <h3 className="mb-0">Consultar Pacientes</h3>
                                        */}
                                    </div>
                                    <div className="col-lg-12">
                                        {goAPI ?
                                            <button onClick={() => ToogleFilters()} className="btn btn-icon btn-primary btn-sm" type="button">
                                                {openFilters ?
                                                    <span className="btn-inner--icon"><i className="fas fa-angle-up"></i></span>
                                                    :
                                                    <span className="btn-inner--icon"><i className="fas fa-angle-down"></i></span>
                                                }
                                                <span className="btn-inner--text">Filtros</span>
                                            </button>
                                            :
                                            <button className="btn btn-icon btn-primary btn-sm" type="button" disabled>
                                                <span className="btn-inner--icon"><i className="fas fa-angle-up"></i></span>
                                                <span className="btn-inner--text">Filtros</span>
                                            </button>
                                        }
                                    </div>
                                </div>
                            </div>{/* /card-header */}
                            <div style={{ paddingTop: '0px' }} className="card-body">
                                {openFilters ?
                                    <div className="PatientsPage-FiltersContainer">
                                        <div className="row">
                                            <div className="col-md-3">
                                                <div className="form-group">
                                                    <label style={{ margin: '0px' }} className="form-control-label">Nome Completo</label>
                                                    <div className="input-group input-group-merge">
                                                        <input
                                                            onChange={HandleChangeFilters('name')}
                                                            value={filters.name}
                                                            className="form-control"
                                                            placeholder=""
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
                                                            placeholder=""
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
                                                            placeholder=""
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
                                                            placeholder=""
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
                                                            placeholder=""
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
                                                            placeholder=""
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
                                                            placeholder=""
                                                            type="text"
                                                            style={{ textTransform: 'uppercase', height: '30px', padding: '0px 5px' }}
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                            <div style={{ display: 'flex', alignItems: 'center' }} className="col-md-8">
                                                <div style={{ display: 'flex', marginLeft: 'auto' }}>
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
                                                <div style={{ marginLeft: '20px' }}>
                                                    {
                                                        filters.name !== filtersSubmit.name ||
                                                            filters.motherName !== filtersSubmit.motherName ||
                                                            filters.cpf !== filtersSubmit.cpf ||
                                                            filters.cns !== filtersSubmit.cns ||
                                                            filters.birth !== filtersSubmit.birth ||
                                                            filters.prontuarioMV !== filtersSubmit.prontuarioMV ||
                                                            filters.prontiarioSES !== filtersSubmit.prontiarioSES ?

                                                            <button onClick={() => SubmitFilters()} className="btn btn-icon btn-primary btn-sm" type="button">
                                                                <span className="btn-inner--icon"><i className="fas fa-search"></i></span>
                                                                <span className="btn-inner--text">Filtrar</span>
                                                            </button>

                                                            :

                                                            <button className="btn btn-icon btn-primary btn-sm" type="button" disabled>
                                                                <span className="btn-inner--icon"><i className="fas fa-search"></i></span>
                                                                <span className="btn-inner--text">Filtrar</span>
                                                            </button>
                                                    }
                                                </div>
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