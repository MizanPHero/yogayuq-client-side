import { useContext } from "react";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import { AuthContext } from "../../../Provider/AuthProvider";

const img_hosting_token = import.meta.env.VITE_Image_Upload_token;

const AddClass = () => {
  const { user } = useContext(AuthContext);
  const {register, handleSubmit, reset, formState: { errors }, } = useForm();
  const img_hosting_url = `https://api.imgbb.com/1/upload?key=${img_hosting_token}`

  const onSubmit = (data) => {
    data.status="pending";
    data.enrolled=0;
    data.feedback="";
    console.log(data);

    const formData = new FormData();
    formData.append('image', data.classImage[0])

    fetch(img_hosting_url, {
        method: 'POST',
        body: formData
    })
    .then(res => res.json())
    .then(imgResponse => {
        if(imgResponse.success){
            const classImage = imgResponse.data.display_url;
            const {instructorName, instructorEmail, className, enrolled, status, price, seat, feedback} = data;
            const newItem = {className, classImage, instructorName, instructorEmail, enrolled: parseFloat(enrolled), seat: parseFloat(seat), status, feedback, price: parseFloat(price)}
            console.log(newItem)
           fetch("http://127.0.0.1:5000/classes", {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify(newItem),
            })
              .then((res) => res.json())
              .then((result) => {
                if (result.insertedId) {
                  Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "Class Added successfully.",
                    showConfirmButton: false,
                    timer: 1500,
                  });
                  reset();
                }
              });
        }
    })


    
    
  };

  return (
    <div className="w-[60%] text-center rounded bg-slate-50 my-container">
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <p className="mb-4 text-3xl font-medium text-center">Add a Class</p>
        {/* register your input into the hook by invoking the "register" function */}
        <div>
          <input
            className="input-style"
            placeholder="Class Name"
            {...register("className", { required: true })}
          />{" "}
          <br />
          {errors.className && (
            <span className="ml-4 text-red-500">This field is required</span>
          )}
        </div>

        <div className="text-left">
          <input 
            className="w-full"
            type="file"
            {...register("classImage", { required: true })}
          />{" "}
          <br />
          {errors.classImage && (
            <span className="ml-4 text-red-500">This field is required</span>
          )}
        </div>

        <div>
          <input
            className="input-style"
            placeholder="Instructor Name"
            value={user?.displayName}
            {...register("instructorName", { required: true })}
          />{" "}
          <br />
          {errors.InstructorName && (
            <span className="ml-4 text-red-500">This field is required</span>
          )}
        </div>
        <div>
          <input
            className="input-style"
            type="email"
            value={user?.email || ""}
            placeholder="Instructor Email"
            {...register("instructorEmail", { required: true })}
          />{" "}
          <br />
          {errors.instructorEmail && (
            <span className="ml-4 text-red-500">This field is required</span>
          )}
        </div>

        <div>
          <input
            className="input-style"
            type="number"
            placeholder="Available Seat"
            {...register("seat", { required: true })}
          />{" "}
          <br />
          {errors.seat && (
            <span className="ml-4 text-red-500">This field is required</span>
          )}
        </div>
        
        <div>
          <input
            className="input-style"
            type="number"
            placeholder="Price"
            {...register("price", { required: true })}
          />{" "}
          <br />
          {errors.price && (
            <span className="ml-4 text-red-500">This field is required</span>
          )}
        </div>
        
        <br />

        <input value="Add Class" className="mt-5 btn-primary" type="submit" />
      </form>
    </div>
  );
};

export default AddClass;
