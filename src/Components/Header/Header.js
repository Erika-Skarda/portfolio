import React, { Component, useState } from 'react';

import { Container, 
        Navigation,
        Img, 
        Link, 
        MenuIconStyled,
        WrapperMobile  } from './styled';

import { Toolbar, IconButton, Menu } from "@material-ui/core"

  
function Header() {
  
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = useState(null)
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl)
  
  const handleMobileMenuOpen = (event) => { 
    setMobileMoreAnchorEl(event.currentTarget)
    
  }
  
  const handleMobileMenuClose = () => { setMobileMoreAnchorEl(null) }

  const mobileMenuId = 'primary-search-account-menu-mobile'
  const renderMobileMenu =
      <Menu
          anchorEl={mobileMoreAnchorEl}
          anchorOrigin={{ vertical: 'top' }}
          id={mobileMenuId}
          keepMounted
          transformOrigin={{ vertical: 'top' }}
          open={isMobileMenuOpen}
          onClose={handleMobileMenuClose}
      >
           {/* <img src={require("../../img/perfil.png")}></img> */}
              <Link href="#about">quem sou</Link>
              <Link href="#projects">projetos</Link>
              <Link href="#hireme">contato</Link>             
      </Menu>

    return (
        <Container>

          <Toolbar>
            <Navigation>
              <Link href="#about">quem sou</Link>
              <Link href="#projects">projetos</Link>
              <Link href="#hireme">contato</Link>        
            </Navigation>

            <WrapperMobile>
                    <IconButton
                        aria-label="show more"
                        aria-controls={mobileMenuId}
                        aria-haspopup="true"
                        onClick={handleMobileMenuOpen}
                        color="primary"

                    >
                        <MenuIconStyled />
                    </IconButton>
               </WrapperMobile>
           </Toolbar>

         
          {renderMobileMenu}
      
        </Container>
    );
  
}


export default Header;

  






