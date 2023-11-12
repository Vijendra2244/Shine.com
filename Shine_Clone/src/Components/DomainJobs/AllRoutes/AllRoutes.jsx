import React from 'react'
import {Routes,Route} from "react-router-dom"
import It from '../Pages/It'
import Sales from '../Pages/Sales'
import Finance from '../Pages/Finance'
import Marketing from '../Pages/Marketing'
import Telesales from '../Pages/Telesales'
import Hr from '../Pages/Hr'
import Other from '../Pages/Other'
import All from '../../PopularCourses/Pages/All'
import SalesAndMarketing from '../../PopularCourses/Pages/SalesAndMarketing'
import BankingFinance from '../../PopularCourses/Pages/BankingFinance'
import PersonalDevelopment from '../../PopularCourses/Pages/PersonalDevelopment'
import ITInformationTech from '../../PopularCourses/Pages/ITInformationTech'
import HRHumanResources from '../../PopularCourses/Pages/HRHumanResources'
import Manager from '../../PopularCourses/Pages/Manager'
import Register from '../../RegisterPage/Register'
import Login from '../../Login/Login'


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
          <Route path="/all" element={<All/>} />
          <Route path="/salesandmarketing" element={<SalesAndMarketing/>} />
          <Route path="/bankingfinance" element={<BankingFinance/>} />
          <Route path="/personaldevelopment" element={<PersonalDevelopment/>} />
          <Route path="/itinformation" element={<ITInformationTech/>} />
          <Route path="/hrhuman" element={<HRHumanResources/>} />
          <Route path="/manager" element={<Manager/>} /> 
         
         </Routes>
    </div>
  )
}

export default AllRoutes