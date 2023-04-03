import { slide as Menu } from 'react-burger-menu'
import { GiHamburgerMenu } from 'react-icons/gi'
import { AiOutlineClose } from "react-icons/ai"
import { useState } from 'react'


export default function Menju(props) {
    const [isOpen, setOpen] = useState(false)

    const handleIsOpen = () => {
      setOpen(!isOpen)
    }
  
    const closeSideBar = () => {
      setOpen(false)
    }

    const styles = {
        bmBurgerButton: {
          width: '24px',
          height: '24px',
          position: 'relative'
        },
        button: {
            position: "absolute"
        },
        bmCrossButton: {
          height: '24px',
          width: '24px',
          margin: "20px 20px"
        },
        bmCross: {
          background: 'transparent'
        },
        bmMenuWrap: {
          position: 'absolute',
          top: '0',
          height: "100%",
          minHeight: '100vh'
        },
        bmMenu: {
          background: props.darkMode ? '#000000' : '#FFFFFF',
          padding: '2.5em 1.5em 0',
          fontSize: '1.15em'
        },
        bmMorphShape: {
          fill: '#373a47'
        },
        bmItemList: {
          padding: '0.8em',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'column'
        },
        bmItem: {
          display: 'inline-block',
          marginTop: '20px'
        },
        bmOverlay: {
          background: 'rgba(0, 0, 0, 0.3)',
          width: "100vw",
          height: "100vh",
          position: "absolute",
          top: "0",
          left: "0",
          display: isOpen ? 'block' : 'none'
        },
      }

    return(
        <>
        {/* <GiHamburgerMenu onClick={toggleIsOpen} /> */}
        <Menu styles={styles} right customBurgerIcon={ <GiHamburgerMenu /> } customCrossIcon={ <AiOutlineClose /> } onOpen={handleIsOpen} onClose={closeSideBar} isOpen={isOpen} >
                    <li className={props.darkMode ? "nav--link nav--link--dark" : "nav--link"} onClick={closeSideBar}><a href="#about">ABOUT</a></li>
                    <li className={props.darkMode ? "nav--link nav--link--dark" : "nav--link"} onClick={closeSideBar}><a href="#projects">PROJECTS</a></li>
                    <li className={props.darkMode ? "nav--link nav--link--dark" : "nav--link"} onClick={closeSideBar}><a href="#skills">SERVICES</a></li>
                    <li className={props.darkMode ? "nav--link nav--link--dark" : "nav--link"} onClick={closeSideBar}><a href="#contact">CONTACT</a></li>
        </Menu>
        </>
    );
}