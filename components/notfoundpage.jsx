import { Link } from "react-router-dom";

const NotFoundPage=()=>{
    return(
        <div className="NotFound">


            <h1> 404 - Page Not Found </h1>
            <Link to='/'>Go Back to Home</Link>
        </div>
    )
}
export default NotFoundPage;