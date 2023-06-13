
import useClass from '../../../hooks/useClass';

const MyClasses = () => {
   const [classes] = useClass();
   console.log(classes);
    return (
        <div>
            my classes {classes.length}
        </div>
    );
};

export default MyClasses;