import React, { useState, useEffect } from 'react';
import { NavLink } from "react-router-dom";
import { Button } from './button';
import './Navbar.css';
import { FaGem } from 'react-icons/fa';






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
          {/* <NavLink to='/' className="navbar-logo" onClick={closeMobileMenu} width="55" > */}
            DIAMANT <FaGem />
  {/* </NavLink> */}
          <span className="navbar-owner"> A krishna jewellers' product</span>
          <div className="menu-icon" onClick={handleClick}>
            <i class={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>

          <ul className={click ? 'nav-menu active' : 'nav-menu'}>

            <li className='nav-item'>
              {/* <NavLink className='nav-links' onClick={closeMobileMenu}> */}
                All jewellery
              {/* </NavLink> */}
              </li>

            <li className='nav-item'>
              {/* <NavLink className='nav-links' onClick={closeMobileMenu}> */}
              22 Carot
            {/* </NavLink> */}
            </li>

            <li className='nav-item'> 
            {/* <NavLink className='nav-links' onClick={closeMobileMenu}> */}
              18 Carot
            {/* </NavLink> */}
            </li>

            {/* <li className='nav-item'>  */}
            {/* <NavLink className='nav-links' onClick={closeMobileMenu}> */}
              14 Carot
            {/* </NavLink> */}
            {/* </li> */}

          </ul>

          {button && <Button ButtonStyle='btn--outline'>SIGN UP </Button>}

        </div>

      </nav>

    </>
  );
}

export default Navbar;

