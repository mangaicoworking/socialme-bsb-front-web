import React from 'react';
//import { Link } from 'react-router-dom';
//COMPONENTS

const Adresses = (props) => {
  return (
    <>
      <div className="card">
        <div className="card-header bg-transparent">
          <div className="BasicInformation-Header">
            <img src={'/assets/img/figures/ImageProfileAdresses.svg'} alt="description" />
            <div className="BasicInformation-TitleContainer">
              <h1 className="mb-0">Endereços</h1>
            </div>
          </div>
        </div>
        <div className="card-body">

          <div className="table-responsive">
            <table className="table align-items-center table-flush">
              <thead className="thead-light">
                <tr>
                  <th>Descrição</th>
                  <th>Endereço</th>
                  <th>País</th>
                  <th></th>
                </tr>
              </thead>
              <tbody className="list">

                {props.patient.addresses.map((adress, index) => (

                  <tr key={index}>
                    <th scope="row">
                      <div className="media align-items-center">
                        <a className="avatar rounded-circle mr-3" href="/me/perfil" style={{ background: 'none' }}>
                          <img alt="Implaceholder" src="/assets/img/icons/pin.png" />
                        </a>
                        <div className="media-body" style={{ display: 'grid' }}>
                          <span className="name mb-0 text-sm">{`#${index}`}</span>
                        </div>
                      </div>
                    </th>
                    <td>{adress.street}</td>
                    <td>{adress.country}</td>
                    <td className="table-actions">
                      <a href="#!" className="table-action" data-toggle="tooltip" data-original-title="Edit product">
                        <i className="fas fa-eye" aria-hidden="true"></i>
                      </a>
                      <a href="#!" className="table-action" data-toggle="tooltip" data-original-title="Edit product">
                        <i className="fas fa-edit" aria-hidden="true"></i>
                      </a>
                      <a href="#!" className="table-action table-action-delete" data-toggle="tooltip" data-original-title="Delete product">
                        <i className="fas fa-trash" aria-hidden="true"></i>
                      </a>
                    </td>
                  </tr>

                ))}

              </tbody>
            </table>
          </div>

        </div> {/* /card-body */}
      </div>
    </>
  );
}

export default Adresses;