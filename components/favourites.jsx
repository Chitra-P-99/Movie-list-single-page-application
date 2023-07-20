

import { useState ,useEffect} from "react";
import '../styles/favourite.css'
import Favlogic from "./favouriteslogic";

const Favourites=()=>{
let [mlist,setmovies]=useState([])
   
    let remove=(id)=>{
        let result=mlist.filter((t)=>t.id!==id)
        setmovies(result)
    }
    let removeall=(id)=>{
        setmovies([])
    }
    useEffect(()=>{
        let fetchdata=async()=>{
            let response=await fetch(' http://localhost:4001/movies')
            let data=await response.json();
            setmovies(data)
            
        }
        fetchdata()
        
    },[])
    return(
        <div className="favourites">
            <Favlogic mov={mlist} rem={remove} rema={removeall}/>
       
            </div> 
           
        )  
}
export default Favourites;