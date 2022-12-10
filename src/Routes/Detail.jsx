
import { useParams } from 'react-router-dom'
import { ContextGlobal } from '../Components/utils/global.context'
import { useContext } from 'react'
import { useMemo } from 'react'
import styles from './Detail.module.css'
import { useEffect } from 'react'
import { useState } from 'react'
import { useCallback } from 'react'


const Detail = () => {
  
  // Consumiendo el parametro dinamico de la URL deberan hacer un fetch a un user en especifico
  const actualParams = useParams()
  const {fetchApiFunction,theme} = useContext(ContextGlobal)
  const [objectInfo,setObjectInfo] = useState({})
  /* const objectInfo = useMemo(()=> data.find(e => e.id == actualParams.id),[actualParams.id,data])*///Lo habia hecho con el data del fetch global jeje
  
  const specificFetch = useCallback( async() =>{
    const responseJSON = await fetchApiFunction(actualParams.id)
    setObjectInfo(responseJSON)
  }, [actualParams.id, fetchApiFunction])
  
  useEffect(()=>{
    specificFetch()
  },[specificFetch])
  
  return (
    <main className={theme === "dark" ? styles.detail + " dark": styles.detail} >
      <h1>Detail Dentist {actualParams.id} </h1>
      <table>
        <tbody>
        <tr>
          <th>Name</th>
          <th>Email</th>
          <th>Phone</th>
          <th>Website</th>
        </tr>
        <tr>
          <td>{objectInfo.name}</td>
          <td>{objectInfo?.email}</td>
          <td>{objectInfo?.phone}</td>
          <td>{objectInfo?.website}</td>
        </tr>
        </tbody>
      </table>
    </main>
  )
}

export default Detail