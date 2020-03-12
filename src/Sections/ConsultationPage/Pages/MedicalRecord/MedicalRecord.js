import React, { useState } from 'react';
import MedicalRecordView from './MedicalRecordView';
//TABS
import { Allergies } from './Tabs/Allergies';
import { Vaccines } from './Tabs/Vaccines';
import { Diagnostics } from './Tabs/Diagnostics';
import { Evolution } from './Tabs/Evolution';
import { Anamnesis } from './Tabs/Anamnesis';
import { PrescribedDrugs } from './Tabs/PrescribedDrugs';
import { AdministeredDrugs } from './Tabs/AdministeredDrugs';
import { RequestedProcedures } from './Tabs/RequestedProcedures';
import { ResultsOfProcedures } from './Tabs/ResultsOfProcedures';
import { VitalSigns } from './Tabs/VitalSigns';

const MedicalRecord = (props) => {
  const [activeTab, setActiveTab] = useState('Allergies');
  const ToggleActiveTab = (newTab) => {
    setActiveTab(newTab)
  }
  const TabItems = [
    {
      title: 'Alergias',
      tabName: 'Allergies',
      icon: 'ni-cloud-upload-96',
      notification: 0,
      component: <Allergies />
    },
    {
      title: 'Vacinas',
      tabName: 'Vaccines',
      icon: 'ni-cloud-upload-96',
      notification: 0,
      component: <Vaccines />
    },
    {
      title: 'Diagnósticos',
      tabName: 'Diagnostics',
      icon: 'ni-cloud-upload-96',
      notification: 6,
      component: <Diagnostics />
    },
    {
      title: 'Evoluções',
      tabName: 'Evolution',
      icon: 'ni-cloud-upload-96',
      notification: 3,
      component: <Evolution />
    },
    {
      title: 'Anamneses',
      tabName: 'Anamnesis',
      icon: 'ni-cloud-upload-96',
      notification: 1,
      component: <Anamnesis />
    },
    {
      title: 'Medicamentos Prescritos',
      tabName: 'PrescribedDrugs',
      icon: 'ni-cloud-upload-96',
      notification: 1,
      component: <PrescribedDrugs />
    },
    {
      title: 'Medicamentos Administrados',
      tabName: 'AdministeredMedicines',
      icon: 'ni-cloud-upload-96',
      notification: 1,
      component: <AdministeredDrugs />
    },
    {
      title: 'Procedimentos Solicitados',
      tabName: 'RequestedProcedures',
      icon: 'ni-cloud-upload-96',
      notification: 1,
      component: <RequestedProcedures />
    },
    {
      title: 'Resultados dos Procedimentos',
      tabName: 'ResultsOfTheProcedures',
      icon: 'ni-cloud-upload-96',
      notification: 1,
      component: <ResultsOfProcedures />
    },
    {
      title: 'Sinais Vitais',
      tabName: 'Vital signs',
      icon: 'ni-cloud-upload-96',
      notification: 4,
      component: <VitalSigns />
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