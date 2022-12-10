/* import { useState } from "react"; */
import { useReducer } from "react";
import { useCallback } from "react";
import { useEffect } from "react";
import { createContext } from "react";

export const initialState = {theme: "light", data: []}

export const ContextGlobal = createContext(undefined);

function reducer (state,action){
  switch(action.type){
    case "fetching":{
      let newState = {...state, data:action.payload}
      return newState
    }
    case "changeTheme":{
      let newState = {...state, theme:action.payload}
      return newState
    }
    default:
      break     
  }
}

function init(initalValue){
  return localStorage.getItem("theme") ? {...initalValue,theme:localStorage.getItem("theme")}: initalValue
}

export const ContextProvider = ({ children }) => {
  //Aqui deberan implementar la logica propia del Context, utilizando el hook useMemo
  /* const [fetchData, setFetchData] = useState([]) */
  const [globalState,dispatch ] = useReducer(reducer,initialState,init)

  const toggleTheme = useCallback( () => {
    console.log(globalState.theme)
    if (globalState.theme === 'light') {
      dispatch({type:"changeTheme", payload:"dark"})
      localStorage.setItem('theme', 'dark')
    } else {
      dispatch({type:"changeTheme", payload:"light"})
      localStorage.setItem('theme', 'light')
    }
  },[globalState.theme])

  
  const fetchApiFunction = useCallback( async (id='')=>{
    
    try{
      const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
      const responseJSON = await response.json()
      console.log(responseJSON)
      id ==='' && dispatch({type:"fetching", payload:responseJSON})
      return responseJSON
    }
    catch(e){
      console.log(e)
    }

  },[])

  useEffect( ()=> {
    fetchApiFunction()
  },[fetchApiFunction])

  return (
    <ContextGlobal.Provider value={{...globalState,toggleTheme,fetchApiFunction}}>
      {children}
    </ContextGlobal.Provider>
  );
};
