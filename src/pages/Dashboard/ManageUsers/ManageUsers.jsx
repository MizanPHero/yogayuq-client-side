import { useQuery } from "@tanstack/react-query";
import React from "react";
import Swal from "sweetalert2";

const ManageUsers = () => {
  const { data: users = [], refetch } = useQuery(["users"], async () => {
    const res = await fetch("https://summer-camp-server-eta-sandy.vercel.app/users");
    return res.json();
  });

  const handleMakeAdmin = (user) => {
    fetch(`https://summer-camp-server-eta-sandy.vercel.app/users/admin/${user._id}`, {
      method: "PATCH",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount) {
          refetch();
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: `${user.name} is an Admin Now!`,
            showConfirmButton: false,
            timer: 1500,
          });
        }
      });
  };

  const handleMakeInstructor = (user) => {
    fetch(`https://summer-camp-server-eta-sandy.vercel.app/users/instructor/${user._id}`, {
      method: "PATCH",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount) {
          refetch();
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: `${user.name} is an Instructor Now!`,
            showConfirmButton: false,
            timer: 1500,
          });
        }
      });
  };

  return (
    <div className="w-full overflow-x-auto">
      <table className="table w-full table-zebra">
        {/* head */}
        <thead className="text-base text-slate-900">
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Email</th>
            <th>Make Admin</th>
            <th>Make Instructor</th>
          </tr>
        </thead>
        <tbody>
          {/* row 1 */}

          {users.map((user, index) => (
            <tr key={user._id}>
              <th>{index + 1}</th>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>
                <button
                  onClick={() => handleMakeAdmin(user)}
                  className={`text-white btn btn-ghost ${
                    user.role !== "admin" ? "bg-orange-600" : "bg-gray-300"
                  }`}
                  disabled={user.role === "admin"}
                >
                  Make Admin
                </button>
              </td>
              <td>
                <button
                  onClick={() => handleMakeInstructor(user)}
                  className={`text-white btn btn-ghost ${
                    user.role !== "instructor" ? "bg-blue-500" : "bg-gray-300"
                  }`}
                  disabled={user.role === "instructor"}
                >
                  Make Instructor
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ManageUsers;
