import React, {useContext} from 'react'
import { myContext } from './Parent'

export default function EmployeeB() {

    const empData = useContext(myContext);

    return (
        <div className='border border-danger p-3'>
            <h3>EmployeeB</h3>
            <p>Name: {empData.name}</p>
            <p>Age: {empData.age}</p>
            <p>City: {empData.city}</p>
        </div>
    )
}
