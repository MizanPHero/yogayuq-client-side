import { useQuery } from "@tanstack/react-query";
import InstructorCard from "./InstructorCard";
const InstructorAll = () => {

  const { data: instructors = [] } = useQuery(["allinstructor"], async () => {
    const res = await fetch("https://summer-camp-server-eta-sandy.vercel.app/users/instructors");
    return res.json();
  });
  
//   console.log(instructors);
  return (
    <div className="my-container">
      <h1 className="text-3xl font-medium mx-auto border-b-4 border-t-4 w-max p-3 border-[#7fb71e]">Instructors</h1>
      <div className="grid grid-cols-1 mt-8 md:grid-cols-3">
        {instructors.map((instructor) => (
          <InstructorCard key={instructor._id} instructor={instructor} />
        ))}
      </div>
    </div>
  );
};

export default InstructorAll;
