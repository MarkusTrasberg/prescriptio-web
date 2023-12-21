'use client';

// components/PatientMedicineScreen.tsx
import React from 'react';
import Image from 'next/image'

// If you have a type for Medicine, you can replace 'any' with that type
type Medicine = string;

interface MedicineProps {
  medicines: Medicine[];
}


const data = {
  "cases": [
    {
      "illness": "pain from cancer",
      "condition": "trouble swallowing",
      "medicine": "transdermal fentanyl",
      "person_name": "Emily",
      "age": 70,
      "gender": "female",
      // "image_url": "female_70"
    },
    {
      "illness": "obstipation",
      "condition": "child (1-6yr)",
      "medicine": "lactulose",
      "person_name": "Noah",
      "age": 4,
      "gender": "male",
      // "image_url": "male_4"
    },
    {
      "illness": "depression",
      "condition": null,
      "medicine": "escitalopram",
      "person_name": "James",
      "age": 35,
      "gender": "male",
      // "image_url": "male_35"
    },
    {
      "illness": "respiratory tract infection",
      "condition": "child (7-12 yr)",
      "medicine": "amoxicillin/clavulanic acid",
      "person_name": "Sophia",
      "age": 9,
      "gender": "female",
      // "image_url": "female_9"
    },
    {
      "illness": "respiratory tract infection",
      "condition": "allergic to penicillin",
      "medicine": "erythromycin",
      "person_name": "Olivia",
      "age": 30,
      "gender": "female",
      // "image_url": "female_30"
    },
    {
      "illness": "ADHD",
      "condition": "child (7-12 yr)",
      "medicine": "methylphenidate",
      "person_name": "Ethan",
      "age": 10,
      "gender": "male",
      // "image_url": "male_10"
    },
    {
      "illness": "rheumatism",
      "condition": null,
      "medicine": "methotrexate",
      "person_name": "John",
      "age": 60,
      "gender": "male",
      // "image_url": "male_60"
    }
  ]
};

export default function PatientMedicineScreen({ medicines }: MedicineProps) {

  const [currentCase, setCurrentCase] = React.useState(0);
  const [correctCases, setCorrectCases] = React.useState(0);
  const [incorrectCases, setIncorrectCases] = React.useState(0);
  const [selectedMedicine, setSelectedMedicine] = React.useState<string | null>(null);

  const handleRestart = () => {
    setCurrentCase(0);
    setCorrectCases(0);
    setIncorrectCases(0);
  }

  const handleMedicineClick = (selectedMedicine: any, correctMedicine: string) => {
    setSelectedMedicine(null);  
    if (selectedMedicine === correctMedicine) {
      console.log('Correct medicine selected!');
      setCorrectCases(correctCases + 1);
    } else {
      console.log('Incorrect medicine, try again.');
      setIncorrectCases(incorrectCases + 1);
    }
    setCurrentCase(currentCase + 1);
  };

  const getMedicineStyle = (medicine: string) => {
    return `cursor-pointer hover:bg-gray-200 p-2 ${
      selectedMedicine === medicine ? "bg-blue-100 border-blue-500 border-2" : ""
    }`;
  };


  return (
    <div className="flex justify-center items-center h-screen">
      <div className="flex flex-row  rounded-lg">

        {currentCase < data.cases.length && (
          <div className="w-[1200px] flex ">
            {/* Patient Information */}
            <div className="flex-row w-[500px] bg-white shadow-lg">
              <div className="p-4 w-full">
              <h2 className="text-xl font-semibold mb-4">Patient</h2>
                {/* Loop through cases and display information */}
                <div className="flex justify-center items-center">
                <Image
                  src="/guy.png"
                  width={150}
                  height={150}
                  alt="Picture of the author"
                  
                />
                </div>
                <p className="text-lg"><b>Name:</b> {data.cases[currentCase].person_name}</p>
                <p className="text-lg"><b>Age:</b> {data.cases[currentCase].age}</p>
                <p className="text-lg"><b>Gender:</b> {data.cases[currentCase].gender}</p>
                <p className="text-lg"><b>Illness:</b> {data.cases[currentCase].illness}</p>
                <p className="text-lg"><b>Condition:</b> {data.cases[currentCase].condition}</p>
              </div>
            </div>

            {/* Medicines List */}
            <div className="p-4 bg-gray-100  w-[500px] flex-row">
              <h2 className="text-xl font-semibold mb-4">Medicine Book</h2>
              {medicines.map((medicine) => (
                <p
                  key={medicine}
                  className={getMedicineStyle(medicine)}
                  onClick={() => setSelectedMedicine(medicine)}
                >
                  {medicine}
                </p>
              ))}
              {selectedMedicine && (
                <button className="mt-4 text-blue-600" onClick={() => handleMedicineClick(selectedMedicine, data.cases[currentCase].medicine)}>Continue</button>
              )}
              
            </div>
          </div>
        )}

        {currentCase === data.cases.length && (
          <div className="p-4">
            <h2 className="font-bold">Results</h2>
            <p>Correct: {correctCases}</p>
            <p>Incorrect: {incorrectCases}</p>
            <button className="mt-4 text-blue-600" onClick={handleRestart}>Restart</button>
          </div>
        )}
      </div>
    </div>
  );
};
