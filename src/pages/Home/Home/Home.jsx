import FreeCourse from '../FreeCourse/FreeCourse';
import PopularClass from '../PopularClass/PopularClass';
import PopularInstructor from '../PopularInstructor/PopularInstructor';
import Slider from '../Slider/Slider';
import Syllabus from '../Syllabus/Syllabus';


const Home = () => {
    return (
        <>
        <Slider/>
        <PopularClass/>
        <PopularInstructor/>
        <Syllabus/>
        <FreeCourse/>
        </>
    );
};

export default Home;