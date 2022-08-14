import React, {useState} from "react";
import Child from "./Child";

const Basic = () => {

    const [count, setCount] = useState(0);

    const employeeData = [
        { id: 101, name: 'John', salary: 25000 },
        { id: 102, name: 'David', salary: 35000 },
        { id: 103, name: 'Charles', salary: 85000 },
        { id: 104, name: 'Gary', salary: 50000 }
    ]

    const increment = () => {
        setCount(count+1)
    }

    const decrement = () => {
        setCount(count-1)
    }

    return(
        <div>
            <div>
                <h4 className="text-primary">Count value = {count}</h4>
                <div className="btn-group">
                    <button className="btn btn-success" onClick={increment}>Increase + </button>
                    <button className="btn btn-danger" onClick={decrement}>Decrease - </button>
                </div>
            </div>
            <hr/>
            <Child name="New user" employee={employeeData} />
        </div>
    )
}

export default Basic;