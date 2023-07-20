
import image2 from '../images/formimg.PNG'
import '../styles/addfavourites.css'
import { useState } from 'react'
import {useNavigate} from 'react-router-dom'
const AddFav=()=>{

    let navigate=useNavigate()
    let[title,setname]=useState("")
    let[genere,setgenere]=useState("")
    let[lang,setlang]=useState("")
    let[rating,setrate]=useState("")

    let handlesubmit=(t)=>{
        t.preventDefault()
        let data={title,genere,lang,rating}
        fetch(' http://localhost:4001/movies',
        {
            method:'POST',
            headers:{'Content-Type' :'application/json'},
           body:JSON.stringify(data)

        })
        alert('movie added')
        navigate('/fav')

    }
    
    return(
        <div className="AddFav">

<div className='image1'>
<img src={image2} alt='image' height={200} width={150}></img>
</div>

<div className='form'>

<h1>Add Favourites</h1> 
 
<form action="" onSubmit={handlesubmit} className='addform'>

<div><input type='text' value={title} onChange={(e)=>(setname(e.target.value))} placeholder='Title'></input></div>
<div><input type='text' value={genere}  onChange={(e1)=>(setgenere(e1.target.value))} placeholder='Genere'></input></div>
<div><input type='text' value={rating} onChange={(e2)=>(setrate(e2.target.value))} placeholder='Rating'></input></div>
<div><input type='text' value={lang} onChange={(e3)=>(setlang(e3.target.value))} placeholder='Language'></input></div>
<div><button className='btn'>  Add  </button></div>

</form> 
</div>
         
        </div>


    )
}
export default AddFav;