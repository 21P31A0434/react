import logo from './logo.svg';
import './App.css';
import About from './about';
import Home from'./home';
import Service from './service';
import Contact from './contact';
import Menu from './menu';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Trainees from './trainee';
import Event from './event';
import ColorGenerator from './random_colors';
import Hooks from './hooks';
import Products1 from './product1';
import Newproduct from './newproduct';
import Category from './categories';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Menu/>
      <Routes>
        <Route path="/"       element={<Home/>}/>
        <Route path="/about"  element={<About/>}/>
        <Route path="/service"element={<Service/>}/>
        <Route path="/contact"element={<Contact/>}/>
        <Route path="/trainee"element={<Trainees/>}/>
        <Route path="/event"  element={<Event/>}/>
        <Route path="/random_colors"  element={<ColorGenerator/>}/>
        <Route path="/hooks"  element={<Hooks/>}/>
        <Route path="/product1"  element={<Products1/>}/>
        <Route path="/newproduct"  element={<Newproduct/>}/>
        <Route path="/categories"  element={<Category/>}/>
        
      </Routes>
      </BrowserRouter>
    </div> 
  );
}

export default App;