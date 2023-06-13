// eslint-disable-next-line react/prop-types
const InstructorCard = ({ instructor }) => {
  // eslint-disable-next-line react/prop-types
  const { name, email, photo } = instructor;

  return (
    <>
      <div className="w-full px-6 py-6">
        <div className="overflow-hidden bg-white rounded-lg shadow-xl">
          <div className="flex justify-center pt-4">
            <img
              className="object-cover w-32 h-32 rounded-full"
              src={photo}
              alt="Instructor Photo"
            />
          </div>
          <div className="px-6 py-4 text-center">
            <div className="mb-2 text-xl text-[#7fb71e] font-bold">INSTRUCTOR</div>
            <div className="mb-2 text-xl font-bold">Name: {name}</div>
            <div className="mb-2 text-gray-700">Email: {email}</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default InstructorCard;
