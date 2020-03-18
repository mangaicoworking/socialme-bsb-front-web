import React from 'react';
//LIBRARYS
import { Link } from 'react-router-dom';
import { format, addDays } from 'date-fns';
import Highlighter from "react-highlight-words";
//SERVICES
//import { cpfMaskContinuos } from './../../../../../../Services/masks';

const TablePatients = (props) => {
    const renderRandomImage = (item) => {
        let age;
        let sex;

        if (item.birth && item.birth.date) {
            age = new Date().getFullYear() - format(new Date(item.birth.date), 'yyyy');
        } else { age = null }

        if (item.sex) {
            sex = item.sex
        } else { sex = null }

        if (age === null && sex === null) {
            return ('/assets/img/people/ambos.png')
        } else {
            if (sex === 'M') {
                if (age <= 12) {
                    //let random = Math.floor(Math.random() * 9) + 1;
                    let random = Math.floor(Math.random() * 1) + 1;
                    return (`/assets/img/people/HomemCrianca/${random}.png`);
                }
                if (age > 12 && age < 30) {
                    //let random = Math.floor(Math.random() * 3) + 1;
                    let random = Math.floor(Math.random() * 1) + 1;
                    return (`/assets/img/people/HomemJovem/${random}.png`);
                }
                if (age >= 30 && age < 60) {
                    //let random = Math.floor(Math.random() * 5) + 1;
                    let random = Math.floor(Math.random() * 1) + 1;
                    return (`/assets/img/people/HomemAdulto/${random}.png`);
                }
                if (age >= 60) {
                    //let random = Math.floor(Math.random() * 3) + 1;
                    let random = Math.floor(Math.random() * 1) + 1;
                    return (`/assets/img/people/HomemIdoso/${random}.png`);
                }
            } else {
                if (age <= 12) {
                    //let random = Math.floor(Math.random() * 4) + 1;
                    let random = Math.floor(Math.random() * 1) + 1;
                    return (`/assets/img/people/MulherCrianca/${random}.png`);
                }
                if (age > 12 && age < 30) {
                    //let random = Math.floor(Math.random() * 11) + 1;
                    let random = Math.floor(Math.random() * 1) + 1;
                    return (`/assets/img/people/MulherJovem/${random}.png`);
                }
                if (age >= 30 && age < 60) {
                    //let random = Math.floor(Math.random() * 12) + 1;
                    let random = Math.floor(Math.random() * 1) + 1;
                    return (`/assets/img/people/MulherAdulto/${random}.png`);
                }
                if (age >= 60) {
                    //let random = Math.floor(Math.random() * 2) + 1;
                    let random = Math.floor(Math.random() * 1) + 1;
                    return (`/assets/img/people/MulherIdoso/${random}.png`);
                }
            }
        }
    }
    return (
        <>
            <div className="table-responsive">
                <table className="table align-items-center table-flush table-striped">
                    <thead className="thead-light">
                        <tr style={{ textAlign: 'center' }}>
                            <th>Paciente</th>
                            <th>Documentos</th>
                            <th>Nascimento</th>
                            <th>Relações</th>
                            <th>Ações</th>
                        </tr>
                    </thead>
                    <tbody>

                        {props.data.map((item, index) =>
                            <tr key={index}>
                                <td style={{ display: 'flex', alignItems: 'center', padding: '10px' }} className="table-user">
                                    <img src={renderRandomImage(item)} className="avatar rounded-circle mr-3" alt="des" />
                                    <div style={{ display: 'grid' }}>
                                        {item.name ?
                                            <b>
                                                <Highlighter
                                                    highlightClassName="HighlightSocialMe"
                                                    searchWords={[props.filtersSubmit.name]}
                                                    textToHighlight={item.name}
                                                />
                                                {item.sex ?
                                                    item.sex === 'M' ?
                                                        <img style={{ width: 'auto', height: '15px', marginLeft: '5px' }} src="/assets/img/icons/common/male.png" alt="Male" />
                                                        :
                                                        <img style={{ width: 'auto', height: '15px', marginLeft: '5px' }} src="/assets/img/icons/common/female.png" alt="female" />
                                                    :
                                                    <></>
                                                }
                                            </b>
                                            :
                                            <b>Nome não informado</b>
                                        }
                                        <span className="text-muted">
                                            <strong>IDPC: </strong>

                                            <Highlighter
                                                highlightClassName="HighlightSocialMe"
                                                searchWords={[props.filtersSubmit.prontuarioMV]}
                                                textToHighlight={item.idpc}
                                            />
                                        </span>
                                        {item.mother && item.mother.name ?
                                            <b>
                                                <strong>MÃE: </strong>
                                                <Highlighter
                                                    highlightClassName="HighlightSocialMe"
                                                    searchWords={[props.filtersSubmit.motherName]}
                                                    textToHighlight={item.mother.name}
                                                />
                                            </b>
                                            :
                                            <b>Nome da mãe não informado</b>
                                        }
                                    </div>
                                </td>
                                <td style={{ padding: '10px' }}>
                                    <div style={{ display: 'grid' }}>

                                        <span className="text-muted">
                                            <strong>CPF: </strong>
                                            <Highlighter
                                                highlightClassName="HighlightSocialMe"
                                                searchWords={[props.filtersSubmit.CPF]}
                                                textToHighlight={item.document.cpf.number ? item.document.cpf.number : 'CPF não informado'}
                                            />
                                        </span>

                                        <span className="text-muted">
                                            <strong>CNS: </strong>
                                            <Highlighter
                                                highlightClassName="HighlightSocialMe"
                                                searchWords={[props.filtersSubmit.CNS]}
                                                textToHighlight={item.document.cns.number ? item.document.cns.number : 'CNS não informado'}
                                            />
                                        </span>

                                    </div>
                                </td>
                                <td style={{ padding: '10px', textAlign: 'center' }}>
                                    <div style={{ display: 'grid' }}>
                                        {item.birth && item.birth.date ?
                                            <b>
                                                <Highlighter
                                                    highlightClassName="HighlightSocialMe"
                                                    searchWords={[`${props.filtersSubmit.birth.split("-")[2]}/${props.filtersSubmit.birth.split("-")[1]}/${props.filtersSubmit.birth.split("-")[0]}`]}
                                                    textToHighlight={format(addDays(new Date(item.birth.date), 1), 'dd/MM/yyyy')}
                                                />
                                            </b>

                                            :
                                            'Nascimento não informado'
                                        }
                                        <span className="text-muted"> {item.birth && item.birth.date ? `${new Date().getFullYear() - format(new Date(item.birth.date), 'yyyy')} anos` : 'Nascimento não informado'}</span>
                                    </div>
                                </td>
                                <td style={{ padding: '10px' }}>
                                    <div style={{ display: 'grid' }}>

                                        {item.ids.map((origin, index) => (
                                            index > 2 ?
                                                <></>
                                                :
                                                index === 2 ?
                                                    <span key={index} className="text-muted text-center">
                                                        <Link to="#">
                                                            <span className="text-muted">+ {item.ids.length - 2} {item.ids.length - 2 === 1 ? 'relação' : 'relações'}</span>
                                                        </Link>
                                                    </span>
                                                    :
                                                    <span key={index} className="text-muted text-center">
                                                        <strong>{origin.system}: </strong>
                                                        <Highlighter
                                                            highlightClassName="HighlightSocialMe"
                                                            searchWords={[props.filtersSubmit.prontuarioMV]}
                                                            textToHighlight={origin.id}
                                                        />
                                                    </span>
                                        ))}

                                    </div>
                                </td>
                                <td style={{ padding: '10px', textAlign: 'center' }} className="table-actions">

                                    <Link to={`/paciente/${item._id}`} target="_blank" >
                                        <button className="btn btn-icon btn-primary btn-sm" type="button">
                                            <span className="btn-inner--icon"><i className="far fa-eye"></i></span>
                                            <span className="btn-inner--text">Visualizar</span>
                                        </button>
                                    </Link>
                                </td>
                            </tr>
                        )}

                    </tbody>
                </table>
            </div>
        </>
    );
}

export default TablePatients;