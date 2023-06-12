import { FaceFrownIcon } from "@heroicons/react/24/solid";
import { NavLink, Outlet } from "react-router-dom";

const Dashboard = () => {
    const isAdmin = true;
  return (
    <div>
      <div className="drawer lg:drawer-open">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="flex flex-col items-center justify-center drawer-content">
            <Outlet></Outlet>
          <label
            htmlFor="my-drawer-2"
            className="btn btn-primary drawer-button lg:hidden"
          >
            Open drawer
          </label>
        </div>
        <div className="drawer-side">
          <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
          <ul className="h-full p-4 menu w-80 bg-base-200 text-base-content">
          {
                        isAdmin ? <>
                            <li><NavLink to="/dashboard/adminhome">Admin Home</NavLink></li>
                            <li><NavLink to="/dashboard/manageclasses">Manage Classes</NavLink></li>
                            <li><NavLink to="/dashboard/manageusers">Manage Users</NavLink></li>
                            
                        </> : <>
                            <li><NavLink to="/">Home</NavLink></li>
                        </>
                    }
                    
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
