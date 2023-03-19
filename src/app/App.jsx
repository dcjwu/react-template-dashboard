import React from "react"

import { Container } from "react-bootstrap"

import { sidebarWidth, topBarHeight } from "../_bootstrap/_constants/sidebarWidth"
import Sidebar from "../_bootstrap/Sidebar/Sidebar"
import Topbar from "../_bootstrap/Topbar/Topbar"

function App() {

   return (
      <>
         <Sidebar/>
         <Topbar/>
         <div style={{ marginLeft: sidebarWidth, marginTop: topBarHeight + 20 }}>
            <Container fluid>
               sdlfkjsdalkjflaksdj
               sdlfkjsdalkjflaksdj
               sdlfkjsdalkjflaksdj
               sdlfkjsdalkjflaksdj
               sdlfkjsdalkjflaksdj
               sdlfkjsdalkjflaksdj
               sdlfkjsdalkjflaksdjv
               sdlfkjsdalkjflaksdj
               sdlfkjsdalkjflaksdj
               sdlfkjsdalkjflaksdjvsdlfkjsdalkjflaksdjsdlfkjsdalkjflaksdj
            </Container>
         </div>
      </>
   )
}

export default App
