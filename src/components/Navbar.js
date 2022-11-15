import React, { useState, useEffect } from 'react';
 import { NavLink } from "react-router-dom";
import { Button } from './button';
import './Navbar.css';
import { FaGem, FaShoppingBag } from 'react-icons/fa';
import deer from '../images/deer.png';






 
function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    }
    else {
      setButton(true);
    }

  };
  useEffect(() => {
    showButton();
  }, []);


  window.addEventListener('resize', showButton);

  return (


    <>


      <nav className="navbar">
        <div className="navbar-container" >
          <NavLink to='/' className="navbar-logo" onClick={closeMobileMenu} width="55" as={NavLink} > 
            DIAMANT <FaGem />
   </NavLink> 
          <span className="navbar-owner"> A krishna jewellers' product</span>
          <div className="menu-icon" onClick={handleClick}>
            <i class={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>

          <ul className={click ? 'nav-menu active' : 'nav-menu'}>

            <li className='nav-item'>
               <NavLink to='/' className='nav-links' onClick={closeMobileMenu}> 
                Home
              </NavLink> 
              </li>

            <li className='nav-item'>
              <NavLink to='/' className='nav-links' onClick={closeMobileMenu}> 
              Store
            </NavLink> 
            </li>

            <li className='nav-item'> 
             <NavLink to='/' className='nav-links' onClick={closeMobileMenu}> 
              About
            </NavLink>
            </li>

           {/* <li className='nav-item'>  
             <NavLink to='/' className='nav-links' onClick={closeMobileMenu}> 
              About
             </NavLink> 
  </li> */}

          </ul>

          {button && <Button ButtonStyle='btn--outline'> <FaShoppingBag/> </Button>}
          

        </div>

      </nav>

      <div> <img className='firstimage'src= {deer} alt="diamondpendant"/> </div>


     

       

      

    </>
  );
}



export default Navbar;

