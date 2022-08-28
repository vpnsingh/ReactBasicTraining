import React , {useState, useEffect} from 'react'
import { getMobiles } from '../../config/mobileHandler';
import { Link } from 'react-router-dom';

const Mobile = () => {

    const [mobiles, setMobiles] = useState([]);

    useEffect(() => {
        getMobiles()
        .then(res => {
            console.log(res.data)
            setMobiles(res.data)
        })
        .catch(err => console.log(err))
    }, [])

    return (
        <div className='my-3'>
            <h3 className="text-center">Mobile Data</h3>
            <div className='row'>
            {
                mobiles.map((mobile, index) => {
                    return    <div className='col-md-4' key={index}>
                    <div className="card" style={{width : '18rem'}}>
                        <img className="card-img-top" src={mobile.image} alt="Card image cap" />
                        <div className="card-body">
                            <h5 className="card-title">{mobile.name}</h5>
                            <p className="card-text">{mobile.quantity}</p>
                            <p className="badge bg-primary">{mobile.price}</p>
                        </div>
                    </div>
                    </div>
                })
            }
            </div>
            <Link to='/json-server/add'>
                <button className='btn btn-secondary float-end'>Add Mobile Data</button>
            </Link>
        </div>
    )
}

export default Mobile;