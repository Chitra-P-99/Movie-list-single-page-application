import image1 from "../images/image1.avif"
import image2 from '../images/image2.avif'
import image3 from '../images/image3.avif'
import image4 from '../images/image4.avif'
import image5 from '../images/image5.avif'
import  '../styles/movies.css'

const Movies=()=>{

    let movies1=[
     {image:image1,title:"Poniyen",genere:"action/Drama/Comedy"},
    {image:image2,title:"Poniyen",genere:"action"},
    {image:image3,title:"Poniyen",genere:"action"},
    {image:image4,title:"Poniyen",genere:"action"},
    {image:image5,title:"Poniyen",genere:"action"}
]
return (
    <div className="main">
    <div className="heading">
    <h2>Recommended Movies</h2>
    <p>See All </p>
</div>
    <div className="movies">
        {movies1.map((data)=>{
            return(
                <div className="movieslist">
            <img height={300} width={230} src={data.image}alt="" />
            <p>{data.title}</p>
            <p>{data.genere}</p>
            </div>
            )
        })}
    </div>
    </div>
)
}
export default Movies;