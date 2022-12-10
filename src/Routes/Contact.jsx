import React, { useContext } from 'react'
import Form from '../Components/Form'
import { ContextGlobal } from '../Components/utils/global.context'
import styles from "./Contact.module.css"


const Contact = () => {
  const {theme} = useContext(ContextGlobal)
  return (
    <main className={theme === "dark" ? styles.contact + " dark "+ styles.dark: styles.contact }>
      <h2>Want to know more?</h2>
      <p>Send us your questions and we will contact you</p>
      <Form/>
    </main>
  )
}

export default Contact