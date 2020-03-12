import React, { useState } from 'react';
import './BasicInformation.css';
//LIBRARYS
import { format, addDays } from 'date-fns'
//OWN COMPONENTS
//import { InputText } from './Components/InputText';
//import { Select } from './Components/Select';

const BasicInformationView = (props) => {
    const [edit] = useState(false);
    /* 
    const ToogleEdit = () => {
        setEdit(!edit);
    }
    */
    return (
        <div className="card Profile-BasicInformation-Card">
            <div className="card-header bg-transparent">
                <div className="BasicInformation-Header">
                    {/* <img src={'/assets/img/figures/ImageProfileData.svg'} alt="description" /> */}
                    <div className="BasicInformation-TitleContainer">
                        <h1 className="mb-0">Informações Básicas</h1>
                    </div>
                </div>
            </div>
            <div className="card-body">

                <div className="row">
                    <div className="col-md-4">
                        <div className="form-group">
                            <label className="form-control-label">Nome Completo</label>
                            <div className="input-group input-group-merge">
                                <input
                                    className={"form-control "}
                                    type={'text'}
                                    defaultValue={props.patient.name ? props.patient.name : ''}
                                    style={{ textTransform: 'uppercase' }}
                                    disabled={edit ? false : true}
                                />
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="form-group">
                            <label className="form-control-label">Nome da Mãe</label>
                            <div className="input-group input-group-merge">
                                <input
                                    className={"form-control "}
                                    type={'text'}
                                    defaultValue={props.patient.mother && props.patient.mother.name ? props.patient.mother.name : ''}
                                    style={{ textTransform: 'uppercase' }}
                                    disabled={edit ? false : true}
                                />
                            </div>

                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="form-group">
                            <label className="form-control-label">Nome do Pai</label>
                            <div className="input-group input-group-merge">
                                <input
                                    className={"form-control "}
                                    type={'text'}
                                    defaultValue={props.patient.father && props.patient.father.name ? props.patient.father.name : ''}
                                    style={{ textTransform: 'uppercase' }}
                                    disabled={edit ? false : true}
                                />
                            </div>

                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-3">
                        <div className="form-group">
                            <label className="form-control-label">Sexo</label>
                            <input
                                className={"form-control "}
                                type={'text'}
                                defaultValue={props.patient.sex ? props.patient.sex === 'M' ? 'MASCULINO' : 'FEMININO' : ''}
                                style={{ textTransform: 'uppercase' }}
                                disabled={edit ? false : true}
                            />
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="form-group">
                            <label className="form-control-label">Estado Civil</label>
                            <input
                                className={"form-control "}
                                type={'text'}
                                defaultValue={
                                    props.patient.civilState ?
                                        props.patient.civilState === 'S' ?
                                            'SOLTEIRO(A)'
                                            :
                                            'OUTRO'
                                        :
                                        ''}
                                style={{ textTransform: 'uppercase' }}
                                disabled={edit ? false : true}
                            />
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="form-group">
                            <label className="form-control-label">Escolaridade</label>
                            <input
                                className={"form-control "}
                                type={'text'}
                                defaultValue={
                                    props.patient.schooling ?
                                        props.patient.schooling
                                        :
                                        ''}
                                style={{ textTransform: 'uppercase' }}
                                disabled={edit ? false : true}
                            />
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="form-group">
                            <label className="form-control-label">Profissão</label>
                            <input
                                className={"form-control "}
                                type={'text'}
                                defaultValue={
                                    props.patient.profession ?
                                        props.patient.profession
                                        :
                                        ''}
                                style={{ textTransform: 'uppercase' }}
                                disabled={edit ? false : true}
                            />
                        </div>
                    </div>
                </div>

                <hr style={{ marginTop: '1rem', marginBottom: '1rem' }} />
                <div className="row">
                    <div className="col-md-12">
                        <h4 className="mb-1">Nascimento</h4>
                    </div>
                </div>

                <div className="row">
                    <div className="col-md-2">
                        <div className="form-group">
                            <label className="form-control-label">Data</label>
                            <input
                                className={"form-control "}
                                type={'text'}
                                defaultValue={
                                    props.patient.birth && props.patient.birth.date ?
                                        format(addDays(new Date(props.patient.birth.date), 1), 'dd/MM/yyyy')
                                        
                                        :
                                        ''}
                                style={{ textTransform: 'uppercase' }}
                                disabled={edit ? false : true}
                            />
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="form-group">
                            <label className="form-control-label">País</label>
                            <input
                                className={"form-control "}
                                type={'text'}
                                defaultValue={
                                    props.patient.birth && props.patient.birth.country ?
                                        props.patient.birth.country
                                        :
                                        ''}
                                style={{ textTransform: 'uppercase' }}
                                disabled={edit ? false : true}
                            />
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="form-group">
                            <label className="form-control-label">Estado</label>
                            <input
                                className={"form-control "}
                                type={'text'}
                                defaultValue={
                                    props.patient.birth && props.patient.birth.state ?
                                        props.patient.birth.state
                                        :
                                        ''}
                                style={{ textTransform: 'uppercase' }}
                                disabled={edit ? false : true}
                            />
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="form-group">
                            <label className="form-control-label">Cidade</label>
                            <input
                                className={"form-control "}
                                type={'text'}
                                defaultValue={
                                    props.patient.birth && props.patient.birth.city ?
                                        props.patient.birth.city
                                        :
                                        ''}
                                style={{ textTransform: 'uppercase' }}
                                disabled={edit ? false : true}
                            />
                        </div>
                    </div>
                </div>

                <hr style={{ marginTop: '1rem', marginBottom: '1rem' }} />
                <div className="row">
                    <div className="col-md-12">
                        <h4 className="mb-1">Contato</h4>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-3">
                        <div className="form-group">
                            <label className="form-control-label">Email</label>
                            <input
                                className={"form-control "}
                                type={'text'}
                                defaultValue={
                                    props.patient.email ?
                                        props.patient.email
                                        :
                                        ''}
                                style={{ textTransform: 'uppercase' }}
                                disabled={edit ? false : true}
                            />
                        </div>
                    </div>
                    {props.patient.phones.map((phone, index) => (
                        <div key={index} className="col-md-3">
                            <div className="form-group">
                                <label className="form-control-label">{phone.description}</label>
                                <input
                                    className={"form-control "}
                                    type={'text'}
                                    defaultValue={
                                        phone.number ?
                                            phone.number
                                            :
                                            ''}
                                    style={{ textTransform: 'uppercase' }}
                                    disabled={edit ? false : true}
                                />
                            </div>
                        </div>
                    ))}
                </div>

                <br />
                <div className="row">
                    {/* 
                    <div className="col-md-12">
                        <button onClick={() => ToogleEdit()} type="button" className="btn btn-primary btn-sm">
                            {edit ?
                                'Cancelar Edição'
                            :
                                'Editar'
                            }
                        </button>
                    </div>
                    */}
                </div>

            </div>
        </div>
    );
}

export default BasicInformationView;