import { useState, useEffect } from 'react';
import Alert from 'react-bootstrap/Alert';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useDispatch, useSelector } from 'react-redux';
import { add } from '../store/cartSlice';
import { getProducts } from '../store/productSlice';
import statusCode from '../utils/statusCode';

const Product = () => {


    const dispatch = useDispatch(); //to return dispatch method
    const { data: products, status } = useSelector(state => state.products)//fetching data from productslice



    // const { data: products } = useSelector(state => state.products);
    // const [products, getProducts] = useState([]);
    //useeeffect hook takes callback fun
    useEffect(() => {
        //dispatch an action for fetchproducts
        // ------------------------------------------
        dispatch(getProducts());


        // //api call using fecth method  and here we are calling api in product component nor from redux
        // fetch('https://fakestoreapi.com/products')
        //     .then(data => data.json()) //pass to json
        //     .then(result => getProducts(result)) //need to set a state--result to  using usestate hook

    }, []);

    if (status === statusCode.LOADING) {
        return <p> loading.....</p>
    }


    if (status === statusCode.ERROR) {
        return <Alert key="danger" variant="danger">Something went wrong....</Alert>
    }


    const addToCart = (product) => {
        //dippatch an add action
        dispatch(add(product))

    }

    //create variable cart and iterate on my products
    //product will hold the cmpt data

    //react boostrap cards--npm i react-bootstrap bootstrap
    const cards = products.map(product => (
        <div className='col-md-3' style={{ marginBottom: '10px' }}>

            <Card key={product.id} className='h-100'>
                <div className='text-center'>
                    <Card.Img variant="top" src={product.image} style={{ width: '100px', height: '130px' }} />
                </div>
                <Card.Body>
                    <Card.Title>{product.title}</Card.Title>
                    <Card.Text>
                        INR {product.price}
                    </Card.Text>

                </Card.Body>
                <Card.Footer style={{ background: 'white' }}>
                    <Button variant="primary" onClick={() => addToCart(product)}> Add To Cart</Button>
                </Card.Footer>



            </Card>

        </div>
    ))
    return (

        //display carts in rows wise {cards}
        <>
            <h1>Product dasbord</h1>

            <div className='row'>
                {cards}
            </div>

        </>
    )
}

export default Product;