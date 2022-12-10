import React from "react";
import { useCallback } from "react";
import { useState } from "react";
import styles from "../Routes/Contact.module.css"

const Form = () => {

  const [formState, setFormState] = useState({name:'',email:'', notValidInputs:false, notValidSubmit:false})

  const  handleInputChange = useCallback( (e)=> {
    setFormState(prev => {
      const newFormState = { ...prev }
      newFormState[e.target.name] = e.target.value
    return newFormState} )
  },[])

  const onInvalidInputs = (e) =>{
    e.preventDefault()
    console.log(e.target.name)
    setFormState(prev => {
      const newFormState = { ...prev }
      newFormState["notValidInputs"] = true
    return newFormState} )
    }
  

  const onSubmitHandler = (e)=>{
    e.preventDefault()
    console.log("submit")
    setFormState(prev => {
      const newFormState = { ...prev }
      newFormState["notValidSubmit"] = true
      newFormState["notValidInputs"] = false
    return newFormState})
    
    }
 
  console.log(formState)

  return (
    <>
      <form className={styles.contactForm} onSubmit={onSubmitHandler} >
        
          <label htmlFor="name">Name</label>
          <input required type="text" name="name" 
          placeholder="Luis" 
          minLength="5"
           value={formState.name} 
          onChange={handleInputChange} 
          onInvalid={onInvalidInputs} 
          />
        
        
          <label htmlFor="email">Email</label>
          <input required={true} type="email" name="email" 
          placeholder="Messinaldo@gmail.com" 
          value={formState.email} 
          onInvalid={onInvalidInputs} 
          onChange={handleInputChange}/>
        
        <input className={styles.submit} type="submit" value="Submit" disabled={formState.notValidSubmit}  />
      </form>
      <span className={styles.fail} > { formState.notValidInputs &&  "Please verify your information and try again"  } </span>
      <span className={styles.success} > { formState.notValidSubmit &&  `Submitted, thanks ${formState.name} we'll be contacting you soon`  } </span>
    </>
    
  );
};

export default Form;
