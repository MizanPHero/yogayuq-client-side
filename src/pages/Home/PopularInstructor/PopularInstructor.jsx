import { Rotate } from "react-awesome-reveal";
import InstructorCard from "../../InstructorAll/InstructorCard";
import { useQuery } from "@tanstack/react-query";

const PopularInstructor = () => {
  const { data: instructors = [] } = useQuery(["allinstructor"], async () => {
    const res = await fetch("https://summer-camp-server-eta-sandy.vercel.app/users/instructors");
    return res.json();
  });
  const slicedInstructors = instructors.slice(0, 6);
  return (
    <div>
      <div className="my-container">
        <h1 className="text-3xl font-medium mx-auto border-b-4 border-t-4 w-max p-3 border-[#7fb71e]">
          Popular Instructors
        </h1>
        <div className="grid grid-cols-1 mt-8 md:grid-cols-3">
          <Rotate>
          {slicedInstructors.map((instructor) => (
            <InstructorCard key={instructor._id} instructor={instructor} />
          ))}
          </Rotate>
        </div>
      </div>
    </div>
  );
};

export default PopularInstructor;
