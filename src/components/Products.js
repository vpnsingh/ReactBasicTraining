import React, {useState, useEffect} from 'react'
import { getProducts } from '../config/apiHandler'

const Products = () => {

    const [products, setProducts] = useState([])

    useEffect(() => {
        fetchProducts();
    }, [])

    const fetchProducts = () => {
        getProducts()
        .then(res => {
            console.log('Success : ', res)
            setProducts(res.data)
        })
        .catch(err => {
            console.log('Error : ', err)
        })
    }

    return (
        <div>
            <h3 className="text-center">Products</h3>
            <div className='row'>
            {
                products.map((product, index) => {
                    return    <div className='col-md-4' key={index}>
                    <div className="card" style={{width : '18rem'}}>
                        <img className="card-img-top" src={product.image} alt="Card image cap" />
                        <div className="card-body">
                            <h5 className="card-title">{product.title}</h5>
                            <p className="card-text">{product.description}</p>
                            <p className="badge bg-primary">{product.price}</p>
                        </div>
                    </div>
                    </div>
                })
            }
            </div>
        </div>
    )
}

export default Products;