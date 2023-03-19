import React from "react"

import { Container } from "react-bootstrap"

import { sidebarWidth, topBarHeight } from "../_constants/sidebarWidth"
import Portal from "../components/Portal"
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
               <Portal>
                  <div aria-hidden="true" aria-labelledby="staticBackdropLabel" className="modal fade"
                       data-bs-backdrop="static"
                       data-bs-keyboard="false" id="staticBackdrop" tabIndex="-1">
                     <div className="modal-dialog">
                        <div className="modal-content">
                           <div className="modal-header">
                              <h1 className="modal-title fs-5" id="staticBackdropLabel">Modal title</h1>
                              <button aria-label="Close" className="btn-close" data-bs-dismiss="modal"
                                      type="button"></button>
                           </div>
                           <div className="modal-body">
                              It will not close if you click outside/esc key. :)) Moreover, this modal&apos;s appearance logic is delivered through CDN, not managed by React.useState()
                           </div>
                           <div className="modal-footer">
                              <button className="btn btn-secondary" data-bs-dismiss="modal" type="button">Close</button>
                              <button className="btn btn-primary" type="button">Understood</button>
                           </div>
                        </div>
                     </div>
                  </div>
               </Portal>
            </Container>
         </div>
      </React.Fragment>
   )
}

export default MasterLayout