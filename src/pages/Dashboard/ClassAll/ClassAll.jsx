import Card from "../../Home/PopularClass/Card";
import useAllClasses from "../../../hooks/useAllClass";
import { Fade } from "react-awesome-reveal";

const ClassAll = () => {

  const [classes, ] = useAllClasses();

  return (
    <div className="my-container">
      <h1 className="text-3xl font-medium mx-auto border-b-4 border-t-4 w-max p-3 border-[#7fb71e]">
        All Class
      </h1>
      <div className="grid grid-cols-1 mt-8 md:grid-cols-3">
        <Fade cascade>
        {classes.map((cls) => (
          <Card key={cls._id} cls={cls} />
        ))}
        </Fade>
      </div>
    </div>
  );
};

export default ClassAll;
