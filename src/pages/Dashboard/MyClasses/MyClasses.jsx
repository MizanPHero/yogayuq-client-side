
import { Link } from 'react-router-dom';
import useClass from '../../../hooks/useClass';

const MyClasses = () => {
   const [classes] = useClass();
    return (
        <div className="w-full overflow-x-auto">
      <table className="table w-full table-zebra">
        {/* head */}
        <thead className="text-xl text-slate-900">
          <tr>
            <th>#</th>
            <th>Class Name</th>
            <th>Available Seats</th>
            <th>Price</th>
            <th>Total Enrolled</th>
            <th>Status</th>
            <th>Feedback</th>
            <th>Update</th>
          </tr>
        </thead>
        <tbody>
          {/* row 1 */}

          {classes.map((cls, index) => (
            <tr key={cls._id}>
              <th>{index + 1}</th>
              <td>{cls.className}</td>
              <td>{cls.seat}</td>
              <td>{cls.price}</td>
              <td>{cls.enrolled}</td>
              <td>{cls.status}</td>
              <td>{cls.feedback}</td>
              <td>
                <Link to="#"
                // {`../updateclass/${cls._id}`}
                ><button className="px-4 py-2 text-white bg-blue-500 rounded-md hover:bg-blue-600 focus:bg-blue-600">
                  Update
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

export default MyClasses;