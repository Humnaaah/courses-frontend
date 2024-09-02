import React,{useState} from 'react';
import Logo from '../styles/assets/nut-logo.png';
import Avatar from '@mui/material/Avatar';


const NavigationBar = ({navList})=>{
    console.log("the list is", navList[0].title)
    const [showNav, setShowNav] = useState(false);
    const [activeElem, setActiveElem] = useState(false);

    const toggleActive = ()=> {
        setActiveElem(!activeElem)
      }
 
      return(
        <nav className={`nav ${showNav ? 'open' : 'collapsed' }`}>
            <div className='nav-head'>
            <a href="#nogo" 
           className="nav__toggle" 
           aria-label="Toggle showing/hiding navigation"
        > <img src={Logo} alt="logo" className='logo-img'/> </a>
            <img src="https://imgs.search.brave.com/JPOWjD3wHZvVTaPJAzxiyIl53nX3mNo57_AuSyVgsfw/rs:fit:474:225:1/g:ce/aHR0cHM6Ly90c2Ux/LmV4cGxpY2l0LmJp/bmcubmV0L3RoP2lk/PU9JUC43Y003SUp5/SzhBcmJmT0UzVmpS/ckx3SGFIYSZwaWQ9/QXBp" alt="avatar" className='avatar' />
            </div>
       
        <ul className="nav-list">
            {navList.map((item,i)=>
                <li className={`${item.active ? "selected" : ""}`} key={i} >
                     <img src={item.icon} className="nav-list-icon" alt={item.title}/>
                </li>
            )}
        </ul>
      </nav>
      )
}

export default NavigationBar