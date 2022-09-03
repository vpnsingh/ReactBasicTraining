import React, {useState, useMemo} from 'react'

const MemoExample = () => {

    const squareNumber = (number) => {
        console.log('Sqaure number function called')
        return Math.pow(number,2)
    }

    const [counter, setCounter] = useState(0);
    const [number, setNumber] = useState(0);

    const countHandler = () => {
        setCounter(counter+1)
    }

    const numberHandler = (e) => {
        setNumber(e.target.value)
    }

    // const squareNum = squareNumber(number);
    const squareNum = useMemo(() => {
        return squareNumber(number)
    }, [number])

    return (
        <div className='container'>
            <h3 className='text-center'>useMemo Example</h3>
            <div>
                <input type='number' placeholder='Enter a number' className='form-control' 
                    value={number} onChange={numberHandler} />
                <p>Output of Number : {squareNum}</p>
                <br/>
                <button className='btn btn-primary' onClick={countHandler}>Counter ++</button>
            </div>
        </div>
    )
}

export default MemoExample;