import { Outlet } from "react-router-dom"
import Navbar from "./Navbar"

const Layout = () => {
  return (
    <div className="bg-primary-cl min-h-screen">
        <Navbar />
        <Outlet />
    </div>
  )
}

export default Layout