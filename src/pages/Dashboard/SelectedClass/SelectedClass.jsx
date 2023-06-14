import Swal from "sweetalert2";
import useSelectedClass from "../../../hooks/useSelectedClass";
import { useNavigate } from "react-router-dom";

const SelectedClass = () => {
  const [carts, ,refetch] = useSelectedClass();
  // console.log(carts);
  const navigate = useNavigate();

  const handlePayment = (item) => {
   
    navigate("/dashboard/payment", {
      state: item
    })
  }

  const handleDelete = (item) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://127.0.0.1:5000/carts/${item._id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              refetch();
              Swal.fire("Deleted!", "Your class has been deleted.", "success");
            }
          });
      }
    });
  };

  return (
    <div className="w-full overflow-x-auto">
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
            <th>Delete</th>
            <th>Payment</th>
          </tr>
        </thead>
        <tbody>
          {/* row 1 */}
          {carts.map((cart, index) => (
            <tr key={cart._id}>
              <th>{index + 1}</th>
              <td>
                <div className="flex items-center space-x-3">
                  <div className="avatar">
                    <div className="w-12 h-12 mask mask-squircle">
                      <img src={cart.classImage} alt="" />
                    </div>
                  </div>
                </div>
              </td>
              <td>{cart.className}</td>
              <td>{cart.instructorName}</td>
              <td>{cart.instructorEmail}</td>
              <td>{cart.seat}</td>
              <td>
                <button
                  onClick={() => handleDelete(cart)}
                  className="px-4 py-2 text-white bg-orange-600 rounded-md focus:bg-orange-700 hover:bg-orange-700"
                >
                  Delete
                </button>
              </td>
              <td>
              <button
                  onClick={() => handlePayment(cart)}
                  className= "px-4 py-2 text-white bg-blue-500 rounded-md focus:bg-blue-600 hover:bg-blue-600"
                >
                  Pay
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default SelectedClass;
