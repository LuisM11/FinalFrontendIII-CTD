import React, { useContext } from 'react'
import { ContextGlobal } from './utils/global.context'
import Logo from '../images/DH.png'

const Footer = () => {
  const {theme} = useContext(ContextGlobal)
  return (
    <footer className={theme === "dark" ? "dark":''}>
        <p>Powered by</p>
        <img src= {Logo} alt='DH-logo' />
    </footer>
  )
}

export default Footer
