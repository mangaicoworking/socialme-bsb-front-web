import React from 'react';

const Location = () => {
  return (
    <div className="card">
      <div className="card-header bg-transparent">
        <div className="BasicInformation-Header">
          {/* <img src={'/assets/img/figures/ImageProfileTimeline.svg'} alt="description" /> */}
          <div className="BasicInformation-TitleContainer">
            <h1 className="mb-0">Localizações</h1>
          </div>
        </div>
      </div>

      <div className="card-body">

        <div className="row">

          <div className="col-md-4">
            <div className="card MedicalRecord-CardSimple-1">
              <div className="card-header">
                <div style={{ display: 'flex', alignContent: 'center', alignItems: 'center' }}>
                  <p style={{ margin: '0px' }}><strong>Prédio: </strong> 16266</p>
                </div>
              </div>
              <div className="card-body">
                <div style={{ display: 'flex', alignContent: 'center', alignItems: 'center' }}>
                  <i style={{ color: 'var(--success)' }} className="fas fa-sign-in-alt fa-fw"></i>
                  <p><strong>Entrou: </strong> 10/10/2019</p>
                </div>
                <div style={{ display: 'flex', alignContent: 'center', alignItems: 'center' }}>
                  <i style={{ color: 'var(--danger)' }} className="fas fa-sign-out-alt fa-fw fa-rotate-180"></i>
                  <p><strong>Saiu: </strong> 16/10/2019</p>
                </div>
                <div style={{ display: 'flex', alignContent: 'center', alignItems: 'center' }}>
                  <i className="fas fa-exchange-alt fa-fw"></i>
                  <p>Não houve transferência</p>
                </div>
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <div className="card MedicalRecord-CardSimple-1">
              <div className="card-header">
                <div style={{ display: 'flex', alignContent: 'center', alignItems: 'center' }}>
                  <p style={{ margin: '0px' }}><strong>Prédio: </strong> 19177</p>
                </div>
              </div>
              <div className="card-body">
                <div style={{ display: 'flex', alignContent: 'center', alignItems: 'center' }}>
                  <i style={{ color: 'var(--success)' }} className="fas fa-sign-in-alt fa-fw"></i>
                  <p><strong>Entrou: </strong> 05/10/2019</p>
                </div>
                <div style={{ display: 'flex', alignContent: 'center', alignItems: 'center' }}>
                  <i style={{ color: 'var(--danger)' }} className="fas fa-sign-out-alt fa-fw fa-rotate-180"></i>
                  <p><strong>Saiu: </strong> 10/10/2019</p>
                </div>
                <div style={{ display: 'flex', alignContent: 'center', alignItems: 'center' }}>
                  <i className="fas fa-exchange-alt fa-fw"></i>
                  <p><strong>Transferência: </strong> 10/10/2019</p>
                </div>
              </div>
            </div>
          </div>

        </div>



      </div>
    </div>
  );
}

export default Location;