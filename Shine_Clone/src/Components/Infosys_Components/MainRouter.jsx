import React from 'react'
import { Route, Routes } from 'react-router-dom'
import InfosysComponents from './InfosysComponents'

function MainRouter() {
  return (
    <div>
        <Routes>
            <Route path="/infosyscomponents" element={<InfosysComponents/>}/>
        </Routes>
    </div>
  )
}

export default MainRouter