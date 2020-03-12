import React, { useState, useContext } from 'react';
//CONTEXTS
import { AxiosContext } from './../../../../../../../../Contexts/AxiosContext';

const InputText = (props) => {
    //CONTEXT'S
    const { CatchResponseCode, CallForSomeApi  } = useContext(AxiosContext);
    //VARIABLES
    const [situation, setSituation] = useState('Stopped');

    /*
    useEffect(() => {
        if(situation === 'Success'){
            console.log('effect success')
            setTimeout(
                function() {
                    setSituation('Stopped')
                },10000
            );
        }
        console.log('effect')
    },[situation]);
    */

    const UpdateFast = fieldName => event =>  {
        /*
        console.log('Field Name -> ' + fieldName)
        console.log('Old Value -> ' + props.value)
        console.log('New Value -> ' + event.target.value)
        */
        setSituation('Consulting')
        let newName = event.target.value;
        const params = {
            operation: 'ProfileUpdateSingleField',
            data: {
                [fieldName]: newName
            }
        }
        CallForSomeApi((params),(axiosResponse) => {
            if (axiosResponse.header){
                const code = axiosResponse.header.code.substr(-5);
                switch(code){
                    case CatchResponseCode('ProfileUpdateSingleField','Person edited successfully'):
                        if(props.ChangeName){
                            return (
                                setSituation('Success'),
                                props.ChangeName(newName),
                                props.VerifyProfilePercentage()
                            );
                        }else{
                            return (
                                setSituation('Success'),
                                props.VerifyProfilePercentage()
                            );
                        }
                    default:
                        return (
                            setSituation('Error'),
                            props.VerifyProfilePercentage()
                        );
                }
            }
        });
    }

    const focusAgain = () =>  {
        setSituation('Stopped');
    }

    const renderIcon = () => {
        switch(situation){
            case 'Stopped':
            default:
                return;
            case 'Consulting':
                return <i className="fas fa-spinner Profile-BasicInformation-InputIconAnimation-ConsultingApi"></i>
            case 'Error':
                return <i className="fas fa-times" style={{ color: 'var(--danger)'}}></i>
            case 'Success':
                return <i className="fas fa-check" style={{ color: 'var(--success)'}}></i>
        }
    }

    const renderFeedback = () => {
        switch(situation){
            case 'Error':
                return(
                    <div className="invalid-feedback">
                        Alguma coisa deu errada...
                    </div>
                )
            case 'Success':
                return(
                    <div className="valid-feedback">
                        Campo atualizado com sucesso!
                    </div>
                )
            default:
                return;
        }
    }

    return ( 
        <div className="input-group input-group-merge">
            <input 
            className={"form-control " + (situation === 'Error' ? 'is-invalid' : '') + (situation === 'Success' ? 'is-valid' : '')} 
            placeholder={props.placeholder}
            type={props.type ? props.type : 'text'}
            defaultValue={props.value}
            onBlur={UpdateFast(props.fieldName)}
            onFocus={() => focusAgain()}
            style={{ textTransform: 'uppercase' }}
            />
            <div className="input-group-append">
                <span className={"input-group-text " + (situation === 'Error' ? 'Profile-BasicInformation-InputIcon-Error' : '') + (situation === 'Success' ? 'Profile-BasicInformation-InputIcon-Success' : '')}>
                    {renderIcon()}
                </span>
            </div>
            {renderFeedback()}
        </div>
    );
}
 
export default InputText;