import React from 'react';
import './MedicalRecord.css';

const MedicalRecordView = (props) => {
    return (
        <div className="card MedicalRecord-Card">
            <div className="card-header bg-transparent">
                <div className="BasicInformation-Header">
                    {/* <img src={'/assets/img/figures/ImageProfileTimeline.svg'} alt="description" /> */}
                    <div className="BasicInformation-TitleContainer">
                        <h1 className="mb-0">Prontuário Médico</h1>
                    </div>
                </div>
            </div>

            <div className="card-body">

                <div className="row">
                    <div className="col-md-12">

                        <div className="nav-wrapper">
                            <ul className="nav nav-pills flex-column flex-md-row" id="tabs-icons-text" role="tablist">

                                {props.TabItems.map((item, index) => (
                                    <li key={index} className="nav-item" onClick={() => props.ToggleActiveTab(item.tabName)}>
                                        <a className={"nav-link mb-sm-3 mb-md-0 " + (item.tabName === props.activeTab ? 'btn-primary' : 'btn-secondary')} data-toggle="tab" href={`#${item.tabName}`} role="tab" aria-controls="tabs-icons-text-1" aria-selected="true">
                                            <i className={`ni ${item.icon} mr-2`}></i>
                                            {item.title}
                                            <div className="MedicalRecord-Card-BadgeContainer">
                                                <span>{item.notification}</span>
                                            </div>
                                        </a>
                                    </li>
                                ))}

                            </ul>
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="col-md-12">

                        <div style={{ padding: '15px' }} className="tab-content tab-space">

                            {props.TabItems.map((item, index) => (
                                <div key={index}
                                    className={"tab-pane fade " + (item.tabName === props.activeTab ? 'active show' : '')}
                                    id={item.tabName}>
                                    {item.component}
                                </div>
                            ))}

                        </div>

                    </div>
                </div>

            </div>
        </div>
    );
}

export default MedicalRecordView;