import React, { useState } from 'react';
import MedicalRecordView from './MedicalRecordView';
//TABS
import { Attendance } from './Tabs/Attendance';

const MedicalRecord = (props) => {
  const [activeTab, setActiveTab] = useState('Attendance');
  const ToggleActiveTab = (newTab) => {
    setActiveTab(newTab)
  }
  const TabItems = [
    {
      title: 'Atendimentos',
      tabName: 'Attendance',
      icon: 'ni-cloud-upload-96',
      notification: 99,
      component: <Attendance />
    },
    {
      title: 'Alergias',
      tabName: 'Allergies',
      icon: 'ni-cloud-upload-96',
      notification: 2,
      component: <p>Alergias</p>
    },
    {
      title: 'Vacinas',
      tabName: 'Vaccines',
      icon: 'ni-cloud-upload-96',
      notification: 0,
      component: <p>Vacinas</p>
    },
    {
      title: 'Diagnósticos',
      tabName: 'Diagnostics',
      icon: 'ni-cloud-upload-96',
      notification: 0,
      component: <p>Diagnósticos</p>
    },
    {
      title: 'Evoluções',
      tabName: 'Evolution',
      icon: 'ni-cloud-upload-96',
      notification: 0,
      component: <p>Evoluções</p>
    },
    {
      title: 'Anamneses',
      tabName: 'Anamnesis',
      icon: 'ni-cloud-upload-96',
      notification: 0,
      component: <p>Anamneses</p>
    },
    {
      title: 'Medicamentos Prescritos',
      tabName: 'PrescribedDrugs',
      icon: 'ni-cloud-upload-96',
      notification: 0,
      component: <p>Medicamentos Prescritos</p>
    },
    {
      title: 'Medicamentos Administrados',
      tabName: 'AdministeredMedicines',
      icon: 'ni-cloud-upload-96',
      notification: 0,
      component: <p>Medicamentos Administrados</p>
    },
    {
      title: 'Procedimentos Solicitados',
      tabName: 'RequestedProcedures',
      icon: 'ni-cloud-upload-96',
      notification: 0,
      component: <p>Procedimentos Solicitados</p>
    },
    {
      title: 'Resultados dos Procedimentos',
      tabName: 'ResultsOfTheProcedures',
      icon: 'ni-cloud-upload-96',
      notification: 0,
      component: <p>Resultados dos Procedimentos</p>
    },
    {
      title: 'Sinais Vitais',
      tabName: 'Vital signs',
      icon: 'ni-cloud-upload-96',
      notification: 0,
      component: <p>Sinais Vitais</p>
    }
  ]

  return (
    <MedicalRecordView
      TabItems={TabItems}
      activeTab={activeTab}
      ToggleActiveTab={ToggleActiveTab}
    />
  )
}

export default MedicalRecord;