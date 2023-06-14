import useEnrolledClass from '../../../hooks/useEnrolledClass';
import moment from 'moment/moment';

const EnrolledClass = () => {
    const [classes] = useEnrolledClass();
    console.log(classes);
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
            <th>Enrolled Date</th>
            <th>Paid Amount</th>
            <th>Transaction Id</th>
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
                      <img src={cls.picture} alt="" />
                    </div>
                  </div>
                </div>
              </td>
              <td>{cls.className}</td>
              <td>{cls.instructor}</td>
              <td>{moment(cls.date).format('LLL')}</td>
              <td>{cls.paidAmount}</td>
              <td>{cls.transactionId}</td>
              
              
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    );
};

export default EnrolledClass;