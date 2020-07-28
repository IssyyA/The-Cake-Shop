import React from 'react';
import './specials.style.css';
import Chocake from './Ellipse 8.png';
import Birthday from './Ellipse 14.png';
import Gingercake from './Ellipse 11.png';

export const Special=()=> {
    return( 
        <div className="specials">
            <div className="s-header">
                <h2 className="s-heading">Specials</h2>
            </div>
            <div className="s-display">
                <div>
                    <img src={Chocake} alt="Chocolate Cake" className="s-gallery"/>
                    <div className="s-content">
                        <p className="s-name">Ginger Cake</p>
                        <p className= "s-price">&#8358;23,000</p>
                    </div>
                </div>
                <div>
                    <img src={Birthday} alt="Birthday" className="s-gallery"/>
                    <div className="s-content">
                        <p className="s-name">Ginger Cake</p>
                        <p className= "s-price">&#8358;23,000</p>
                    </div>
                </div>
                <div>
                    <img src={Gingercake} alt="Gingercake" className="s-gallery"/>
                    <div className="s-content">
                        <p className="s-name">Ginger Cake</p>
                        <p className= "s-price">&#8358;23,000</p>
                    </div>
                </div>
                <div>
                    <img src={Chocake} alt="Chocolate Cake" className="s-gallery"/>
                    <div className="s-content">
                        <p className="s-name">Ginger Cake</p>
                        <p className= "s-price">&#8358;23,000</p>
                    </div>
                </div>
                <div>
                    <img src={Birthday} alt="Birthday" className="s-gallery"/>
                    <div className="s-content">
                        <p className="s-name">Ginger Cake</p>
                        <p className= "s-price">&#8358;23,000</p>
                    </div>
                </div>
                <div>
                    <img src={Gingercake} alt="Ginger Cake" className="s-gallery"/>
                    <div className="s-content">
                        <p className="s-name">Ginger Cake</p>
                        <p className= "s-price">&#8358;23,000</p>
                    </div>
                </div>
                <div>
                    <img src={Chocake} alt="Chocolate Cake" className="s-gallery"/>
                    <div className="s-content">
                        <p className="s-name">Ginger Cake</p>
                        <p className= "s-price">&#8358;23,000</p>
                    </div>
                </div>
            </div>
            <div className="special-icon">
                    <i className="fa fa-arrow-circle-left fa-2x icon-white"></i>
                    <span>
                        <i className="fa fa-circle circle-white white"></i>
                        <i className="fa fa-circle circle-white"></i>
                        <i className="fa fa-circle circle-white"></i>
                        <i className="fa fa-circle circle-white"></i>
                        <i className="fa fa-circle circle-white"></i>
                    </span>
                    <i className="fa fa-arrow-circle-right fa-2x icon-white"></i>
                </div>   
        </div>
    )
}