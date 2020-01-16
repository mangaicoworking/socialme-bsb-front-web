import React from 'react';

const PaginationInformation = (props) => {
    return ( 
        <div style={{ display: 'flex' }}>
            <small>
                Mostrando
                    {props.parameters.hasNextPage ?
                        ` ${props.parameters.pagingCounter} ao ${props.parameters.pagingCounter + props.parameters.limit -1} de um total de ${props.parameters.totalDocs} registros`
                    :
                        ` ${props.parameters.pagingCounter} ao ${props.parameters.totalDocs} de um total de ${props.parameters.totalDocs} registros`
                    }
            </small>
        </div>
    );
}
 
export default PaginationInformation;