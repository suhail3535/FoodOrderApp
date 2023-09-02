import React from 'react'
import "./option.css"
import foodImage from "./trendy-minimalistic-food-delivery-service-online-food-order-application-banner-design-template_420121-273.avif"
const Header = () => {
    return (
        <div className='foodImage_div'>
            <img src={foodImage} alt="foodimage" />
        </div>
    )
}

export default Header