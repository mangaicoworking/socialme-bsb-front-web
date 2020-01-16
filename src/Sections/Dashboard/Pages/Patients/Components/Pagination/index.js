import React from 'react';

const Pagination = (props) => {
    return (
        <ul className="pagination justify-content-end mb-0">

            {props.parameters.hasPrevPage ?
                <li className={"page-item"}>
                    <button style={{ margin: '0px 3px' }} onClick={() => props.SetNewPage(props.parameters.prevPage)} type="button" className="btn btn-icon-only btn-secondary rounded-circle">
                        <i style={{ margin: '0px' }} className="fas fa-angle-left"></i>
                        <span className="sr-only">Anterior</span>
                    </button>
                </li>
                :
                <li className={"page-item disabled"}>
                    <button style={{ margin: '0px 3px', cursor: 'not-allowed' }} onClick={() => props.SetNewPage(props.parameters.prevPage)} type="button" className="btn btn-icon-only btn-secondary rounded-circle">
                        <i style={{ margin: '0px' }} className="fas fa-angle-left"></i>
                        <span className="sr-only">Anterior</span>
                    </button>
                </li>
            }


            {props.parameters.hasPrevPage ?
                props.parameters.hasNextPage ?
                    /* NÃO É A 1ª E NEM A ÚLTIMA */
                    <>

                        {props.parameters.currentPage - 1 < 1 ?
                            <></>
                            :
                            <li className="page-item">
                                <button style={{ margin: '0px 3px' }} onClick={() => props.SetNewPage(props.parameters.currentPage - 1)} type="button" className="btn btn-icon-only btn-secondary rounded-circle">
                                    {props.parameters.currentPage - 1}
                                </button>
                            </li>
                        }

                        <li className="page-item">
                            <button style={{ backgroundColor: 'var(--primary)', color: 'var(--white)', margin: '0px 3px' }} onClick={() => props.SetNewPage(props.parameters.currentPage)} type="button" className="btn btn-icon-only rounded-circle">
                                {props.parameters.currentPage}
                            </button>
                        </li>

                        {props.parameters.currentPage === props.parameters.totalPages ?
                            <></>
                            :
                            <li className="page-item">
                                <button style={{ margin: '0px 3px' }} onClick={() => props.SetNewPage(props.parameters.currentPage + 1)} type="button" className="btn btn-icon-only btn-secondary rounded-circle">
                                    {props.parameters.currentPage + 1}
                                </button>
                            </li>
                        }


                    </>
                    :
                    /* LAST PAGE */
                    <>
                        {props.parameters.currentPage - 2 < 1 ?
                            <></>
                            :
                            <li className="page-item">
                                <button style={{ margin: '0px 3px' }} onClick={() => props.SetNewPage(props.parameters.currentPage - 2)} type="button" className="btn btn-icon-only btn-secondary rounded-circle">
                                    {props.parameters.currentPage - 2}
                                </button>
                            </li>
                        }

                        {props.parameters.currentPage - 1 < 1 ?
                            <></>
                            :
                            <li className="page-item">
                                <button style={{ margin: '0px 3px' }} onClick={() => props.SetNewPage(props.parameters.currentPage - 1)} type="button" className="btn btn-icon-only btn-secondary rounded-circle">
                                    {props.parameters.currentPage - 1}
                                </button>
                            </li>
                        }

                        <li className="page-item">
                            <button style={{ backgroundColor: 'var(--primary)', color: 'var(--white)', margin: '0px 3px' }} onClick={() => props.SetNewPage(props.parameters.currentPage)} type="button" className="btn btn-icon-only rounded-circle">
                                {props.parameters.currentPage}
                            </button>
                        </li>
                    </>
                :
                /* FIRST PAGE */
                <>
                    <li className="page-item">
                        <button style={{ backgroundColor: 'var(--primary)', color: 'var(--white)', margin: '0px 3px' }} onClick={() => props.SetNewPage(props.parameters.currentPage)} type="button" className="btn btn-icon-only rounded-circle">
                            {props.parameters.currentPage}
                        </button>
                    </li>

                    {props.parameters.currentPage + 1 <= props.parameters.totalPages ?
                        <li className="page-item">
                            <button style={{ margin: '0px 3px' }} onClick={() => props.SetNewPage(props.parameters.currentPage + 1)} type="button" className="btn btn-icon-only btn-secondary rounded-circle">
                                {props.parameters.currentPage + 1}
                            </button>
                        </li>
                        :
                        <></>
                    }

                    {props.parameters.currentPage + 2 < props.parameters.totalPages ?
                        <li className="page-item">
                            <button style={{ margin: '0px 3px' }} onClick={() => props.SetNewPage(props.parameters.currentPage + 2)} type="button" className="btn btn-icon-only btn-secondary rounded-circle">
                                {props.parameters.currentPage + 2}
                            </button>
                        </li>
                        :
                        <></>
                    }

                </>
            }


            {props.parameters.hasNextPage ?
                <li className={"page-item"}>
                    <button style={{ margin: '0px 3px' }} onClick={() => props.SetNewPage(props.parameters.nextPage)} type="button" className="btn btn-icon-only btn-secondary rounded-circle">
                        <i style={{ margin: '0px' }} className="fas fa-angle-right"></i>
                        <span className="sr-only">Próxima</span>
                    </button>
                </li>
                :
                <li className={"page-item disabled"}>
                    <button style={{ margin: '0px 3px', cursor: 'not-allowed' }} onClick={() => props.SetNewPage(props.parameters.prevPage)} type="button" className="btn btn-icon-only btn-secondary rounded-circle">
                        <i style={{ margin: '0px' }} className="fas fa-angle-right"></i>
                        <span className="sr-only">Próxima</span>
                    </button>
                </li>
            }

        </ul>
    );
}

export default Pagination;