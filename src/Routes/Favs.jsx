import React, { useEffect } from "react";
import Card from "../Components/Card";
import { Link } from 'react-router-dom'
import { useState } from "react";
import { useContext } from "react";
import { ContextGlobal } from "../Components/utils/global.context";
import styles from './Home.module.css'

const Favs = () => {
  const [storageState,setStorageState] = useState([])//uso de State para visualizar de inmediato el render al remover una card en favs
  const {theme} = useContext(ContextGlobal)
  useEffect( ()=>{
    setStorageState( JSON.parse(localStorage.getItem('favs')) )

  },[])

  return (
    <main className={theme === "dark" ? styles.favs + " dark "+ styles.dark: styles.favs} >
      <h1>Favs Dentists </h1>
      <div className={styles["card-grid"]}>
        {storageState!= null && storageState.length !=0 && storageState?.map((element)=>{
          return(
            <Link key={element.id} to={`/dentist/${element.id}`}> 
            <Card  id={ element.id} name={element.name} username={element.username} setStorageState={setStorageState}/>
            </Link>
          )
        }) }

      </div>
    </main>
  );
};

export default Favs;
