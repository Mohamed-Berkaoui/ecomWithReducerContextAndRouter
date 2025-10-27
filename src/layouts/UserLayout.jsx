import { Outlet } from "react-router"
import NavBar from "../components/Navbar"

function UserLayout() {
  return (
    <div>
        <NavBar/>
        <Outlet/>
    </div>
  )
}

export default UserLayout