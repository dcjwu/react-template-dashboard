import React from "react"

// eslint-disable-next-line import/namespace,import/default,import/no-named-as-default,import/no-named-as-default-member
import ThemeProvider from "react-bootstrap/ThemeProvider"
import ReactDOM from "react-dom/client"

import App from "./app/App"

import "bootstrap/dist/css/bootstrap.min.css"

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(
   <React.StrictMode>
      <ThemeProvider breakpoints={["xxxl", "xxl", "xl", "lg", "md", "sm", "xs", "xxs"]} minBreakpoint="xxs">
         <App/>
      </ThemeProvider>
   </React.StrictMode>
)
