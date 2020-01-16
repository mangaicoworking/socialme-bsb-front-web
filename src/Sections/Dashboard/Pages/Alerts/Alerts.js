import React from 'react';
//OWN COMPONENTS
import { Header } from './Components/Header';
import Table1 from './Components/Table1';
import Table2 from './Components/Table2';
import Table3 from './Components/Table3';
import Table4 from './Components/Table4';

const BrasiliaManagerDashboardAlerts = () => {
    return ( 
        <>
            <Header />
            <div className="container-fluid mt--6">
                {/* row Table */}
                <div className="row">
                    <div className="col-md-12">
                        <div className="card">
                            <div className="card-header border-0">

                            </div>{/* /card-header */}
                            <div className="card-body">
                                
                                <div className="row">
                                    <div className="col-md-2"></div>
                                    <div className="col-md-3">
                                        <Table1 />
                                    </div>
                                    <div className="col-md-2"></div>
                                    <div className="col-md-3">
                                        <Table2 />
                                    </div>
                                </div>

                                <div className="row">
                                    <div className="col-md-5">
                                        <Table3 />
                                    </div>
                                    <div className="col-md-7">
                                        <Table4 />
                                    </div>
                                </div>
                                
                                
                                
                            </div>{/* /card-body */}
                        </div>
                    </div>
                </div>{/* /row Table */}
        </div> {/* /container-fluid */}
        </>
     );
}
 
export default BrasiliaManagerDashboardAlerts;