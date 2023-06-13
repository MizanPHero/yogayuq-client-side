import { useQuery } from "@tanstack/react-query";
import Card from "../../Home/PopularClass/Card";

const ClassAll = () => {
  const { data: classes = [] } = useQuery(["popularclasses"], async () => {
    const res = await fetch("http://127.0.0.1:5000/classesall");
    return res.json();
  });

  return (
    <div className="my-container">
      <h1 className="text-3xl font-medium mx-auto border-b-4 border-t-4 w-max p-3 border-[#7fb71e]">
        All Class
      </h1>
      <div className="grid grid-cols-1 mt-8 md:grid-cols-3">
        {classes.map((cls) => (
          <Card key={cls._id} cls={cls} />
        ))}
      </div>
    </div>
  );
};

export default ClassAll;
