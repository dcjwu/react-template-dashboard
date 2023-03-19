import React from "react"

import {
   Chart as ChartJS, ArcElement, Tooltip, Legend, CategoryScale,
   LinearScale,
   PointElement,
   LineElement,
   Title,
   Filler,
   RadialLinearScale,
} from "chart.js"
import { Col, Container, Row } from "react-bootstrap"
import { Doughnut, Line, Radar } from "react-chartjs-2"


ChartJS.register(ArcElement, Tooltip, Legend, CategoryScale,
   LinearScale,
   RadialLinearScale,
   PointElement,
   LineElement,
   Title,
   Filler)

export const options = {
   responsive: true,
   plugins: {
      legend: { position: "top", },
      title: {
         display: true,
         text: "Chart.js Line Chart",
      },
   },
}

const labels = ["January", "February", "March", "April", "May", "June", "July"]

export const data1 = {
   labels,
   datasets: [
      {
         fill: true,
         label: "Dataset 2",
         data: [90, 353, 79, 234, 233, 11, 800],
         borderColor: "rgb(53, 162, 235)",
         backgroundColor: "rgba(53, 162, 235, 0.5)",
      },
   ],
}

export const data2 = {
   labels: ["Thing 1", "Thing 2", "Thing 3", "Thing 4", "Thing 5", "Thing 6"],
   datasets: [
      {
         label: "# of Votes",
         data: [2, 9, 3, 5, 2, 3],
         backgroundColor: "rgba(255, 99, 132, 0.2)",
         borderColor: "rgba(255, 99, 132, 1)",
         borderWidth: 1,
      },
   ],
}

export const data = {
   labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
   datasets: [
      {
         label: "# of Votes",
         data: [12, 19, 3, 5, 2, 3],
         backgroundColor: [
            "rgba(255, 99, 132, 0.2)",
            "rgba(54, 162, 235, 0.2)",
            "rgba(255, 206, 86, 0.2)",
            "rgba(75, 192, 192, 0.2)",
            "rgba(153, 102, 255, 0.2)",
            "rgba(255, 159, 64, 0.2)",
         ],
         borderColor: [
            "rgba(255, 99, 132, 1)",
            "rgba(54, 162, 235, 1)",
            "rgba(255, 206, 86, 1)",
            "rgba(75, 192, 192, 1)",
            "rgba(153, 102, 255, 1)",
            "rgba(255, 159, 64, 1)",
         ],
         borderWidth: 1,
      },
   ],
}
const Charters = () => {
   return (
      <Container>
         <Row>
            <Col>
               <Doughnut data={data}/>
            </Col>
            <Col>
               <Radar data={data2}/>
            </Col>
         </Row>
         <Row>
            <Col>
               <Line data={data1} options={options}/>
            </Col>
         </Row>
      </Container>
   )
}

export default Charters