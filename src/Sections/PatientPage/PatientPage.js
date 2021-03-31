import React, { useState, useEffect, useContext } from "react";
import PatientPageView from "./PatientPageView";
//CONTEXTS
import { AxiosContext } from "./../../Contexts/AxiosContext";

const PatientPage = () => {
  //CONTEXTS
  const { CallForSomeApi } = useContext(AxiosContext);
  //VARIABLES
  const [render, setRender] = useState(false);
  const [load, setLoad] = useState(true);
  const [patient, setPatient] = useState(
    {
      name: 'Arthur de Melo Gerônimo',
      sex: 'M',
      idpc: '123',
      civilState: 'Solteiro',
      schooling: 'Ensino Superior',
      profession: 'Programador',
      email: 'arrthur.melo@gmail.com',
      mother: {
        name: 'Maria Goreth Meira de Melo'
      },
      father: {
        name: 'Vicente Cícero Gerônimo'
      },
      birth: {
        date: '1993-06-16',
        country: 'Brasil',
        state: 'Roraima',
        city: 'Boa Vista'
      },
      document: {
        cpf: {
          number: '014.380.742-04'
        },
        cns: {
          number: '1111 111 1111'
        },
        rg: {
          number: '103068-6'
        }
      },
      ids: [
        {
          system: 'Origem',
          id: '123',
        },
        {
          system: 'CACHE',
          id: '123'
        },
        {
          system: 'MV',
          id: '123'
        }
      ],
      addresses: [
        {
          street: 'Rua Dandãe Pinho',
          country: 'Brasil'
        }
      ],
      phones: [
        {
          description: 'Celular',
          number: '95 98125-3585'
        }
      ]
    }
  );

  useEffect(() => {
    setLoad(true);
    let iDPatient = window.location.pathname.split("/")[2];
    const params = {
      operation: "ShowPatient",
      url: `/person/${iDPatient}`,
    };
    CallForSomeApi(params, (axiosResponse) => {
      console.log(axiosResponse);
      setPatient(axiosResponse.body);
      setLoad(false);
      setRender(true);
    });
  }, [CallForSomeApi]);

  return <PatientPageView render={true} load={false} patient={patient} />;
};

export default PatientPage;
