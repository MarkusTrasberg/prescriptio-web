import React from 'react';
import PatientMedicineScreen from '../../components/PatientMedicineScreen';
import Link from 'next/link';
import { promises as fs } from 'fs';


type Medicine = any;
type Case = {
  illness: string;
  condition: string;
  medicine: string;
  person_name: string;
  age: number;
  gender: string;
};

interface MedicineProps {
  medicines: Medicine[];
}


const medicines: Medicine[] = ['transdermal fentanyl', 'lactulose', 'escitalopram', 'amoxicillin/clavulanic acid', 'erythromycin', 'methylphenidate', 'methotrexate'];

export default async function Play() {
  // const file = await fs.readFile(process.cwd() + '../treatment_data.json', 'utf8');
  // const data = JSON.parse(file);
  return (
    <div>
      <Link href="/" className="m-4 mt-2" >{"<- Back"} </Link>
      <PatientMedicineScreen medicines={medicines} />
      {/* <p>{data}</p> */}
    </div>
  );
}
