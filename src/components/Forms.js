import React, {useState} from "react";

const Forms = () => {

    const [userinfo, setUserInfo] = useState({
        fullName : 'Vipin Singh',
        email : '',
        password : ''
    })

    const { fullName, email, password } = userinfo

    const submitDetails = (e) => {
        e.preventDefault();
        if(fullName == ''){
            alert('Full Name can not be blank');
            return
        }else if(email == ''){
            alert('Email can not be blank');
            return
        }else if(password == ''){
            alert('Password can not be blank');
            return
        }
        console.log(userinfo)
    }

    const handleChange = (name) => event => {
        console.log(name, event.target.value)
        setUserInfo({...userinfo, [name] : event.target.value})
    }

    return (
        <div>
            <h3 className="text-center mt-3">Forms Component</h3>
            <form>
                <div class="form-floating mb-3">
                    <input type="text" class="form-control" id="floatingName" placeholder="Full Name"
                        onChange={handleChange('fullName')} value={fullName} />
                    <label for="floatingName">Full Name</label>
                </div>
                <div class="form-floating mb-3">
                    <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com"
                        onChange={handleChange('email')} value={email} />
                    <label for="floatingInput">Email address</label>
                </div>
                <div class="form-floating">
                    <input type="password" class="form-control" id="floatingPassword" placeholder="Password" 
                        onChange={handleChange('password')} value={password}/>
                    <label for="floatingPassword">Password</label>
                </div>
                <button className="btn btn-success mt-3" onClick={submitDetails}>Submit</button>
            </form>
        </div>
    )
}

export default Forms;