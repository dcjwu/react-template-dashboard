import React from "react"

import { Table } from "react-bootstrap"
import { Link } from "react-router-dom"

const Tabler = () => {
   return (
      <Table bordered hover striped
              variant="light">
         <thead>
            <tr>
               <th>#</th>
               <th>First Name</th>
               <th>Last Name</th>
               <th>Username</th>
            </tr>
         </thead>
         <tbody>
            <tr>
               <td>1</td>
               <td>Mark</td>
               <td>Otto</td>
               <td>@mdo</td>
            </tr>
            <tr>
               <td>2</td>
               <td>Jacob</td>
               <td>Thornton</td>
               <td>@fat</td>
            </tr>
            <tr>
               <td>3</td>
               <td colSpan={2}>Larry the Bird</td>
               <td>
                  <Link to="/dashboard">
                     Testing Links here
                  </Link>
               </td>
            </tr>
         </tbody>
      </Table>
   )
}

export default Tabler