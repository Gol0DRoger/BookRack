import React from 'react'
import {Routes, Route} from 'react-router-dom';
import Home from './pages/Home';
import CreateBooks from './pages/createBook';
import DeleteBook from './pages/deleteBook';
import EditBook from './pages/EditBook';
import ShowBook from './pages/showBook';

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/books/create' element={<CreateBooks/>}/>
      <Route path='/books/details/:id' element={<ShowBook/>}/>
      <Route path='/books/edit/:id' element={<EditBook/>}/>
      <Route path='/books/delete/:id' element={<DeleteBook/>}/>
    </Routes>
  )
}

export default App
