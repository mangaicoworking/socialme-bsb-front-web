import React from 'react';
import './Documents.css';

const Documents = (props) => {
    return (
        <div className="card">
            <div className="card-header bg-transparent">
                <div className="BasicInformation-Header">
                    <img src={'/assets/img/figures/ImageProfileDocuments.svg'} alt="description" />
                    <div className="BasicInformation-TitleContainer">
                        <h1 className="mb-0">Documentos</h1>
                        <span>Curabitur magna ante, vehicula quis dui vel, feugiat lacinia diam.</span>
                    </div>

                </div>
            </div>
            <div className="card-body PageDocuments">
                {/* CPF */}
                <div className="Documents-Row">
                    <div className="Documents-Row-ImageContainer">
                        <img src={'/assets/img/documents/cpf.png'} alt="Description" />
                    </div>
                    <div className="Documents-Row-InputsContainer">
                        <div className="row">
                            <div className="col-md-6">
                                <h3 className="heading mb-0 mb-2">CPF (Cadastro de Pessoas Físicas)</h3>
                            </div>
                            <div className="col-md-6">
                                <button type="button" className="btn btn-primary btn-sm" style={{ float: 'right' }}>Atualizar</button>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-3">
                                <div className="dropzone dropzone-multiple dz-clickable" data-toggle="dropzone" data-dropzone-multiple="" data-dropzone-url="http://">
                                    <ul className="dz-preview dz-preview-multiple list-group list-group-lg list-group-flush"></ul>
                                    <div style={{ paddingTop: '5px', paddingBottom: '5px' }} className="dz-default dz-message">
                                        <span>Solte seus arquivos aqui para enviar</span>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="form-group">
                                    <label className="form-control-label">Número do CPF</label>
                                    <input
                                        className={"form-control "}
                                        type={'text'}
                                        defaultValue={props.patient.mainDocument ? props.patient.mainDocument.number : ''}
                                        style={{ textTransform: 'uppercase' }}
                                        disabled={true}
                                    />
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="form-group">
                                    <label className="form-control-label">Data da Emissão</label>
                                    <input
                                        className={"form-control "}
                                        type={'text'}
                                        defaultValue={''}
                                        style={{ textTransform: 'uppercase' }}
                                        disabled={true}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                                {/* CNS */}
                                <div className="Documents-Row">
                    <div className="Documents-Row-ImageContainer">
                        <img src={'/assets/img/documents/cns.jpg'} alt="Description" />
                    </div>
                    <div className="Documents-Row-InputsContainer">
                    <div className="row">
                            <div className="col-md-6">
                                <h3 className="heading mb-0 mb-2">CNS (Cartão Nacional de Saúde)</h3>
                            </div>
                            <div className="col-md-6">
                                <button type="button" className="btn btn-primary btn-sm" style={{ float: 'right' }}>Atualizar</button>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-3">
                                <div className="dropzone dropzone-multiple dz-clickable" data-toggle="dropzone" data-dropzone-multiple="" data-dropzone-url="http://">
                                    <ul className="dz-preview dz-preview-multiple list-group list-group-lg list-group-flush"></ul>
                                    <div style={{ paddingTop: '5px', paddingBottom: '5px' }} className="dz-default dz-message">
                                        <span>Solte seus arquivos aqui para enviar</span>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-3">
                                <div className="form-group">
                                    <label className="form-control-label">Número do CNS</label>
                                    <input
                                        className={"form-control "}
                                        type={'text'}
                                        defaultValue={props.patient.documents && props.patient.documents[0] ? props.patient.documents[0].number : ''}
                                        style={{ textTransform: 'uppercase' }}
                                        disabled={true}
                                    />
                                </div>
                            </div>
                            <div className="col-md-3">
                                <div className="form-group">
                                    <label className="form-control-label">CD</label>
                                    <input
                                        className={"form-control "}
                                        type={'text'}
                                        defaultValue={props.patient.documents && props.patient.documents[0] && props.patient.documents[0].fields && props.patient.documents[0].fields[0] ? props.patient.documents[0].fields[0].number : ''}
                                        style={{ textTransform: 'uppercase' }}
                                        disabled={true}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* RG */}
                <div className="Documents-Row">
                    <div className="Documents-Row-ImageContainer">
                        <img src={'/assets/img/documents/rg.jpg'} alt="Description" />
                    </div>
                    <div className="Documents-Row-InputsContainer">
                        <div className="row">
                            <div className="col-md-6">
                                <h3 className="heading mb-0 mb-2">RG (Registro Geral)</h3>
                            </div>
                            <div className="col-md-6">
                                <button type="button" className="btn btn-primary btn-sm" style={{ float: 'right' }}>Atualizar</button>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-3">
                                <div className="dropzone dropzone-multiple dz-clickable" data-toggle="dropzone" data-dropzone-multiple="" data-dropzone-url="http://">
                                    <ul className="dz-preview dz-preview-multiple list-group list-group-lg list-group-flush"></ul>
                                    <div style={{ paddingTop: '5px', paddingBottom: '5px' }} className="dz-default dz-message">
                                        <span>Solte seus arquivos aqui para enviar</span>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-3">
                                <div className="form-group">
                                    <label className="form-control-label">Número do RG</label>
                                    <input
                                        className={"form-control "}
                                        type={'text'}
                                        defaultValue={props.patient.documents && props.patient.documents[1] ? props.patient.documents[1].number : ''}
                                        style={{ textTransform: 'uppercase' }}
                                        disabled={true}
                                    />
                                </div>
                            </div>
                            <div className="col-md-3">
                                <div className="form-group">
                                    <label className="form-control-label">Data da Expedição</label>
                                    <input
                                        className={"form-control "}
                                        type={'text'}
                                        defaultValue={''}
                                        style={{ textTransform: 'uppercase' }}
                                        disabled={true}
                                    />
                                </div>
                            </div>
                            <div className="col-md-3">
                                <div className="form-group">
                                    <label className="form-control-label">Órgão Emissor</label>
                                    <input
                                        className={"form-control "}
                                        type={'text'}
                                        defaultValue={''}
                                        style={{ textTransform: 'uppercase' }}
                                        disabled={true}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* PIS */}
                <div className="Documents-Row">
                    <div className="Documents-Row-ImageContainer">
                        <img src={'/assets/img/documents/tituloeleitoral.jpg'} alt="Description" />
                    </div>
                    <div className="Documents-Row-InputsContainer">
                        <div className="row">
                            <div className="col-md-6">
                                <h3 className="heading mb-0 mb-2">Título de eleitor</h3>
                            </div>
                            <div className="col-md-6">
                                <button type="button" className="btn btn-primary btn-sm" style={{ float: 'right' }}>Atualizar</button>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-3">
                                <div className="dropzone dropzone-multiple dz-clickable" data-toggle="dropzone" data-dropzone-multiple="" data-dropzone-url="http://">
                                    <ul className="dz-preview dz-preview-multiple list-group list-group-lg list-group-flush"></ul>
                                    <div style={{ paddingTop: '5px', paddingBottom: '5px' }} className="dz-default dz-message">
                                        <span>Solte seus arquivos aqui para enviar</span>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-3">
                                <div className="form-group">
                                    <label className="form-control-label">Número do Título</label>
                                    <input
                                        className={"form-control "}
                                        type={'text'}
                                        defaultValue={props.patient.documents && props.patient.documents[2] ? props.patient.documents[2].number : ''}
                                        style={{ textTransform: 'uppercase' }}
                                        disabled={true}
                                    />
                                </div>
                            </div>
                            <div className="col-md-3">
                                <div className="form-group">
                                    <label className="form-control-label">Zona</label>
                                    <input
                                        className={"form-control "}
                                        type={'text'}
                                        defaultValue={props.patient.documents && props.patient.documents[2] && props.patient.documents[2].fields && props.patient.documents[2].fields[0] ? props.patient.documents[2].fields[0].number : ''}
                                        style={{ textTransform: 'uppercase' }}
                                        disabled={true}
                                    />
                                </div>
                            </div>
                            <div className="col-md-3">
                                <div className="form-group">
                                    <label className="form-control-label">Seção</label>
                                    <input
                                        className={"form-control "}
                                        type={'text'}
                                        defaultValue={props.patient.documents && props.patient.documents[2] && props.patient.documents[2].fields && props.patient.documents[2].fields[1] ? props.patient.documents[2].fields[1].number : ''}
                                        style={{ textTransform: 'uppercase' }}
                                        disabled={true}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>{/* /card-body */}
        </div>
    );
}

export default Documents;