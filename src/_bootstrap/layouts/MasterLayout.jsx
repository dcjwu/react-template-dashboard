import React from "react"

import { Container } from "react-bootstrap"

import { sidebarWidth, topBarHeight } from "../_constants/sidebarWidth"
import Sidebar from "../components/Sidebar/Sidebar"
import Topbar from "../components/Topbar/Topbar"

const MasterLayout = ({ children }) => {
   return (
      <React.Fragment>
         <Sidebar/>
         <Topbar/>
         <div className="pb-4" style={{
            marginLeft: sidebarWidth,
            marginTop: topBarHeight + 20,
         }}>
            <Container fluid>
               {children}
            </Container>
         </div>
      </React.Fragment>
   )
}

export default MasterLayout