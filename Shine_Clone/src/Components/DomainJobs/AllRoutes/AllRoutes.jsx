import React from 'react'
import {Routes,Route} from "react-router-dom"
import It from '../Pages/It'
import Sales from '../Pages/Sales'
import Finance from '../Pages/Finance'
import Marketing from '../Pages/Marketing'
import Telesales from '../Pages/Telesales'
import Hr from '../Pages/Hr'
import Other from '../Pages/Other'


function AllRoutes() {
  return (
    <div>
         <Routes>
          <Route path="/" element={<It/>}/>
          <Route path="/sales" element={<Sales/>} />
          <Route path="/finance" element={<Finance/>} />
          <Route path = "/marketing" element={<Marketing/>}/>
          <Route path = "/telesales" element={<Telesales/>} />
          <Route path="/hr" element={<Hr/>} />
          <Route path="/others" element={<Other/>} />
         </Routes>
    </div>
  )
}

export default AllRoutes