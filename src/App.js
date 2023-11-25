
import './App.css';
import Menus from './Components/Menu/Menus';
import { Nav } from './Components/Navbar/Nav';
import Footer from './Components/Footer/Footer';
import Signup from './Components/Signup/Signup';
import Login from './Components/Login/Login';
import { BrowserRouter , Routes , Route } from 'react-router-dom';
import PrivateComponents from './Components/PrivateComponents';



function App() {

  return(  <>

    <BrowserRouter>
    <Nav/>
    <Routes>
      <Route element={<PrivateComponents/>}/>
      < Route path='/' element={<Menus/>} />
      < Route path='/add' element={<h1>ADD Products </h1>} />
      < Route path='/update' element={<h1>update Products </h1>} />
      < Route path='/logout' element={<h1>Logout Here... </h1>} />
      < Route path='/signup' element={<Signup/>} />
      < Route path='/login'  element={<Login/>}/>
      
      < Route path='/profile' element={<h1>Profile </h1>} />

    </Routes>
  

    </BrowserRouter>
    
    </>
  
   
  );
}

export default App;
