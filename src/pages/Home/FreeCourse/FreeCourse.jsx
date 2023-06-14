import FreeCard from "./FreeCard";

const FreeCourse = () => {
  return (
    <div className="mt-8 my-container">
      <h1 className="text-3xl my-8 font-medium mx-auto border-b-4 border-t-4 w-max p-3 border-[#7fb71e]">
        Free Courses
      </h1>
      <div className="flex flex-col justify-center gap-6 md:flex-row lg:flex-row">
        <FreeCard
          title="Fancy a 40 minute Vinyasa Yoga class?"
          subtitle="FREEBIE FOR YOU"
          image="https://i.ibb.co/mBCm18q/pexels-kampus-production-6698513.jpg"
          description="This 40-minute Vinyasa yoga class is designed to invigorate your mind, body, and soul. This class is designed to make you sweat and put a smile on your face."
        />
        <FreeCard
          title="Love Yin Yoga? You'll want to try this!"
          subtitle="FREEBIE FOR YOU"
          image="https://i.ibb.co/jLVFJ4s/ez3gif-3-7a769bb423.jpg"
          description="This Yin practice is designed to open the chest, ribs, and upper back, awakening the energy of the heart and tending to the emotional body."
        />
      </div>
    </div>
  );
};

export default FreeCourse;
