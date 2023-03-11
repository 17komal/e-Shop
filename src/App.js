import Home from './Routes/Home/Home.component';
import './style/main.style.scss';
import { Routes, Route } from 'react-router-dom';
import Navigation from './Routes/Navigation/Navigation.component';
import Login from './Routes/Auth/Login/Login.component';
const Shop = () =>{
  return(
    <div>Shop element</div>
  );
};

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Navigation />} >
        <Route index  element={<Home />} />
        <Route  path='/shop' element={<Shop />} />
        <Route  path='/login' element={<Login />} />
      </Route>
    </Routes>

  );
}

export default App;


// e-shop-7c36f


