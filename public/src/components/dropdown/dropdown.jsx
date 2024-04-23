import { useState, useEffect, useRef } from "react";

import { useTranslation } from 'react-i18next';

import './dropdown.css'

const DropdownLang = () => {
    
    const [t, i18n] = useTranslation("global");

    const [selectedLan, setSelectedLan] = useState('');

    const [open, setOpen] = useState(false);

    let menuRef = useRef();

    useEffect(() => {
        let handler = (e)=>{
          if(!menuRef.current.contains(e.target)){
            setOpen(false);
            console.log(menuRef.current);
          }      
        };
    
        document.addEventListener("mousedown", handler);
        
    
        return() =>{
          document.removeEventListener("mousedown", handler);
        }
    
      });


    const handleSelectLan = (lan) => {
        setSelectedLan(lan);
        i18n.changeLanguage(lan);
    };
    

   

    return(
        <div className="dropdown">
            <div className="menu-container" ref={menuRef}>
                <div className="menu-trigger" >
                    <p onClick={() => {setOpen(!open)}}>{t ('idioma.seleccionIdioma')}</p>
                </div>
                <div className={`dropdown-menu ${open? 'active' : 'inactive'}`}>
                    <ul>
                        <li className="dropdownItem">
                            <img src="/img/spain.png" alt="" />
                            <p>Español</p>
                        </li>
                        <li className="dropdownItem">
                            <img src="/img/england.png" alt="" />
                            <p>English</p>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
    

}

export default DropdownLang