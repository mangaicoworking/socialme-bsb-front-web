import React from 'react';

const Adresses = (props) => {
  return (
    <>
      <div className="card">
        <div className="card-header bg-transparent">
          <div className="BasicInformation-Header">
            {/* <img src={'/assets/img/figures/ImageProfileAdresses.svg'} alt="description" /> */}
            <div className="BasicInformation-TitleContainer">
              <h1 className="mb-0">Informações Adicionais</h1>
            </div>
          </div>
        </div>
        <div className="card-body">

          <div className="alert alert-warning alert-dismissible fade show" role="alert">
            <span className="alert-inner--text">O Atendimento  <strong>não possui</strong> informações adicionais.</span>
          </div>

        </div> {/* /card-body */}
      </div>
    </>
  );
}

export default Adresses;