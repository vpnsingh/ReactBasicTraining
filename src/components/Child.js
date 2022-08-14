import React from 'react'

const Child = ({name, employee}) => {

  return (
    <div>
        <h3>Hello, {name}</h3>
        <table className="table">
            <tr>
                <th>Sr No.</th>
                <th>ID</th>
                <th>Name</th>
                <th>Salary</th>
            </tr>
            {
                employee.map((ele, i) => {
                    return <tr key={i}>
                        <td>{i+1}</td>
                        <td>{ele.id}</td>
                        <td>{ele.name}</td>
                        <td>{ele.salary}</td>
                    </tr>
                })
            }
        </table>
    </div>
  )
}

export default Child;