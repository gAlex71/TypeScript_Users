import React from 'react';
// npm i react-router-dom @types/react-router-dom
import {Routes, Route, NavLink} from 'react-router-dom'
import TodoItemPage from './components/TodoItemPage';
import TodosPage from './components/TodosPage';
import UserItemPage from './components/UserItemPage';
import UsersPage from './components/UsersPage';

const App = () => {
  return (
      <Routes>
        <Route path="/users" element={<UsersPage/>}/>
        <Route path="/todos" element={<TodosPage/>}/>
        <Route path="/users/:id" element={<UserItemPage/>}/>
        <Route path="/todos/:id" element={<TodoItemPage/>}/>
      </Routes>
  )
}

export default App;
