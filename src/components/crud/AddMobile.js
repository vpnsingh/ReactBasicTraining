import React, {useState} from 'react'
import { addMobile } from '../../config/mobileHandler'

const AddMobile = () => {

    const [mobile, setMobile] = useState({
        name: '',
        price: '',
        quantity: '',
        image: '',
        id: ''
    })

    const {name, price, quantity, image, id} = mobile

    const handleChange = (name) => event => {
        console.log(name, event.target.value)
        setMobile({...mobile, [name] : event.target.value})
    }

    const submitDetails = (e) => {
        e.preventDefault();
        if(name == '' || price == '' || image == '' || quantity == ''){
            alert('Please fill all the data !!!!')
            return
        }
        addMobile(mobile)
        .then(res => {
            console.log(res.data)
        })
        .catch(err => console.log(err))
    }

    return (
        <div> 
            <h3 className='text-center'>AddMobile</h3>
            <form>
                <div class="form-floating mb-3">
                    <input type="text" class="form-control" id="floatingName" placeholder="Mobile Name"
                        onChange={handleChange('name')} value={name} />
                    <label for="floatingName">Mobile Name</label>
                </div>
                <div class="form-floating mb-3">
                    <input type="text" class="form-control" id="floatingInput" placeholder="Mobile Price"
                        onChange={handleChange('price')} value={price} />
                    <label for="floatingInput">Price</label>
                </div>
                <div class="form-floating mb-3">
                    <input type="text" class="form-control" id="floatingInput" placeholder="Mobile quantity"
                        onChange={handleChange('quantity')} value={quantity} />
                    <label for="floatingInput">Mobile quantity</label>
                </div>
                <div class="form-floating mb-3">
                    <input type="text" class="form-control" id="floatingInput" placeholder="Mobile Image URL"
                        onChange={handleChange('image')} value={image} />
                    <label for="floatingInput">Image URL</label>
                </div>
                <button className="btn btn-success mt-3" onClick={submitDetails}>Submit</button>
            </form>    
        </div>
    )
}

export default AddMobile;