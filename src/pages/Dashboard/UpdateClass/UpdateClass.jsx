import React from 'react';
import { useLoaderData } from 'react-router-dom';

const UpdateClass = () => {
    const cls = useLoaderData();
    console.log(cls);

    const onSubmit = (data) => {
       console.log(data);
      };





    return (
        <div className="w-[60%] text-center rounded bg-slate-50 my-container">
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <p className="mb-4 text-3xl font-medium text-center">Update Class</p>
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

        <div className="space-y-1 text-left">
          <label htmlFor="classImage" className="font-normal text-gray-800">Class Image:</label>
          <input
            id="classImage"
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

export default UpdateClass;