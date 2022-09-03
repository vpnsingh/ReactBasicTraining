import React, {useRef} from 'react'
import { useNavigate } from 'react-router-dom'

const RefExample = () => {

    const navigate = useNavigate(); 
    const emailRef = useRef();
    const messageRef = useRef();

    const getData = () => {
        alert(emailRef.current.value, messageRef.current.value);
        navigate('/basic')
    }
    return (
        <div>
            <h3 className='text-center'>useRef Example</h3>
            <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label">Email address</label>
                <input type="email" class="form-control" id="exampleFormControlInput1" 
                    placeholder="name@example.com" ref={emailRef}/>
            </div>
            <div class="mb-3">
                <label for="exampleFormControlTextarea1" class="form-label">Example textarea</label>
                <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" ref={messageRef}></textarea>
            </div>
            <button className='btn btn-success' onClick={getData}>Submit</button>
        </div>
    )
}

export default RefExample;