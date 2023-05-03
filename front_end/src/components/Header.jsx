import React from 'react'
import '../components/Header.css'
import { BsSearch } from "@react-icons/all-files/bs/BsSearch"
import {logoImages} from '../helper/images'
function Header() {
  return (
    <div className='Header'>
      <nav className='container'>
        <div className="navigations">
          <div className="logo"> 

        <img src={logoImages.logoWhite} alt="logo/png" />
        </div>
        
        <ul className='flex'>
          <li>НАЧАЛО</li>
          <li>ОНЛАЙН ПАКЕТИ</li>
          <li>КОЙ Е ТАНЖУ ?</li>
          <li>КОНТАКТИ</li>
        </ul>
        </div>
        
        <div className='flex'>
           <div className="profile_icon">
              <i class="fa-regular fa-user"></i>
              <span>Вход</span>
            </div>
            <div className="search_icon">
              <BsSearch/>
            </div>
        </div>
      </nav>
       
    </div>
  )
}

export default Header
