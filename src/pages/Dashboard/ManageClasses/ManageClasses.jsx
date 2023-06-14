import Swal from "sweetalert2";
import useAllClasses from "../../../hooks/useAllClass";
import { Link } from "react-router-dom";

const ManageClasses = () => {
  const [classes, , refetch] = useAllClasses();

  const handleApprove = (cls) => {
    fetch(`https://summer-camp-server-eta-sandy.vercel.app/class/approve/${cls._id}`, {
      method: "PATCH",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount) {
          refetch();
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: `Class Approved Successfully!`,
            showConfirmButton: false,
            timer: 1500,
          });
        }
      });
  };

  const handleDeny = (cls) => {
    fetch(`https://summer-camp-server-eta-sandy.vercel.app/class/deny/${cls._id}`, {
      method: "PATCH",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount) {
          refetch();
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: `Class Denied Successfully!`,
            showConfirmButton: false,
            timer: 1500,
          });
        }
      });
  };

  return (
    <div className="overflow-x-auto">
      <table className="table">
        {/* head */}
        <thead className="text-base text-slate-900">
          <tr>
            <th>#</th>
            <th>Class Image</th>
            <th>Class Name</th>
            <th>Instructor Name</th>
            <th>Instructor Email</th>
            <th>Available Seats</th>
            <th>Status</th>
            <th>Approve</th>
            <th>Deny</th>
            <th>Send Feedback</th>
          </tr>
        </thead>
        <tbody>
          {/* row 1 */}
          {classes.map((cls, index) => (
            <tr key={cls._id}>
              <th>{index + 1}</th>
              <td>
                <div className="flex items-center space-x-3">
                  <div className="avatar">
                    <div className="w-12 h-12 mask mask-squircle">
                      <img src={cls.classImage} alt="" />
                    </div>
                  </div>
                </div>
              </td>
              <td>{cls.className}</td>
              <td>{cls.instructorName}</td>
              <td>{cls.instructorEmail}</td>
              <td>{cls.seat}</td>
              <td>{cls.status}</td>
              <td>
                <button
                  onClick={() => handleApprove(cls)}
                  className={`px-4 py-2 text-white rounded-md focus:bg-blue-600 ${
                    cls.status === "approved" || cls.status === "denied"
                      ? "bg-gray-300"
                      : "bg-blue-500 hover:bg-blue-600"
                  }`}
                  disabled={
                    cls.status === "approved" || cls.status === "denied"
                  }
                >
                  Approve
                </button>
              </td>
              <td>
                <button
                  onClick={() => handleDeny(cls)}
                  className={`px-4 py-2 text-white rounded-md focus:bg-orange-700 ${
                    cls.status === "approved" || cls.status === "denied"
                      ? "bg-gray-300"
                      : "bg-orange-600 hover:bg-orange-700"
                  }`}
                  disabled={
                    cls.status === "approved" || cls.status === "denied"
                  }
                >
                  Deny
                </button>
              </td>
              <td>

                <Link to={`../sendfeedback/${cls._id}`}><button className="px-4 py-2 text-white bg-green-500 rounded-md min-w-max hover:bg-green-600 focus:bg-green-600">
                  Send Feedback
                </button>
                </Link>
                
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ManageClasses;
