import React from "react";
import { useCallback } from "react";
import {useLocation } from "react-router-dom";
import styles from '../Routes/Home.module.css'
import docImg from '../images/doctor.jpg'

const Card = ({ name, username, id, setStorageState }) => {
  const location = useLocation()

  const addFav = useCallback( (e)=>{
    e.preventDefault();
    const valueToSave = {name,username, id}
    const existentValue= JSON.parse( localStorage.getItem('favs'))
    const duplicate = existentValue?.some((e)=> e.id == valueToSave.id) 

    if(existentValue && duplicate){
      alert("It's already added to Favs!")
    }
    else if(existentValue){
      existentValue.push(valueToSave)
      localStorage.setItem('favs',JSON.stringify(existentValue))
      alert("Added to Favs!")
      
    }else{
      localStorage.setItem(`favs`,JSON.stringify([valueToSave]))
      
    }
    
    
  },[name,username,id])

  const removeFav = useCallback( (e)=>{
    e.preventDefault();
    /* const valueToDelete = {name,username, id} */
    const currentStorage = JSON.parse(localStorage.getItem('favs'))
    const newStorage = currentStorage.filter( element => element.id != id)
    localStorage.setItem('favs', JSON.stringify(newStorage))
    setStorageState(JSON.parse( localStorage.getItem('favs')))
    alert('Removed from favs!')

  },[id])

  

  return (
    <div className={styles.card}>
      <img
          src={docImg}
          alt="doctor placeholder"
        />
        <h3> {name} </h3>
        <p>{`ID: #${id}`} </p>
        <p> {`Username: ${username}`}</p>
        <button onClick={location.pathname === '/home' ? addFav:removeFav} className={styles.favButton}>
          {location.pathname === '/home' ? 'Add to Favs':'Remove'}
        </button>
    </div>
  );
};

export default Card;
