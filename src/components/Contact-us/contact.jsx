import React from 'react';
import './contact.style.css';
import MapContainer from './Mapcontainer';

export const Contact = () => {
    return (
        <div className="map">
            <div className = "c-header" >
                <h2 className = "c-heading" > Contact Us </h2>
          </div>
          <div className="container-map">
                <MapContainer/>  
          </div>
           
     </div>
    )
}