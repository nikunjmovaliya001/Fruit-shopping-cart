
import React from 'react'

export default function Header() {
    return (
        <div className="pagecontainr">
        <div className="contaent_heading">
            <h6>SAME DAY DELIVERY AVAILABLE FOR ORDERS PLACED BY 10 AM. MINIMUM CART VALUE RS. 499, FREE DELIVERY OVER RS. 750</h6>
        </div>
        <div className="heading_wrapper">
            <div className="heading_wrapper_item">
                <div className="heading_left">
                    <h2>Fruit Box & Co.</h2>
                </div>
                <div className="heading_right">
                    <i class="fa-regular fa-user fa-beat-fade"></i>
                    <i class="fa-solid fa-magnifying-glass fa-beat-fade"></i>
                    <i class="fa-solid fa-bag-shopping fa-beat-fade"></i>
                </div>
            </div>
            <div className="horizontallist">
                <ul>
                    <li>
                        <a href="#">SALE</a>
                        <a href="#">FRUITS</a>
                        <a href="#">VEGETABLES</a>
                        <a href="#">EXOTIC VEGGIES</a>
                        <a href="#">BREADS</a>
                        <a href="#">GIFTING</a>
                        <div className="dropdown">
                            <div className='dropdown'>GOURMET CORNER</div>
                            <div className="dropdowm-content">
                                <a href="#">Cheese</a>
                                <a href="#">Gourmet Sauces</a>
                                <a href="#">Ice Cream & Desserts</a>
                                <a href="#">Organic</a>
                                <a href="#">Pasta</a>
                                <a href="#">Vegan</a>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    </div>  
    )
}
