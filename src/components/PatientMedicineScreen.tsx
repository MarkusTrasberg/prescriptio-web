'use client';

// components/PatientMedicineScreen.tsx
import React from 'react';

// If you have a type for Medicine, you can replace 'any' with that type
type Medicine = any;

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

  const handleRestart = () => {
    setCurrentCase(0);
    setCorrectCases(0);
    setIncorrectCases(0);
  }

  const handleMedicineClick = (selectedMedicine: Medicine, correctMedicine: string) => {
    if (selectedMedicine === correctMedicine) {
      console.log('Correct medicine selected!');
      setCorrectCases(correctCases + 1);
    } else {
      console.log('Incorrect medicine, try again.');
      setIncorrectCases(incorrectCases + 1);
    }
    setCurrentCase(currentCase + 1);
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="flex flex-row bg-white shadow-lg rounded-lg">

        {currentCase < data.cases.length && (
          <div className="flex-row w-[500px]">
            <div className="p-4 w-full">
              {/* Loop through cases and display information */}
              <p className="text-lg"><b>Name:</b> {data.cases[currentCase].person_name}</p>
              <p className="text-lg"><b>Age:</b> {data.cases[currentCase].age}</p>
              <p className="text-lg"><b>Gender:</b> {data.cases[currentCase].gender}</p>
              <p className="text-lg"><b>Illness:</b> {data.cases[currentCase].illness}</p>
              <p className="text-lg"><b>Condition:</b> {data.cases[currentCase].condition}</p>
            </div>

            {/* Medicines List */}
            <div className="p-4 bg-gray-100">
              <h2 className="text-xl font-semibold mb-4">Medicine Book</h2>
              {medicines.map((medicine) => (
                <p
                  key={medicine}
                  className="cursor-pointer hover:bg-gray-200 p-2"
                  onClick={() => handleMedicineClick(medicine, data.cases[currentCase].medicine)}
                >
                  {medicine}
                </p>
              ))}
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
