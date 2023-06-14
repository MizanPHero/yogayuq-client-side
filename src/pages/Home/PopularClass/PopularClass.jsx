import { useQuery } from "@tanstack/react-query";
import Card from "./Card";
import { Fade } from "react-awesome-reveal";

const PopularClass = () => {
  const { data: classes = [] } = useQuery(["popularclasses"], async () => {
    const res = await fetch("https://summer-camp-server-eta-sandy.vercel.app/popularclasses");
    return res.json();
  });
  const slicedClasses = classes.slice(0, 6);
  return (
    <div className="my-container">
      <h1 className="text-3xl font-medium mx-auto border-b-4 border-t-4 w-max p-3 border-[#7fb71e]">
        Popular Class
      </h1>
      <div className="grid grid-cols-1 mt-8 md:grid-cols-3">
        <Fade cascade>
          {slicedClasses.map((cls) => (
            <Card key={cls._id} cls={cls} />
          ))}
        </Fade>
      </div>
    </div>
  );
};

export default PopularClass;
