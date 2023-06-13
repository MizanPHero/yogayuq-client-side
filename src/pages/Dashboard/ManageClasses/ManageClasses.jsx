import React from "react";
import useAllClasses from "../../../hooks/useAllClass";

const ManageClasses = () => {
  const [classes] = useAllClasses();
  console.log(classes);
  return (
    <div className="overflow-x-auto">
      <table className="table">
        {/* head */}
        <thead>
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
                <button className="px-4 py-2 text-white bg-blue-500 rounded-md hover:bg-blue-600 focus:bg-blue-600">
                  Approve
                </button>
              </td>
              <td>
                <button className="px-4 py-2 text-white bg-orange-600 rounded-md hover:bg-orange-700 focus:bg-orange-700">
                  Deny
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ManageClasses;
