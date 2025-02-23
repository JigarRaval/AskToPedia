import { UserNavbar } from "./UserNavbar"
import "../../assets/CSS/SidebarUser.css"
import { Link, Outlet } from "react-router-dom"

export const SidebarUser = () => {
  return (
    <div className="userFixed">
      <UserNavbar />
      <div className="bottom">
      <div className="sidebar" >
        {/* <h1>SideBar</h1> */}
          <ul className="list" >
          <li>
            <Link to={"dashboard"} style={{textDecoration:"none",color:"inherit",}}>Dashboard</Link>
          </li>
          <li>
            <Link to={"dashboard"} style={{textDecoration:"none",color:"inherit",}}>Dashboard</Link>
          </li>
          <li>
            <Link to={"dashboard"} style={{textDecoration:"none",color:"inherit",}}>Dashboard</Link>
          </li>
          <li>
            <Link to={"dashboard"} style={{textDecoration:"none",color:"inherit",}}>Dashboard</Link>
          </li>
        </ul>
      </div>
        <Outlet />
        </div>
    </div>
  )
}
