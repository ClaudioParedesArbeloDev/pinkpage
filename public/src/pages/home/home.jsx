/* import { useTranslation } from 'react-i18next'
import { useState, useEffect } from 'react';
 */
import DarkMode from '../../components/darkMode/darkMode';
import DropdownLang from '../../components/dropdown/dropdown';
import Login from '../../components/login/login';
import Footer from '../../components/footer/footer';


import './home.css'

const Home = () => {

    
    return(
        <div className='home'>
            <DarkMode className="darkMode"/>
            <DropdownLang className="dropdown"/>
            <img src="/img/logo.png" className='logo' alt="" />
            <Login className='login' />
            <div className='footer'>
            <Footer />
            </div>
        </div>
    )

}

export default Home;