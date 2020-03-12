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

                    <div className="col-md-4">
                        <div className="nav-wrapper">
                            <ul className="nav nav-pills nav-pills-primary flex-column" role="tablist">

                                {props.TabItems.map((item, index) => (
                                    <li key={index} className="nav-item p-0 text-center" onClick={() => props.ToggleActiveTab(item.tabName)}>
                                        <a className={"nav-link " + (item.tabName === props.activeTab ? 'MedicalRecord-Card-ActiveTab' : '')} data-toggle="tab" href={`#${item.tabName}`} role="tablist">
                                            <span className="MedicalRecord-Card-BadgeContainer badge badge-primary">{item.notification}</span>
                                            {item.title}
                                        </a>
                                    </li>

                                ))}

                            </ul>
                        </div>
                    </div>

                    <div className="col-md-8">
                        <div className="tab-content tab-space">

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