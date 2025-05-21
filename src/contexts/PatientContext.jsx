import { createContext, useState } from 'react';
import { initialPatients } from '../data/patientsData';

export const PatientContext = createContext();

export function PatientProvider({ children }) {
    const [patients, setPatients] = useState(initialPatients);

    const addPatient = (newPatient) => {
        setPatients(prevPatients => [...prevPatients, {
            ...newPatient,
            id: Math.max(...prevPatients.map(p => p.id)) + 1
        }]);
    };
    
    return (
        <PatientContext.Provider value={{
            patients,
            addPatient,
        }}>
            {children}
        </PatientContext.Provider>
    );
} 