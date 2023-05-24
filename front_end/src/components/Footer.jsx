import React from 'react'
import './Footer.css'
import { logoImages } from '../helper/images'


function Footer() {
  return (
    <div>
      <div className="footer_container">
        <div className="information_board_grid">
            <div className="categories">
                <h1>КАТЕГОРИИ</h1>
                <ul>
                    <li></li>
                    <li></li>
                </ul>
            </div>
            <div className="online_packages">
                <h1>ОНЛАЙН ПАКЕТИ</h1>
                <ul>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                </ul>
            </div>
                <div className="others">
                    <h1>ДРУГИ</h1>
                    <ul>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                    </ul>
                    
                </div>
                <div className="custumer_services">
                    <h1>ОБСЛУЖВАНЕ НА КЛИЕНТИ</h1>
                    <ul>
                        <li></li>
                        <li></li>
                        <li></li>
                    </ul>
                </div>
           
        </div> 
        <div className="map_container">
                <div className="mapouter"><div class="gmap_canvas"><iframe width="100%" height="100%" id="gmap_canvas" src="https://maps.google.com/maps?q=ruse,ul.madarski konnik&t=&z=10&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe></div></div>
        </div>
        <div className="social_media_container">
            <div className="logo">
                <img src={logoImages.logoWhite} />
            </div>
            <div className="social_media">
                <ul>
                    <li><a href=""><i class="fa-brands fa-instagram"></i></a></li>
                    <li><a href=""><i class="fa-brands fa-linkedin"></i></a></li>
                    <li><a href=""><i class="fa-brands fa-facebook"></i></a></li>
                    <li><a href=""><i class="fa-brands fa-twitter"></i></a></li>
                </ul>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Footer;
