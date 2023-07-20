

import "../styles/carousel.css"

import slide1 from '../images/caros1.avif'
import slide2 from '../images/caros3.avif'
import slide3 from '../images/slide3.avif'
import slide4 from '../images/caros4.avif'
 
const Carousel=()=>{
    return(
    <div className="carousel ">

<div id="carouselExampleAutoplaying" class="carousel slide " data-bs-ride="carousel">
  <div class="carousel-inner px-3 pt-3 pe-3 mx-3 w-100">
    <div class="carousel-item active ">
      <img src= {slide1} class="d-block w-100 " alt="..." />
    </div>
    <div class="carousel-item">
      <img src={slide2} class="d-block w-100" alt="..." />
    </div>
    <div class="carousel-item">
      <img src={slide3} class="d-block w-100" alt="..." />
    </div>
    <div class="carousel-item">
      <img src={slide4} class="d-block w-100" alt="..." />
    </div>
  </div>
  <button class="carousel-control-prev " type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
    <span class="carousel-control-prev-icon bg-secondary   pe-5" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
    <span class="carousel-control-next-icon bg-secondary pe-5 " aria-hidden="true"></span>
    <span class="visually-hidden ">Next</span>
  </button>
</div>

    </div>
    );
    }
    export default Carousel;
