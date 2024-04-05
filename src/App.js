
import logo from './logo.svg';

import './App.css';

import Navbar from './components/Navbar';

import ViewEmployee from './components/ViewEmployee';

import AddEmployee from './components/AddEmployee';

import { Route, Routes } from 'react-router-dom';

function App() {

 return (

   <div className="App">

<Navbar/>

   <Routes>

     <Route path='/' element={<ViewEmployee/>}/>

     <Route path='/add' element={<AddEmployee/>} />

   </Routes>

   </div>

 );

}

export default App;