import React from 'react';
//OWN COMPONENTS
import Table1 from './Components/Table1';
import Table2 from './Components/Table2';
import Table3 from './Components/Table3';
import Table4 from './Components/Table4';

const Records = (props) => {
  return (
    <div className="card">
      <div className="card-header bg-transparent">
        <div className="BasicInformation-Header">
        {/* <img src={'/assets/img/figures/ImageProfileTimeline.svg'} alt="description" /> */}
          <div className="BasicInformation-TitleContainer">
            <h1 className="mb-0">Registros</h1>
          </div>
        </div>
      </div>

      <div className="card-body">

        <div className="row">
          <div className="col-md-2"></div>
          <div className="col-md-3">
            <Table1 patient={props.patient} />
          </div>
          <div className="col-md-2"></div>
          <div className="col-md-3">
            <Table2 patient={props.patient} />
          </div>
        </div>

        <div className="row">
          <div className="col-md-5">
            <Table3 patient={props.patient} />
          </div>
          <div className="col-md-7">
            <Table4 />
          </div>
        </div>

      </div>
    </div>
  );
}

export default Records;