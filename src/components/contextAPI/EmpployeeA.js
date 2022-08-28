import React from 'react'
import EmployeeB from './EmployeeB'

export default function EmpployeeA() {
    return (
        <div className='border border-success p-3'>
            <h3>EmpployeeA</h3>
            <EmployeeB />
        </div>
    )
}
