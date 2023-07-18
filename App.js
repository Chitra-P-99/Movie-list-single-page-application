import Home from "./components/home"

import './App.css';

import Navbar from'./components/navbar';
import Secnavbar from "./components/secnavbar";
import Favourites from "./components/favourites";

import{BrowserRouter,Routes,Route} from 'react-router-dom';
import AddFav from "./components/addfavourites";
import NotFoundPage from "./components/notfoundpage";
<link
  rel="stylesheet"
  href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css"
  integrity="sha384-rbsA2VBKQhggwzxH7pPCaAqO46MgnOM80zW1RWuH61DGLwZJEdK2Kadq2F9CUG65"
  crossorigin="anonymous"
/>


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar/>
      
     <Routes>
     <Route  path="/" element={<Home></Home>}> </Route>
      <Route path="/fav" element={<Favourites/>}></Route>
      <Route path="/addfav" element={<AddFav/>}></Route>
      <Route path="*" element={<NotFoundPage/>}></Route>
     </Routes>
      </BrowserRouter>
      
    
      
    </div>
  );
}

export default App;
