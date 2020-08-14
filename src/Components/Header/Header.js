import React, { Component, useState } from 'react';

// import { Container, 
//         Navigation,
//         Img, 
//         Link, 
//         LinkHome,
//         MenuIconStyled,
//         WrapperMobile  } from './styled';

import { NavBar, NavMenu, HambIcon } from "./styled"

import { Toolbar, IconButton, Menu } from "@material-ui/core"


function Header() {

  const [hambDisplay, setHambDisplay] = React.useState(false)
  const toogleHambDisplay = () => {
    setHambDisplay(!hambDisplay)
  }

  return (

    <NavBar>
      <NavMenu open={hambDisplay}>
        <li><a onClick={toogleHambDisplay}
          href="#about">quem sou
        </a></li>
        <li><a onClick={toogleHambDisplay}
          href="#skills">habilidades
          </a></li>
                        <li><a onClick={toogleHambDisplay}
                href="#projects">projetos</a></li>
                        <li><a onClick={toogleHambDisplay}
                href="#hireme">contato</a></li> 
                        <li><a onClick={toogleHambDisplay}
                href="#education">educação</a></li>
      </NavMenu>
      <HambIcon onClick={toogleHambDisplay} >
        <p href="">
          <i class="fa fa-bars"></i>
        </p>
      </HambIcon>
    </NavBar>
  )
}
  
  export default Header;
  
  //   const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = useState(null)
  //   const isMobileMenuOpen = Boolean(mobileMoreAnchorEl)
  
//   const handleMobileMenuOpen = (event) => { 
//     setMobileMoreAnchorEl(event.currentTarget)
    
//   }
  
//   const handleMobileMenuClose = () => { setMobileMoreAnchorEl(null) }

//   const mobileMenuId = "simple-menu"
//   const renderMobileMenu =
//       <Menu
//           anchorEl={mobileMoreAnchorEl}
//           anchorOrigin={{ vertical: 'top' }}
//           id={mobileMenuId}
//           keepMounted
//           transformOrigin={{ vertical: 'top' }}
//           open={isMobileMenuOpen}
//           onClose={handleMobileMenuClose}
//           style={{backgroundColor:"transparent"}}
//       >
           
//               <Link href="#about">quem sou</Link>
//               <Link href="#skills">habilidades</Link>
//               <Link href="#education">educação</Link>
//               <Link href="#projects">projetos</Link>
//               <Link href="#hireme">contato</Link>             
//       </Menu>

//     return (
//         <Container>
//               {/* <LinkHome href="#home">Erika</LinkHome> */}
//           <Toolbar>
//             <Navigation>
//               <Link href="#about">quem sou</Link>
//               <Link href="#skills">habilidades</Link>
//               <Link href="#education">educação</Link>
//               <Link href="#projects">projetos</Link>
//               <Link href="#hireme">contato</Link>        
//             </Navigation>

//             <WrapperMobile>
//                     <IconButton
//                         aria-label="show more"
//                         aria-controls={mobileMenuId}
//                         aria-haspopup="true"
//                         onClick={handleMobileMenuOpen}
//                         color="primary"

//                     >
//                         <MenuIconStyled />
//                     </IconButton>
//                </WrapperMobile>
//            </Toolbar>

         
//           {renderMobileMenu}
      
//         </Container>
//     );
  
// }


  






