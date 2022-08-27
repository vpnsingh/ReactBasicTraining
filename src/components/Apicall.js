import React, { useState, useEffect } from 'react'
import axios from 'axios'

const Apicall = () => {

    const [data, setData] = useState([]);

    useEffect(() => {
        console.log('mounted');
        axios.get('https://jsonplaceholder.typicode.com/users')
        .then(res => {
            console.log('api success response : ', res.data)
            setData(res.data)
        })
        .catch(err => console.log('Error : ', err))
    }, [])

    useEffect(() => {
        console.log('updated');
        console.log('data available')
    }, [data])

    useEffect(() => {
        return () => {
            console.log('component unmount')
        }
    }, [])
    
    return (
        <div>
            <h3>Apicall</h3>
            {
                data.length > 0 && (
                    <table className='table'>
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Company</th>
                                <th>City</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                data.map((ele, i)=>{
                                    return <tr key={i}>
                                        <td>{ele.id}</td>
                                        <td>{ele.name}</td>
                                        <td>{ele.email}</td>
                                        <td>{ele.company.name}</td>
                                        <td>{ele.address.city}</td>
                                    </tr>
                                })
                            }
                        </tbody>
                    </table>
                ) 
            }
        </div>
    )
}

export default Apicall