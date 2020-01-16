import React from 'react';
//LIBRARYS
import { Link } from 'react-router-dom';
import { format } from 'date-fns';
//SERVICES
import { cpfMaskContinuos  } from './../../../../../../Services/masks';

const Table1 = (props) => {
    const renderRandomImage = (item) => {
        let age;
        let sex;

        if(item.birth && item.birth.date){ age = new Date().getFullYear() - format(new Date(item.birth.date), 'yyyy');
        }else{age = null}

        if(item.sex){sex = item.sex
        }else{sex = null}
        
        if( age === null && sex === null){
            return('/assets/img/people/ambos.png')
        }else{
            if(sex === 'M'){
                if(age <= 12){
                    let random = Math.floor(Math.random() * 9) + 1;
                    return(`/assets/img/people/HomemCrianca/${random}.png`);
                } 
                if(age > 12 && age < 30){
                    let random = Math.floor(Math.random() * 3) + 1;
                    return(`/assets/img/people/HomemJovem/${random}.png`);
                }
                if(age >= 30 && age < 60){
                    let random = Math.floor(Math.random() * 5) + 1;
                    return(`/assets/img/people/HomemAdulto/${random}.png`);
                }
                if(age >= 60){
                    let random = Math.floor(Math.random() * 3) + 1;
                    return(`/assets/img/people/HomemIdoso/${random}.png`);
                }
            }else{
                if(age <= 12){
                    let random = Math.floor(Math.random() * 4) + 1;
                    return(`/assets/img/people/MulherCrianca/${random}.png`);
                } 
                if(age > 12 && age < 30){
                    let random = Math.floor(Math.random() * 11) + 1;
                    return(`/assets/img/people/MulherJovem/${random}.png`);
                }
                if(age >= 30 && age < 60){
                    let random = Math.floor(Math.random() * 12) + 1;
                    return(`/assets/img/people/MulherAdulto/${random}.png`);
                }
                if(age >= 60){
                    let random = Math.floor(Math.random() * 2) + 1;
                    return(`/assets/img/people/MulherIdoso/${random}.png`);
                }
            }
        }
    }
    return (
        <div className="table-responsive">
            <table className="table align-items-center table-flush table-striped">
                <thead className="thead-light">
                    <tr>
                        <th>Paciente</th>
                        <th>Nascimento</th>
                        <th>Ações</th>
                    </tr>
                </thead>
                <tbody>

                    {props.data.map((item, index) =>
                        <tr key={index}>
                            <td style={{ display: 'flex', alignItems: 'center' }} className="table-user">
                                <img src={renderRandomImage(item)} className="avatar rounded-circle mr-3" alt="des" />
                                <div style={{ display: 'grid' }}>
                                    <b>{item.name}</b>
                                    <span className="text-muted"> <strong>CPF: </strong> {item.mainDocument && item.mainDocument.number ? cpfMaskContinuos(item.mainDocument.number) : ''}</span>
                                </div>
                            </td>
                            <td>
                                <div style={{ display: 'grid' }}>
                                    <b>{item.birth && item.birth.date ? format(new Date(item.birth.date), 'MM/dd/yyyy') : ''}</b>
                                    <span className="text-muted"> {item.birth && item.birth.date ? `${new Date().getFullYear() - format(new Date(item.birth.date), 'yyyy')} anos`: ''}</span>
                                </div>
                            </td>
                            <td className="table-actions">
                                <Link to={`/paciente/${item._id}`} target="_blank" >
                                    <i className="far fa-eye"></i>
                                </Link>
                            </td>
                        </tr>
                    )}


                </tbody>
            </table>
        </div>
    );
}

export default Table1;