import { faBook, faBookOpen, faCircleLeft, faHouseUser, faList, faUsers } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { NavLink, Outlet } from "react-router-dom";

const Dashboard = () => {
    const isAdmin = false;
    const isInstructor = true;
    
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
  {isAdmin && (
    <>
      <li><NavLink to="/dashboard/adminhome"><FontAwesomeIcon icon={faHouseUser} />Admin Home</NavLink></li>
      <li><NavLink to="/dashboard/manageclasses"><FontAwesomeIcon icon={faBook} />Manage Classes</NavLink></li>
      <li><NavLink to="/dashboard/manageusers"><FontAwesomeIcon icon={faUsers} />Manage Users</NavLink></li>
      <li><NavLink to="/"><FontAwesomeIcon icon={faCircleLeft} />Back to Home Page</NavLink></li>
    </>
  )}
  {!isAdmin && (
    <>
      {isInstructor && (
        <>
          <li><NavLink to="/dashboard/instructorhome"><FontAwesomeIcon icon={faHouseUser} />Instructor Home</NavLink></li>
          <li><NavLink to="/dashboard/addclass"><FontAwesomeIcon icon={faBook} />Add Class</NavLink></li>
          <li><NavLink to="/dashboard/myclasses"><FontAwesomeIcon icon={faBookOpen} />My Classes</NavLink></li>
          <li><NavLink to="/"><FontAwesomeIcon icon={faCircleLeft} />Back to Home Page</NavLink></li>
        </>
      )}
      {!isInstructor && (
        <>
          <li><NavLink to="/dashboard/studentlists"><FontAwesomeIcon icon={faList} />Student Lists</NavLink></li>
        </>
      )}
    </>
  )}
</ul>

        </div>
      </div>
    </div>
  );
};

export default Dashboard;
