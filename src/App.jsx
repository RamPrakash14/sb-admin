import React,{useState} from 'react'
import Sidebar from './components/Sidebar'
import Dashboard from './components/Dashboard'
import Class from './components/Class'
import User from './components/User'
import Query from './components/Query'
import AddUser from './components/AddUser'
import EditUser from './components/EditUser'

import {BrowserRouter,Routes, Route,Navigate} from 'react-router-dom'
function App() {
  let[user,setUser]=useState([
    {
      id:1,
      name:"Ram",
      email:"ram@gmail.com",
      mobile:"9080996708",
      batch:"B53T"
    },
    {
      id:2,
      name:"sam",
      email:"sam@gmail.com",
      mobile:"9080996709",
      batch:"B53T"
    },
    {
      id:3,
      name:"jam",
      email:"jam@gmail.com",
      mobile:"9080996700",
      batch:"B53T"
    },
  ])

  return <div id="wrapper">
    
    <BrowserRouter>
    <Sidebar/>
      <Routes>
        <Route path='/dashboard' element={<Dashboard user={user} setUser={setUser}/>}></Route>
        <Route path='/add-user' element={<AddUser user={user} setUser={setUser}/>}></Route>
        <Route path='/edit-user/:id' element={<EditUser user={user} setUser={setUser}/>}></Route>
        <Route path='/class' element={<Class/>}></Route>
        <Route path='/user' element={<User/>}></Route>
        <Route path='/query' element={<Query/>}></Route>
        <Route path='*'element={<Navigate to='/dashboard'/>}/>
      </Routes>
    </BrowserRouter>
  </div>
}

export default App