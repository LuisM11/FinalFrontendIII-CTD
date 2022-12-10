import React, { useContext } from 'react'
import styles from "./Navbar.module.css"
import { ContextGlobal } from './utils/global.context'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faSun} from "@fortawesome/free-solid-svg-icons"
import { Link } from 'react-router-dom'

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Navbar = () => {
  const {toggleTheme,theme} = useContext(ContextGlobal)
 

  return (
    <header className={theme === "dark" ? styles.dark + ' dark':''}>
      <h2>DH Odonto </h2>
    <nav>
      <ul>
        <li> <Link to={`/home`}> Home </Link> </li>
        <li><Link to={`/contact`}> Contact </Link></li>
        <li><Link to={`/favs`}> Favs </Link></li>
        <button className={styles.themeButton} onClick={toggleTheme}> <FontAwesomeIcon icon={faSun} />  Theme</button>
    
        
        
      </ul>
    </nav>
    </header>
  )
}

export default Navbar