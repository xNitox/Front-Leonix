import { Route, Routes } from "react-router-dom"
import { Sale } from "../src/pages/Sale"
import { Login } from "./pages/Login"
import { AdminDashboard } from "./pages/AdminDashboard"



export const LeonixApp = () => {
  return (
    <Routes>
      <Route path="/sale" element={<Sale />} />
      <Route path="/login" element={<Login />} />
      <Route path="/admin-dashboard" element={<AdminDashboard/>}/>
      
    </Routes>
  )
}
