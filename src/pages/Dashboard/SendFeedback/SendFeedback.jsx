import { useForm } from "react-hook-form";
import { useLoaderData, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const SendFeedback = () => {
  const cls = useLoaderData();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    fetch(`http://localhost:5000/classfeedback/${cls._id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((result) => {
        if (result.modifiedCount > 0) {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: `Class Approved Successfully!`,
            showConfirmButton: false,
            timer: 1500,
          }).then(() => {
            navigate("/dashboard/manageclasses");
          });
        }
      });
  };

  return (
    <div className="text-center rounded bg-slate-50 my-container">
      <form onSubmit={handleSubmit(onSubmit)}>
        <p className="mb-4 text-3xl font-medium text-center">Send Feedback</p>
        {/* register your input into the hook by invoking the "register" function */}

        <textarea
          cols={80}
          rows={5}
          defaultValue={cls.feedback}
          placeholder="Feedback..."
          className="w-1/2 p-4"
          type="text"
          {...register("feedback", { required: true })}
        />
        <br />

        <input className="mt-5 btn-primary" value="Update" type="submit" />
      </form>
    </div>
  );
};

export default SendFeedback;
