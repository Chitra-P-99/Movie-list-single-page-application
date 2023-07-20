import '../styles/favourite.css'
import DeleteIcon from '@mui/icons-material/Delete';
const Favlogic=(props)=>{
    let movies=props.mov;
    let removeall=props.rema;
    let remove =props.rem;
    return(
        <div className="Favourites">

        <h1>Favourite Movies</h1>
        <h3>Count :{movies.length}</h3>
     <button onClick={removeall}>Remove All</button> 
        {movies.map((x)=>(
          
            <div className="favlist">
            <p>Title :{x.title}</p>
            <p>Genere :{x.genere}/ Rating :{x.rating}</p>
           <button onClick={()=>{remove(x.id)}}><DeleteIcon  /></button>
            </div>
             ) )}
             <div className="last">
                <h1></h1>
             </div>
    
              </div> 
              
    )
}
export default Favlogic;