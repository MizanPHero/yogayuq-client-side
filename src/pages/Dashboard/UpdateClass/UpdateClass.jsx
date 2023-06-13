import { useForm } from 'react-hook-form';
import { useLoaderData } from 'react-router-dom';

const UpdateClass = () => {
    const cls = useLoaderData();
    const { register, handleSubmit, reset, formState: { errors }, } = useForm();
    console.log(cls);

    const onSubmit = (data) => {
       console.log(data);
      };


    return (
        <div>update route is not required as assignment</div>
    );
};

export default UpdateClass;