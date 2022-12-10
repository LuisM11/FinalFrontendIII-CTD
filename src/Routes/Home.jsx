import React from 'react'
import { useContext } from 'react'
import { Link } from 'react-router-dom'
import Card from '../Components/Card'
import { ContextGlobal } from '../Components/utils/global.context'
//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Home = () => {
  const {data,theme} = useContext(ContextGlobal)
  return (
    
    <main className={theme === "dark" ? "dark":''} >
      <h1>Home</h1>
      
      <div className='card-grid'>
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