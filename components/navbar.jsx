
import logo from '../images/logo.svg';
import '../styles/navbar.css';

import { Link } from 'react-router-dom';
let Navbar=()=>
{
    return(
<div className="navbar ">
<div className='logo'>
<div className='image'>
<img src={logo} alt=" "></img>
</div>
<div className="search">

    <input type="text" placeholder='search for movies,events,plays,sports,and acivites'/>

</div>
</div>
<div className='links'>

     {/* <div className='nav_links'>
        <ul>

            <li><Link to="/" >Home</Link></li>
            <li><Link to="/fav" >Favourite</Link></li>
            <li><Link to="/addfav">Add Favourites</Link></li>

        </ul>
    </div>   */}

    {/* <div className="dropdownbox">
        <select name="" id="">
            <option value="Chennai">Chennai</option>
            <option value="Bangalore">Bangalore</option>
            <option value="Mumbai">Mumbai</option>
        </select>
    </div> */}


    
   
<a href=""  class="  text-secondary " data-bs-toggle="modal"    aria-expanded="false" data-bs-target="#exampleModal">
  Launch demo modal
</a>

<div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog modal-lg">
    <div class="modal-content">
      <div class="modal-header">
        <input class=" form-control-sm  border-0 border-white border-opacity-10 " type="text" placeholder="search for your city" width={70}></input>
       
      </div>
      <div class="modal-body">
      <div class="text-dark position-absolute bottom-50 end-50">
        <h6>Popular Cities</h6>
      </div>
      <div>
        <img src="https://in.bmscdn.com/m6/images/common-modules/regions/mumbai.png" alt="png"></img>
        <img src="https://in.bmscdn.com/m6/images/common-modules/regions/ncr.png" alt="png"></img>
        <img src="https://in.bmscdn.com/m6/images/common-modules/regions/bang-selected.png" alt="png"></img>
        <img src='https://in.bmscdn.com/m6/images/common-modules/regions/hyd.png' alt=''></img>
        <img src='https://in.bmscdn.com/m6/images/common-modules/regions/ahd.png'></img>
        <img src='https://in.bmscdn.com/m6/images/common-modules/regions/chd.png'></img>
        <img src="https://in.bmscdn.com/m6/images/common-modules/regions/chen.png"></img>
        <img src="https://in.bmscdn.com/m6/images/common-modules/regions/pune.png"></img>
        <img src="https://in.bmscdn.com/m6/images/common-modules/regions/kolk.png"></img>

        <img src="https://in.bmscdn.com/m6/images/common-modules/regions/koch-selected.png"></img>

      </div>
      </div>
      <div class="modal-footer">
        
      </div>
    </div>
  </div>
</div>
</div>
    <div className='nav_button'>
        <button class="btn btn-danger">Sign in</button>
    
</div>
</div>
    )
}
export default Navbar;

