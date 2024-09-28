import React from 'react'
import { Routes, Router, Route } from 'react-router-dom'
import CreateContact from '../Components/CreateContact'
import EditPage from '../Components/EditPage'
import HomePage from '../Components/HomePage'
import LoginPage from '../Components/LoginPage'


const CompRouter = () => {
  return (
    <Routes>
        <Route path='/' element={<LoginPage />}/>
        <Route path='/homepage'element={<HomePage />} />
        <Route path='/:id'element={<EditPage />}/>
        <Route path='/createContact' element={<CreateContact />}/>
    </Routes>
  )
}

export default CompRouter
