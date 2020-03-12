import React from 'react';

const Records = () => {
  return (
    <div className="card">
      <div className="card-header bg-transparent">
        <div className="BasicInformation-Header">
          {/* <img src={'/assets/img/figures/ImageProfileTimeline.svg'} alt="description" /> */}
          <div className="BasicInformation-TitleContainer">
            <h1 className="mb-0">Obsevarções</h1>
          </div>
        </div>
      </div>

      <div className="card-body">

        <div className="alert alert-warning alert-dismissible fade show" role="alert">
          <span className="alert-inner--text">O Atendimento  <strong>não possui</strong> observações.</span>
        </div>

      </div>
    </div>
  );
}

export default Records;