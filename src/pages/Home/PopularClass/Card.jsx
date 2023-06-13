import {useNavigate } from "react-router-dom";

import { useContext } from "react";

import Swal from "sweetalert2";
import { AuthContext } from "../../../Provider/AuthProvider";

// eslint-disable-next-line react/prop-types
const Card = ({ cls }) => {

    console.log(cls);
  const navigate = useNavigate();

  const { user } = useContext(AuthContext);


  // eslint-disable-next-line react/prop-types
  const {className, classImage, instructorName, price, enrolled, seat} = cls;

  return (
    <div>
      <div className="w-full px-6 py-6">
        <div className="overflow-hidden bg-white rounded-lg shadow-xl">
          <div
            className="p-4 bg-top bg-no-repeat bg-cover h-80"
            style={{ backgroundImage: `url(${classImage})` }}
          ></div>


          <div className="flex items-end justify-between">

          <div className="p-4">
            <p className="text-sm font-bold tracking-wide text-gray-700 uppercase">
              {className}
            </p>
            <p className="text-3xl text-gray-900">${price}</p>
            <p className="font-normal text-gray-800">Total Enrolled: {enrolled}</p>
            <p className="font-normal text-gray-800">Available Seat: {seat}</p>
            <p className="font-normal text-gray-800">Instructor: {instructorName}</p>
          </div>
          <div className="flex p-4 pt-0 text-gray-700 ">
            <button
              onClick={() => {
                if (!user) {
                  Swal.fire({
                    title: "Login Required",
                    text: "You have to login first to view details",
                    icon: "warning",
                    confirmButtonText: "OK",
                  }).then((result) => {
                    if (result.isConfirmed) {
                      navigate(`../toy/${_id}`);
                    }
                  });
                } else {
                  navigate(`../toy/${_id}`);
                }
              }}
              className="font-medium btn-primary"
            >
              Select
            </button>
          </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
