import React from 'react';
import './LoaderDefault.css';

const LoaderDefault = (props) => {
    const renderLoader = () => {
        switch(props.type){
            case 'Simple-1':
            default:
                return(
                    <div className="circonf circonf-1"
                    style={{ 
                        margin: `${props.margin ? props.margin : '30px'}`,
                        border: `${props.border ? props.border : '4px solid silver'}`,
                        width: `${props.width ? props.width : '2em'}`,
                        height: `${props.height ? props.height : '2em'}`,
                        borderBottomColor: `${props.borderBottomColor ? props.borderBottomColor : 'var(--gray)'}`,
                    }}
                    ></div> 
                )
            case 'Simple-2':
                return(
                    <div className="circonf circonf-2"></div>
                )
            case 'Simple-3':
                return(
                    <div className="circonf circonf-3"></div>
                )
            case 'Simple-4':
                return(
                    <div className="circonf circonf-4"></div>
                )
            case 'Simple-5':
                return(
                    <div className="circonf circonf-5"></div>
                )
            case 'Simple-6':
                return(
                    <div className="circonf circonf-6"></div>
                )
            case 'Spinner-1':
                return(
                    <div className="item loading-1">
                        <svg xmlns="http://www.w3.org/2000/svg" width="1.2em" height="1.2em">
                            <circle cx="0.6em" cy="0.6em" r="0.5em" className="circle"/>
                        </svg>
                        <div>.loading-1</div>
                    </div>
                )
            case 'Spinner-2':
                return(
                    <div className="item loading-2">
                        <div className="spinner">
                            <div className="circle circle-1">
                                <div className="circle-inner"></div>
                            </div>
                            <div className="circle circle-2">
                                <div className="circle-inner"></div>
                            </div>
                        </div>
                        <div>.loading-2<br/> CSS only
                        </div>
                    </div>
                )
            case 'Spinner-3':
                return(
                    <div className="item loading-3">
                        <div className="loading"></div>
                        <div>.loading-3</div>
                    </div>
                )
            case 'Spinner-4':
                return(
                    <div className="item loading-4">
                        <div className="loading"></div>
                        <div>.loading-4</div>
                    </div>
                )
            case 'Spinner-5':
                return(
                    <div className="item loading-5">
                        <div className="svg-wrapper">
                        <svg xmlns="http://www.w3.org/2000/svg" width="1.2em" height="1.2em">
                        <circle cx="0.6em" cy="0.6em" r="0.5em" className="circle"/>
                        </svg>
                        </div>
                        <div>.loading-5 <br />SVG</div>
                    </div>
                )
            case 'SVG-1':
                return(
                    <div className="item loading-6">
                        <svg viewBox="25 25 50 50">
                        <circle cx="50" cy="50" r="20"></circle>
                        </svg>
                    </div>
                )
        }
    }

    return ( 
        renderLoader()
    );
}
 
export default LoaderDefault;

/* 

<div className="wrapper">
                <p>Simple Border-radius Loaders</p>
                <div className="circonf-wrapper">
                    <div className="circonf circonf-1"></div>
                    <div className="circonf circonf-2"></div>
                    <div className="circonf circonf-3"></div>
                    <div className="circonf circonf-4"></div>
                    <div className="circonf circonf-5"></div>
                    <div className="circonf circonf-6"></div>
                </div>

                <h2>Spinners</h2>

                <div className="item loading-1">
                    <svg xmlns="http://www.w3.org/2000/svg" width="1.2em" height="1.2em">
                        <circle cx="0.6em" cy="0.6em" r="0.5em" className="circle"/>
                    </svg>
                    <div>.loading-1</div>
                </div>

                <div className="item loading-2">
                    <div className="spinner">
                        <div className="circle circle-1">
                            <div className="circle-inner"></div>
                        </div>
                        <div className="circle circle-2">
                            <div className="circle-inner"></div>
                        </div>
                    </div>
                    <div>.loading-2<br/> CSS only</div>
                </div>

                <div className="item loading-3">
                    <div className="loading"></div>
                    <div>.loading-3</div>
                </div>
                <div className="item loading-4">
                    <div className="loading"></div>
                    <div>.loading-4</div>
                </div>
                    <div className="item loading-5">
                        <div className="svg-wrapper">
                        <svg xmlns="http://www.w3.org/2000/svg" width="1.2em" height="1.2em">
                        <circle cx="0.6em" cy="0.6em" r="0.5em" className="circle"/>
                        </svg>
                        </div>
                        <div>.loading-5 <br />SVG</div>
                    </div>
    
                    <p>SVG</p>
                    <div className="item loading-6">
                        <svg viewBox="25 25 50 50">
                        <circle cx="50" cy="50" r="20"></circle>
                        </svg>
                    </div>
    
            </div>


*/