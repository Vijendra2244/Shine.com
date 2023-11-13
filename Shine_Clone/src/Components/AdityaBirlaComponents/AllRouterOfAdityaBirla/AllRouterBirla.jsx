import React from 'react'
import {Routes,Route} from "react-router-dom";
import JobsBirla from "../AdityaBirlaPages/JobsBirla"
import ContacUsBirla from '../AdityaBirlaPages/ContacUsBirla'
import HomeBirla from '../AdityaBirlaPages/HomeBirla'
import AboutUsBirla from '../AdityaBirlaPages/AboutUsBirla'

function AllRouterBirla() {
  return (
    <div>
        <Routes>
            <Route path = "/homebirla" element={<HomeBirla/>}/>
            <Route path = "/aboutusbirla" element={<AboutUsBirla/>}/>
            <Route path = "/jobsbirla" element={<JobsBirla/>}/>
            <Route path = "/contactusbirls" element={<ContacUsBirla/>}/>
        </Routes> 
    </div>
  )
}

export default AllRouterBirla