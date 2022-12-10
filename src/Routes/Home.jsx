import React from 'react'
import { useContext } from 'react'
import { Link } from 'react-router-dom'
import Card from '../Components/Card'
import { ContextGlobal } from '../Components/utils/global.context'
import styles from './Home.module.css'

const Home = () => {
  const {data,theme} = useContext(ContextGlobal)
  return (
    
    <main className={theme === "dark" ? styles.dark+ " dark":''} >
      <h1>Home</h1>
      
      <div className={styles['card-grid']}>
        {data?.map( object => {
          return(
            <Link key={object.id} to={`/dentist/${object.id}`}> 
            <Card  id={ object.id} name={object.name} username={object.username}/>
            </Link>
            )
        } )}
      </div>
    </main>
  )
}

export default Home