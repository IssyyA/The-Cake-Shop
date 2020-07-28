import React from 'react';
import './showcase.style.css';
import Cake from './image 1.png'

export const Showcase = () => {
    return ( 
        <div className = "showcase">
            <div className = "showcase-header">
                <div className="showcase-cake">
                    <img src={Cake} alt="showcase-cake" />
                </div>
                <div className="showcase-icon">
                    <i className="fa fa-arrow-circle-left fa-2x icon-pink"></i>
                    <span>
                        <i className="fa fa-circle circle-pink pink"></i>
                        <i className="fa fa-circle circle-pink"></i>
                        <i className="fa fa-circle circle-pink"></i>
                        <i className="fa fa-circle circle-pink"></i>
                        <i className="fa fa-circle circle-pink"></i>
                    </span>
                    <i className="fa fa-arrow-circle-right fa-2x icon pink"></i>
                </div>   
            </div>
            <div className="showcase-content">
                <h1 className="l-heading">Bam-Bam Lala <br/> Special Offer</h1>
                <p className="m-heading">Get bambam for your loved <br/>ones this season! </p>
                <a href="#btn" className="btn"> Shop!</a>
            </div>
            <div>
                
            </div>
        </div>
    )
}