import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Card } from './Card'
import { SingleUser } from './SingleUser'

export const AllRoutes = () => {
  return (
    <div>
        <Routes>
            <Route path='/' element={<Card/>} ></Route>
            <Route path='/user/:id' element={<SingleUser/>} ></Route>
        </Routes>
    </div>
  )
}
