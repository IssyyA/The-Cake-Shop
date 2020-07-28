import React,{ useState, useRef } from 'react';
import './sidebar.style.css';
import { Cakes } from '../cakes/Cakes'


export const Sidebar = () => {
    const [right, setRight] = useState(true);
    const iconSpan = useRef(null);
    const form = useRef(null);
    
    function slideInOut(){
        iconSpan.current.classList.toggle('slideIn')
        form.current.classList.toggle('slideIn')
        setRight(!right)
    }

    return (
        <>
            <Cakes/>
            <div className="Form">
                <span ref={iconSpan} className="arrow">
                    {right === true ? <i id= "slider-btn" onClick={slideInOut} className="fa fa-angle-right"></i> :
                    <i id="slider-btn" onClick={slideInOut} className="fa fa-angle-left"></i>
                    }
            </span>
                <span>  </span>

                    <form ref={form}>
                        <img src="https://i.ibb.co/KsyR00S/Brown-Bakery-Cake-Business-Card-removebg-preview.png" alt="Brown-Bakery-Cake-Business-Card-removebg-preview" width="200px" height="100px" />
                        <p className="c-select" > Select A cake and get it delivered to your door step</p>
                        <hr/>
                        <h3> Basket Items</h3>
                        <p>No items added yet </p>
                        <hr/>
                        <label htmlFor="Address"> Address
                            <input type="text" placeholder="Delivery Address" name="address" id="address" required/>
                        </label>
                        <label htmlFor="City">City
                            <select id="city" name="city" required>
                                <option disabled hidden defaultValue="No city selected" >No city selected</option>
                                <option value="Ikeja"> Ikeja </option>
                                <option value="Ikorodu"> Ikorodu </option>
                                <option value="Ibadan"> Mainland </option>
                                <option value="Abeokuta"> Island </option>
                            </select>
                        </label>
                        <label htmlFor="phone numbers"> Phone Number
                            <input type="tel" id="phone" name="phone" placeholder="0903-333-0000" pattern="[0-9]{4}-[0-9]{3}-[0-9]{4}" required/>
                        </label>
                        <input type="submit" value="Deliver"/>

                    
                    </form>
            </div>
        </>
    )
}