import React from "react"

import { Navigate, Route, Routes } from "react-router-dom"

import MasterLayout from "../../_bootstrap/layouts/MasterLayout"
import Charters from "../pages/Charters"
import Dashboard from "../pages/Dashboard"
import Example from "../pages/Example"
import Tabler from "../pages/Tabler"

const RootRouter = () => {
   return (
      <MasterLayout>
         <Routes>
            <Route element={<Dashboard/>} path="/dashboard"/>
            <Route element={<Example/>} path="/example"/>
            <Route element={<Tabler/>} path="/table"/>
            <Route element={<Charters/>} path="/charts"/>
            <Route element={<Navigate to="/dashboard"/>} path="*"/>
         </Routes>
      </MasterLayout>
   )
}

export default RootRouter