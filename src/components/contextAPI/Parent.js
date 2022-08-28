import React, {createContext} from 'react'
import EmpployeeA from './EmpployeeA'
export const myContext = createContext(null)

export default function Parent() {

    const employeeData = {
        name: 'Rahul Naik',
        age: 32,
        city: 'Mumbai'
    }

    return (
        <div className='border border-primary my-3 p-3'>
            <h3>Parent Component</h3>
            <myContext.Provider value={employeeData}>
                <EmpployeeA />
            </myContext.Provider>
        </div>
    )
}
