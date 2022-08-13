import React, {useState} from "react";

const Basic = (props) => {

    const [count, setCount] = useState(0);
    const [showemployee, setEmployee] = useState(false);

    const increment = () => {
        setCount(count+1)
    }

    const decrement = () => {
        setCount(count-1)
    }

    return(
        <div>
            <h3>Hello, {props.name}</h3>
            <div>
                <h4 className="text-primary">Count value = {count}</h4>
                <div className="btn-group">
                    <button className="btn btn-success" onClick={increment}>Increase + </button>
                    <button className="btn btn-danger" onClick={decrement}>Decrease - </button>
                </div>
            </div>
            <hr/>
            {
                showemployee && (
                <table className="table">
                    <tr>
                        <th>Sr No.</th>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Salary</th>
                    </tr>
                    {
                        props.employee.map((ele, i) => {
                            return <tr key={i}>
                                <td>{i+1}</td>
                                <td>{ele.id}</td>
                                <td>{ele.name}</td>
                                <td>{ele.salary}</td>
                            </tr>
                        })
                    }
                </table>)
            }
        </div>
    )
}

export default Basic;