import React, {useState} from 'react';
import './cakes.css';
import Cupcake from './Rectangle 30.png';
import Vanicake from './Rectangle 29.png';
import Choccake from './Rectangle 20.png';

export const Cakes = ()=>{

    const [cart, setCart] = useState([]);

    const addToCart =(cake)=>{
        console.log("we are in add to cart")
        setCart([...cart,cake])

    }

    const [cakes] = useState([
        {
            image: Cupcake,
            text: 'Order now',
            name: 'Vanilla Flavour Ginger Cake',
            category: 'Category',
            price: '22,000'
        },
        {
            image: Choccake,
            text: 'Order now',
            name: 'Vanilla Flavour Ginger Cake',
            category: 'Category',
            price: '22,000'
        },
        {
            image: Vanicake,
            text: 'Order now',
            name: 'Vanilla Flavour Ginger Cake',
            category: 'Category',
            price: '22,000'
        },
        {
            image: Cupcake,
            text: 'Order now',
            name: 'Vanilla Flavour Ginger Cake',
            category: 'Category',
            price: '22,000'
        },
        {
            image: Choccake,
            text: 'Order now',
            name: 'Vanilla Flavour Ginger Cake',
            category: 'Category',
            price: '22,000'
        },
        {
            image: Vanicake,
            text: 'Order now',
            name: 'Vanilla Flavour Ginger Cake',
            category: 'Category',
            price: '22,000'
        },
        {
            image: Cupcake,
            text: 'Order now',
            name: 'Vanilla Flavour Ginger Cake',
            category: 'Category',
            price: '22,000'
        },
        {
            image: Choccake,
            text: 'Order now',
            name: 'Vanilla Flavour Ginger Cake',
            category: 'Category',
            price: '22,000'
        },
        {
            image: Vanicake,
            text: 'Order now',
            name: 'Vanilla Flavour Ginger Cake',
            category: 'Category',
            price: '22,000'
        },
        {
            image: Cupcake,
            text: 'Order now',
            name: 'Vanilla Flavour Ginger Cake',
            category: 'Category',
            price: '22,000'   
        },
    ])

    return(
        <div>
            <div className="c-header">
                <h2 className="c-heading">Creamy Cakes</h2>
                <div className="c-display">
                    {cakes.map((cake , idx) => (
                        <div key={idx}>
                            <div className="c-container">
                                <img className="c-gallery" src={cake.image} alt={cake.name}/>
                                <div className="c-overlay overlay-left">
                                    <div className="c-text">
                                        <a href="#ordernow" onClick={()=> addToCart(cake)}>{cake.text}</a>
                                    </div>
                                </div>
                            </div>
                            <div className="c-content">
                                <h5>{cakes.name}</h5>
                                <p className="c-category">{cake.category}</p>
                                <h4>&#8358;{cake.price}</h4>
                                <p className="c-content">
                                    <span><i className="fa fa-star"></i></span>
                                    <span><i className="fa fa-star"></i></span>
                                    <span><i className="fa fa-star"></i></span>
                                    <span><i className="fa fa-star"></i></span>
                                    <span><i className="fa fa-star white"></i></span>
                             </p>
                         </div>
                     </div>
                    ))}
                </div>
                


            </div>

        </div>

    )
}