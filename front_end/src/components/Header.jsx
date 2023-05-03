import React from 'react'
import '../components/Header.css'
import { BsSearch } from "@react-icons/all-files/bs/BsSearch"

function Header() {
  return (
    <div className='Header'>
      <nav className='container'>
         <h1>LOGO</h1>
        <ul className='flex'>
          <li>НАЧАЛО</li>
          <li>ОНЛАЙН ПАКЕТИ</li>
          <li>КОЙ Е ТАНЖУ ?</li>
          <li>КОНТАКТИ</li>
        </ul>
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
